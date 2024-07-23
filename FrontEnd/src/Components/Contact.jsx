import React from 'react'
import data from './contactData.json'


function Contact() {
  return (
    <div>
      <h1 className='text-center mt-10 text-4xl'>Contact me</h1>

      <form className=' bg-[#343a40] text-[#ffffff] max-w-[1080px] h-auto mx-auto my-24 p-12 rounded-lg shadow-2xl'>

        <div className="flex flex-col">

          <div className="mb-8 text-center font-medium">
            <label htmlFor="email">Email: <span className='font-medium'>{data.email}</span> </label>
          </div>

          <div className="mb-8 text-center font-medium">
            <label htmlFor="phone">Phone Number: <span className='font-semibold'>{data.phone}</span></label>
          </div>

          <div className="mb-8 shadow-xl text-center rounded-lg font-medium">
            <label htmlFor="about">{data.about}</label>
            <div className="flex items-center flex-col">
              <div className="flex items-center justify-center">

                <span className='font-semibold text-sky-600'> {data.react.name}</span>
                <img src={data.react.icon}
                  alt="React.js" className='w-5 h-10 ml-2' />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm font-medium">
            <label htmlFor="name">{data.info}</label>
          </div>

        </div>
      </form>
    </div>

  )
}

export default Contact