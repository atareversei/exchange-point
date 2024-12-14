import React from 'react'

export function SetButton() {
   const [count, setCount] = React.useState(0)
   // [value, setValue]
   // state += 1 -> in javascript
   // setValue((state) => {return state + 1}) -> in react

   return <div><button onClick={(event) => {
      console.log(event)
      setCount((state) => state + 1 )
   }
   }>click me {count ? count : "no value"}</button></div>
}