import React from 'react'
import registerFormImage from "../../assets/images/registerImage.png";
import RegisterPageNavBar from '../../components/navbars/RegisterPageNavbar';

const SignupPage = () => {
  return (
    <div>
      <RegisterPageNavBar />
      <div className='h-[650px] w-screen bg-white-600 flex justify-center items-center'>
        <div className='w-3/4 h-3/4 flex justify-between items-center flex-row shadow-2xl rounded-lg'>
          <div className='flex justify-center align-middle w-2/4'>
            <img className='w-3/4 align-middle' src={registerFormImage} />
          </div>
          <div className='w-2/4 mt-[-15%] h-2/4 flex flex-col text-center'>
            <div className='w-1/2 flex justify-center align-middle '><h1 className='text-3xl font-bold mx-screen text-black'>Sign Up</h1></div>
            <br />
            <form className='flex flex-col justify-center' onSubmit={() => console.log("Submitting")}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }} >
                <input type="text" className='w-2/6 px-3 py-2 mt-1 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="First Name" />
                <input type="text" className='w-2/6 px-3 py-2 mt-1 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="Last Name" />
              </div>
              <input type="text" className='w-2/3 px-3 py-2 mt-2 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="User name" />
              <input type="text" className='w-2/3 px-3 py-2 mt-2 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="Email" />
              <input type="password" className='w-2/3 px-3 py-2 mt-2 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="Password" />
              <input type="password" className='w-2/3 px-3 py-2 mt-2 mb-1 text-white placeholder-white bg-[#2d2d2d] border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 focus:border-transparent' placeholder="Confirm Password" />
              <button className="w-2/3 mt-2 px-4 py-2 font-medium text-white bg-[#5161e9] rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
