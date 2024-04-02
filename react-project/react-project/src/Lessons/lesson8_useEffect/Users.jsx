import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Users = () => {

    const [num, setNum] = useState(1)

    const list = useSelector(x => x.users)

    //life cycle = מחזור החיים
    //1. onLoad
    //קומפוננטה נולדת בעת טעינה
    //2. onchange 
    //קומפוננטה יכולה לעבור שינויים
    //משתנה useState בזמן שמשתנה של 
    //3. onDestroy
    //קומפוננטה מתה - כשהיא מוסרת מהמסך
    //ע"י ניתוב או שינוי כלשהו שגורם לאי הצגה

    //useEffect - מקבלת שני ארגומנטים
    //1.callback פונקצית 
    //2.מערך

    useEffect(() => {
        //מה שנכתב כאן יופעל בעת טעינה
        document.title = `There Are ${list.length} Users`

        //הפונקציה מחזירה פונקציה נוספת
        //שתופעל בעת דריסה של הקומפוננטה - מוות
        return () => {
            document.title = `React App`
        }

        //א"א להפעיל פונקציה שעושה החזרה כלשהי
    }, [])

    useEffect(() => {
        alert(num)
        //בעת שינוי useEffect כל משתנה שיכתב בתוך המערך יפעיל את ה 
    }, [num])


    return <>
        <h1 onMouseOver={() => setNum(x => num + 1)}>{num}</h1>

        {list.map((u, index) => <p key={index}>{u.name} - {u.email} - {u.password}</p>)}
    </>
}