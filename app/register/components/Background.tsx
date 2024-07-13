import React from 'react';
import Image from 'next/image';
import bg from '@/public/assets/img/bg.jpg';

const Background = () => {
  return (
    <div className='h-full w-full'>
      <Image className='w-full h-full object-cover' src={bg} alt="" priority/>
    </div>
  )
}

export default Background
