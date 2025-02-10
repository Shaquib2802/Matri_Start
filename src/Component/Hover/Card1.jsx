import React from 'react'

const Card1 = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-2 w-[45%] h-[60%] border border-t-4 border-black border-t-orange-500 '>
            <div className='w-64 m-2 border border-blue-700'>
                <img src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/mobile_9uce9lj.jpg" alt="" />
            </div>
            <div className='flex    gap-x-8 mt-3 '>
                <div className='flex flex-col gap-y-3 '>
                    <div>Techno</div>
                    <div>Oppo</div>
                    <div>Motorola</div>
                    <div>OnePlus</div>
                    <div>Itel</div>
                    <div>Vivo</div>
                    <div>Apple</div>
                    <div>Xiaomi</div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <div>Realme</div>
                    <div>Samsung</div>
                    <div>Nothing</div>
                    <div>Lava</div>
                    <div>Nokia</div>
                    <div>Redmi</div>
                    <div>Mi</div>
                    <div>Infinix</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card1

