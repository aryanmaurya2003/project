import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CostExplorerLayout() {
  return (
   <div className='h-full w-full'>
    <Outlet/>
    </div>
  )
}
