import React from 'react'

const MenuCard = ({name,price, description, imgSrc}) => {
  return (
    <div className='m-2 p-3 md:p-4 bg-white rounded-xl w-full shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
       <img 
        src={imgSrc} 
        alt={`${name} image`} 
        className='w-full aspect-[250/142] object-cover rounded-lg ' 
    />
    
    <div className='mt-3'>
        <div className=' text-base md:text-lg truncate'>{name}</div>
        <div className="font-bold my-1 ">₹{price}</div>
        
       
        <div className="font-light text-gray-500 text-xs md:text-sm mb-3"> 
            {description} 
            <span className='text-red-600 cursor-pointer block md:inline'> Read More &gt;&gt;</span>
        </div>
        
        <button className='w-full text-center bg-red hover:bg-red-700 rounded-lg text-white py-1.5 md:py-2 text-sm md:text-base transition-colors'>
            Add to cart
        </button>
    </div>
</div>
  )
}

export default MenuCard