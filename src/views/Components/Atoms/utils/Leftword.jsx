import React from 'react'

export default function Leftword({max,current}) {
  return (
    <p className='text-right text-gray-500 font-semibold text-sm'>Left {max - current?.length}</p>
  )
}
