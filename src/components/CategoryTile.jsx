import React from 'react'

const CategoryTile = ({name,image}) => {
  return (
    <div className='relative items-center flex border rounded-2xl shadow-md h-[80px] bg-20'>
      <p className='text-black font-bold text-2xl'> {name}</p>
      <img className='absolute bottom-0 right-2' scr={image} alt={name}/>
    </div>
  )
}

export default CategoryTile