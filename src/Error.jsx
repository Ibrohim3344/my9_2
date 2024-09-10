import React from 'react'
import error from '/public/error.png'

const Error = () => {
  return (
    <div className='bg-oq dark:bg-dakr flex justify-center h-screen'>
        <img src={error} alt="" width={600}/>
    </div>
  )
}

export default Error