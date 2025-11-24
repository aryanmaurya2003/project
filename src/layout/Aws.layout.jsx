import React from 'react'
import { Outlet } from 'react-router-dom'

function Awslayout() {
  return (
<div className='h-full w-full'>
    <Outlet/>
    </div>  )
}

export default Awslayout