import React from 'react'
const Navbar: React.FC = () => {
  return (
    <main className='flex border-b-2 border-[#8A8A8A] text-[14px] font-[650] w-full px-[8%] z-20 h-[56px] justify-center items-center bg-white overflow-x-hidden fixed'>
      <section className='flex text-[#4A4A4A] gap-[32px] '>
        <div className='border-b-[4px]  w-[24px] border-[#8051FF]'>Home</div>
        <div className='pl-[18px]'>Orders</div>
        <div>Integrations</div>
        <div className='flex -mt-1 items-center'>
          <div>Tracking Page</div>
          <img src='/downarrow.svg' />
        </div>
        <div className=''>Partner with Us</div>
      </section>
      <section className='flex ml-auto text-[#616161] gap-[32px] '>
        <div className='flex border-b-2 border-[#4A4A4A] w-[120px]'>
          <img src='/search.svg' />
          <input
            className='placeholder:pl-2 focus:outline-none w-24'
            placeholder='Search'
          />
        </div>
        <div className='flex gap-1'>
          <img src='/account.svg' />
          <p className='font-[650]'>Account</p>
        </div>
        <div className='flex gap-1'>
          <img src='/settings.svg' />
          <p className='font-[650]'>Settings</p>
        </div>
      </section>
    </main>
  )
}

export default Navbar
