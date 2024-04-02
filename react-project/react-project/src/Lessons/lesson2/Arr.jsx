export const Arr = () => {
    const arr = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
    return <> 
        {arr.map((item, index) => <p key={index}>{index}-{item}</p>)}
    </>
}

//מבנה פונקציה אנונימית
() => {
    return 10;
}

//ככשולחים פרמטרים, נכתוב בתוך הסוגריים
(x, y) => {
    return x * y;
}

//כאשר יש רק פרמטר אחד, לא צריך לשים סוגריים
x => {
    return x * x;
}

// הסבר להפעלת פונקציה
// פעם ראשונה שלחנו מצביעים
// פעם שניה שלחנו ערכים
// const g = (x, y) => {
//     return x + y
// }

// let a = 9
// let s = 4
// g(a, s)
// g(8, 9)

//פונקציה שמופעלת על מערך
// function map(function f){
//     for(i=0; i<this.length; i++){
//         f(this[i])
//     }
// }

// function d() {
//     return 'a'
// }

// הסבר להפעלת פונקציה
// פעם ראשונה שלחנו מצביע לפונקציה
// פעם שניה שלחנו ערך של פונקציה - פונקציה אנונימית
// arr.map(d)
// arr.map(() => {

// })