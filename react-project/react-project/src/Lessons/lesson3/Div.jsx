import { Person } from "../lesson2/Person"

export const Div = () => {
    
    const name='sara'

    //JSX כללי כתיבה ב 
    return <>
        {/* 1. באות קטנה HTML קומפוננטה באות גדולה - תגית של */}
        {/* 2. בתוך סוגריים מקושטות JS קוד  */}
        {/* 3. attributes - camelCase */}
        {/* 4. JS אין שימוש במילים שמורות של */}
        {/* class - className={} */}
        {/* for - htmlFor */}
        {/* 5. הצבת ערכים של מאפיינים בתוך סוגריים מקושטות אא"כ מדובר במחרוזת */}
        <Person id="p1" name='aaa' age={12}></Person>
        {/* 6. בתוך סוגריים מקושטות XML שימוש בפרמטרים בתוך */}
        <p>{name}</p>
        <label htmlFor={'name'}>שם פרטי</label>
        <input id={'name'} placeholder={'input name'}></input>
    </>
}