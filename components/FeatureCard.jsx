import React from 'react'
import Image from "next/image"

function FeatureCard({item}) {
  return (
    <div className='card w-full border rounded-lg border-gray-500 p-4'>
        <div>
            <Image width={48} height={48} src={item.logo} alt="card logo" 
            className='h-16 w-16 object-cover' />
        </div>
        <div className='font-bold'>
            {item.title}
        </div>
        <div>
            {item.content}
        </div>
    </div>
  )
}

export default FeatureCard