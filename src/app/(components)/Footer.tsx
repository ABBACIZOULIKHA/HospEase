import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
    
    <div className='relative bottom-0 bg-graybg'>
        <div className='flex flex-row justify-between text-xl text-gray-400 bg-graybg ml-60 mt-20 w-3/4  '>
        <p>Copyright © HospEase 2024</p>
        <p>Privacy Policy · Terms & Conditions</p>
      </div>
    </div>
    )
  }
}

export default Footer