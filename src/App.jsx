import React, { useRef, useState } from 'react'
import './App.css'
import QRCode from "react-qr-code";

function App() {
  let [isUrl,setIsUrl] = useState('')
  let [isColor,setIsColor] = useState('')
  let url = useRef();
  let color = useRef();
let handleGenerate = () => {
  setIsUrl(url.current.value)
  setIsColor(color.current.value)
}
  return (
    <div className='App bg-gradient-to-r to-blue-300 from-emerald-400 h-screen w-full flex justify-center items-center'>
      <div>
        <h1 className='text-center text-5xl font-semibold mb-5  font-serif'>Qr Code Generator</h1>
          <div className=' bg-white justify-between grid grid-cols-12 w-[90%] mx-auto'>
        <div className=' lg:col-span-8 p-3  col-span-12 relative'>
            <p className='text-lg font-medium'>Your URL</p>
            <input
            ref={url}
            type="text" placeholder='Enter your url...' className='p-2 border-2 w-[90%]
            focus:outline-sky-300 ' />
            <p className='text-lg font-medium mt-3'>Color</p>
            <input 
            ref={color}
            type="color" className=' w-12 h-12' />
            <br />
            <button className='px-5 py-3 bg-blue-400 text-white lg:absolute bottom-24 right-0 text-2xl'
            onClick={handleGenerate}
            >Generate Qr Code</button>
          </div>
          <div className='lg:col-span-4 col-span-12'>
            <div className='p-24'>
        <QRCode value={isUrl} fgColor={isColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App