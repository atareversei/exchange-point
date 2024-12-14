import React from 'react'
import './App.css'
import { Button } from './Button'

export function App() {
  const [mobileNumber, setMobileNumber] = React.useState('')

  const callAPI = async (e) => {
    e.preventDefault()
    const data = {
      mobile: mobileNumber
    }
    const jsonData = JSON.stringify(data);
    const response = await fetch("http://main.3t.iau.ir/api/v1/auth/user/validate", {
      headers: {
        "Content-Type": "application/json",
        "Accept-Content": "application/json",
      },
      body: jsonData,
      method: 'POST'
    })
    const result = await response.json()
    console.log(result)
  }

  return (<div>
    <form>
      <label>
        mobile:
        <input name='mobile' onChange={(e) => {
          setMobileNumber(e.target.value)
        }} />
      </label>
      <p>your mobile number is: {mobileNumber}</p>
      <Button text="submit form👑" clickHandler={callAPI} />
    </form>

    <Button text="refresh" clickHandler={() => document.location.reload()} />
  </div>)
}

