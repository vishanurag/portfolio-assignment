import React from 'react'
import { useState } from 'react';
import SectionHeading from './assets/SectionHeading'

const Contact = () => {
  const [inpName, setInpName] = useState("");
  const [inpEmail, setInpEmail] = useState("");
  const [inpMessage, setMessage] = useState("");
  const [isFormFilled, setIsFormFilled] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const getInputName = (e)=> {
    setInpName(e.target.value);
  }
  const getInputEmail = (e)=> {
    setInpEmail(e.target.value);
  }
  const getInputMessage = (e)=> {
    setMessage(e.target.value);
  }

  const sendMessage = () => {
    if(inpName == "" || inpEmail == "" || inpMessage == "") {
      setIsFormFilled("Please fill all the fields")
      return;
    }
    setIsFormSubmitted(true)
    setIsFormFilled("Your Message have been sent...")
  }
  return (
    <div id='Cantact'>
      <SectionHeading title={'Get In Touch'} />

      <div className="form container flex flex-col justify-self-center sm:w-[40%] gap-5">
        <input type="text" value={inpName} onInput={getInputName} className="name  w-[100%] h-[50px] rounded-lg transition-all duration-[0.6s] bg-black p-2 outline-none border hover:border-purple-600" placeholder=" Your Name" />
        <input type="text" value={inpEmail} onInput={getInputEmail} className="email  w-[100%] h-[50px] rounded-lg transition-all duration-[0.6s] bg-black p-2 outline-none border hover:border-purple-600" placeholder=" Your Name" />
        <textarea type="text" value={inpMessage} onInput={getInputMessage} className="message  w-[100%] h-[150px] rounded-lg transition-all duration-[0.6s] bg-black p-2 outline-none border hover:border-purple-600" placeholder=" Your Name" />
        <p className={`${(!isFormSubmitted || inpName == "" || inpEmail == "" || inpMessage == "")? 'text-red-500': 'text-green-600'} text-sm`}>
          {isFormFilled}
        </p>
        <button className='p-3 border rounded-lg border-blue-500 transition-all duration-[0.6s] hover:border-purple-600 hover:bg-blue-800' onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  )
}

export default Contact


