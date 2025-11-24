import React from 'react'

function Footer({left, right}) {
  return (
    <div className='w-full h-10 bg-slate-300 flex items-center justify-between text-[14px] p-5 text-slate-500'><div>{left}</div> <div>{right}</div></div>
  )
}

export default Footer