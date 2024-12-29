import React from 'react'

const SectionHeading = (props) => {
  return (
    <h2 className="mt-[150px] text-5xl mb-5 place-self-center font-bold text-center md:text-left comforter-regular ">
        { props.title }
    </h2>
  )
}

export default SectionHeading
