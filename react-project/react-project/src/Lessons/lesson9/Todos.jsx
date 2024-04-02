import axios from "axios"
import { useEffect, useState } from "react"
import { GetTodoById, GetTodos } from "./api"

export const Todos = () => {
    const [list, setList] = useState()
    const [index, setIndex] = useState(-1)
    const [todo, setTodo] = useState({})

    useEffect(() => {
        GetTodos()
        // axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(x => {
                console.log(x);
                setList(x.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const getOne = (id) => {
        GetTodoById(id)
            .then(x => {
                setTodo(x.data)
            })
    }

    return <>
        {todo != {} &&
            <div>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>
                <h4>{todo.userId}</h4>
            </div>
        }
        {list && list.map(x => <div><p key={x.id}>{x.title}</p><button onClick={() => getOne(x.id)}>get one</button></div>)}

    </>
}