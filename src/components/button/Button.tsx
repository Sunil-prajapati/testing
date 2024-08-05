import handleOther from '@/helper/helper'
import { useState } from 'react'


const Button = () => {
    const [text, setText] = useState<string>("")
    const [data, setData] = useState<string>("")

    const handleData = () => {
        setData("Functional component update!")
    }
    return (
        <div>
            <button data-testid="testing" onClick={() => setText("Testing with jest is  ON!")}>Update data</button>
            <h3>{text}</h3>
            <button data-testid="btn1" onClick={() => handleData()}>Functional component update</button>
            <button onClick={handleOther}>Handle other</button>
            <h2>{data}</h2>
        </div>
    )
}
export default Button