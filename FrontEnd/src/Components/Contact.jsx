import React from 'react'

const data = {
  name: 'Ecommers made by Elias Silva',
  email: 'eliassilva@gmail.com',
  phone: '+598 099 405 940',
  about: 'This Ecommerce is made as a project in',
  about2: 'for my portfolio'
}

function Contact() {
  return (
    <div>
      <h1 className='text-center mt-10 text-4xl'>Contact me</h1>

      <div className="bg-[#001d3d] shadow-2xl border border-black max-w-[30rem] mx-auto my-2 rounded-3xl ">

      <form className=' text-[#ffc600] max-w-96 mx-auto my-24 p-12 rounded-lg shadow-2xl'>

        <div className="flex flex-col">
          <div className="mb-8 text-center">
            <label htmlFor="name">{data.name}</label>
          </div>

          <div className="mb-8 text-center">
            <label htmlFor="email">{data.email}</label>
          </div>

          <div className="mb-8 text-center">
            <label htmlFor="phone">{data.phone}</label>
          </div>

          <div className="mb-8 shadow-xl text-center rounded-lg">
            <label htmlFor="about">{data.about} <span className='text-sky-400 font-medium'>React</span> {data.about2}</label>
          </div>

        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact