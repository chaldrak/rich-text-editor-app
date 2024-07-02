import React from 'react'
import Image from 'next/image'
import { CiMail } from 'react-icons/ci'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { GrSecure } from "react-icons/gr";

const SigninPage = () => {
  return (
    <div>
      
      <div className="text-white">
       <div className=" bg-[#0e0e0e] p-5 m-10 rounded-3xl">
        <div className="grid grid-cols-2">
            <div className="rounded-xl  mr-4 flex items-start justify-start bg-[#9464F8]">

                <Image src="/administrateur-verifie-journaux-evenements-du-serveur_482257-80146.avif" alt="" width={400} height={400} className="rounded-s-xl sm:rounded-s-xl"/>
            </div>
           
         
            <div className=" bg-[#0D3431] p-10 rounded-xl w-full">
                <div>
                    <div className='flex items-center justify-center'>
                        <Image src="/logo.png" alt='' width={70} height={70} />
                    </div>
                   
                    <h1 className="mt-4 text-2xl font-bold flex items-center justify-center">Welcome Back !!</h1>
                </div>
                
                <div className="mt-8 flex items-center justify-center">
                    <div className=" bg-[#9464F8]  border-slate-300 px-8 p-2 rounded-s-lg" dir="ltr"><p>As a Student</p></div>
                    <div className="border border-slate-200 px-8 p-2  rounded-s-lg" dir="rtl"><p>As a Teacher</p></div>
                </div>
                <div className="mt-4 text-base max-h-fit h-fit relative text-white ">
                    <input
                    type="text"
                    className="bg-transparent py-3 rounded-md border border-slate-200 pl-8 pr-2 w-full"
                    placeholder="Email address"
                    />
                    <CiMail
                    size={20}
                    className="absolute top-1/2 left-2 -translate-y-1/2"
                    />
                </div>

                <div className="mt-4 max-h-fit h-fit relative text-base text-white ">
                    <input
                    type="password"
                    className="bg-transparent py-3 rounded-md border border-slate-200 pl-8 pr-2 w-full"
                    placeholder="Password"
                    />
                    <GrSecure 
                    size={20}
                    className="absolute top-1/2 left-2 -translate-y-1/2"
                    />

                    <AiOutlineEye
                        size={20}
                        className="absolute top-1/2 inset-y-0 right-2 -translate-y-1/2"
                    />
                </div>
                
                
               
                <div className="mt-2 flex">
                   
                    <p className="ml-auto  text-[#03C490] font-normal">Forgot Password ?</p>
                </div>
                <button className="mt-4 rounded-lg p-2 border-slate-200 bg-[#FEE86E] text-[#07312F] font-bold text-base w-full">Login</button>
                <div className="mt-4 flex items-center justify-center "><p>or</p></div>

                <div className="mt-4 flex items-center justify-center  ">
                    <div className="border mr-4 rounded-lg w-12 h-12 bg-[#254746]">
                       <BsFacebook className='text-3xl m-2'/>
                    </div>
                    <div className="border rounded-lg w-12 h-12 bg-[#254746]">
                        <FcGoogle className='text-3xl m-2'/>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <div><p>Don't have an account?</p></div>
                    <div className=" ml-2 text-[#03C490]"><p>Sign Up</p></div>
                </div>
            </div>
            
        </div>
           
       </div>
    </div>


    </div>
  )
}

export default SigninPage
