import React, { useState } from 'react'
import loginFormImage from "../../assets/images/loginImage.png";
import LoginPageNavBar from '../../components/navbars/LoginPageNavbar';
import ReCAPTCHA from "react-google-recaptcha";

const LoginPage = () => {
  const [valid,setValid] = useState(false);
  function onChange(){
    setValid(true);
  }
  return (
    <div>
      <LoginPageNavBar />
      <div className='h-[650px] w-screen bg-white-600 flex justify-center items-center'>
        <div className='w-3/4 h-3/4 flex justify-between items-center flex-row shadow-2xl rounded-lg'>
          <div className='flex justify-center align-middle w-2/4'>
            <img className='w-3/4 align-middle' src={loginFormImage} />
          </div>
          <div className='w-2/4 h-2/4 mt-[-10%] flex flex-col text-center'>
            <div className='w-1/2 flex justify-center align-middle '><h1 className='text-3xl font-bold mx-screen text-black'>Sign In</h1></div>
            <br />
            <form className='flex flex-col justify-center' onSubmit={() => console.log("Submitting")}>
              <input className="w-3/5 px-3 py-2 mt-1 mb-1 text-white placeholder-white  bg-[#2d2d2d]  border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent" type="email" placeholder="Email"></input>
              <input type="password" className='w-3/5 px-3 py-2 mt-1 text-white placeholder-white  bg-[#2d2d2d]  border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="Password" />
              <br />
              <ReCAPTCHA
                sitekey= '{process.env.SITEKEY}'
                onChange={onChange}
              />
              <br />
              <button className="w-3/5 px-4 py-2 font-medium text-white bg-[#5161e9] rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit" disabled={!valid}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
