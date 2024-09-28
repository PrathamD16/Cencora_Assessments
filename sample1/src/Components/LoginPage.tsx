import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const nav = useNavigate()
    const clickHandler = () => {
        nav("/homepage")
    }
    return (
        <div className='mx-auto h-screen flex items-center justify-center'>
            <button onClick={clickHandler} className='bg-blue-600 px-4 py-2 rounded-xl text-white hover:bg-blue-900 '>Click to Proceed</button>
        </div>
    )
}

export default LoginPage
