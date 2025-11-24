import React from 'react'
import { Outlet } from 'react-router-dom'
function OnboardingLayout() {
  return (
<div className='h-full w-full'>
    <Outlet/>
    </div>  )
}

export default OnboardingLayout