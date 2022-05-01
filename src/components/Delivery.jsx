import React from 'react'

function Delivery() {
  return (
    <div className='flex flex-col lg:flex-row bg-white p-3 lg:justify-between lg:mx-14  mx-2 justify-start  items-center'> 
        {/* first */}
        <div className='flex text-sm m-3 flex-1   '>
         
        <svg className='h-5 w-5 flex justify-center items-center mt-3 m-2  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg>
         <div className='flex mr-2 flex-col '>
         <p className='font-bold '>Free Shipping</p>
            <p>on all within city orders or orders above $99.99  </p>
         </div>
         </div>
        
        
        
        {/* second */}
        <div className='flex text-sm m-3 flex-1 '>
         
        <svg className='h-5 w-5 flex justify-center items-center mt-3 m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"/></svg>
        
        <div className='flex mr-2 flex-col '>
            <p className='font-bold '>30 days Return</p>
            <p>simply return it within 30 days for an exchange</p>
        </div>
        </div>
        {/* third */}
        <div className='flex text-sm m-3 flex-1'>
          
        <svg className='h-5 w-5 flex justify-center items-center mt-3 m-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
        <div className='flex mr-2 flex-col '>
            <p className='font-bold '>Support 24/7</p>
            <p>contact us 24 hours a day, 7 days a week</p>
        </div>
        </div>
    </div>
  )
}

export default Delivery