import React from 'react'
import Header from './Header1/Header'
import Bottom1 from './Bottom/Bottom1'

const Wishlist = () => {
  return (
    <div>
      <Header/>
      <div className='flex  flex-col items-center justify-center mt-28 border'>
        <div className='w-36 '><img src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/wishlis.svg" alt="" /></div>
        <div className='text-2xl font-bold mt-3'>Wishlist is Empty</div>
        <div className='text-xl font-medium mt-3 pb-24'>Add Your First Wishlist Item</div>
      </div>
      <Bottom1/>
    </div>
  )
}

export default Wishlist
