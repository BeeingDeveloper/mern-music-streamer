import React from 'react'
import {FcGoogle} from 'react-icons/fc'


const Login = () => {
  return (
    <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
      <div className='flex items-center justify-center gap-2 p-2 rounded-md bg-cardOverlay hover:bg-card transition-all ease-in-out duration-600' >
        <FcGoogle />
        <p>Sign in with Google</p>
      </div>
    </div>
  )
}

export default Login


{/* <div
        onClick={loginWithGoogle}
        className="flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all"
      >
        <FcGoogle className="text-xl" />
        <p>Signin with Google</p>
      </div> */}