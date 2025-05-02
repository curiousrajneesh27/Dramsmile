import React from 'react'
import '../../index.css'

const Login = () => {
  return (
    <div className='h-screen w-full bg-zinc-200 flex items-center justify-center'>
      <div className='h-[60vh] w-[30vw]'>
        <h1 className='text-5xl font-semibold'>Login</h1>
        <div className='mt-12'>
          <span className='text-sm font-medium block'>EMAIL</span>
          <input type="text" name="" className='bg-white outline-none px-4 py-2 font-medium lowercase block w-full mt-1 border-b-2 border-green-500' />
        </div>
        <div className='mt-5'>
          <span className='text-sm font-medium block'>PASSWORD</span>
          <input type="text" name="" className='bg-white outline-none px-4 py-2 font-medium lowercase block w-full mt-1 border-b-2 border-green-500' />
        </div>
        <button className='block bg-orange-400 py-4 w-full text-white font-medium rounded-xl mt-6 cursor-pointer'>LOGIN</button>
      </div>
    </div>
  )
}

export default Login;