import React from 'react'

const College = (props) => {
  return (
    <div className='mt-10 flex gap-5 items-center italic'>
          <div className={`dot rounded-full h-[15px] w-[15px] bg-purple-600  ${((props.lineHeight == true)? "before:content-[''] before:h-[180px] sm:before:max-h-[100px]": "")} before:block before:w-[2px]  before:bg-purple-600 before:ml-[6px]  `} ></div>
          <div className="college-datails flex flex-col md:flex-row w-[90%] content-between ">
            <div className="md:w-[50%]">
              <p className='text-purple-400 text-lg'> {props.name} </p>
              <h2 className='text-white text-sm'> {props.degree} </h2>
            </div>
            <div className=" md:w-[50%] flex flex-col items-end">
              <p className='text-white text-sm '> {props.duration} </p>
              <p className='text-white text-sm'> <span className='text-gray-400 text-sm'> {props.cgpaTitle} </span>  {props.cgpa} </p>
            </div>
          </div>
        </div>
  )
}

export default College


// 