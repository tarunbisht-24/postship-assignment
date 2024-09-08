import React from 'react'
import { Button } from '@shopify/polaris'
import { Card, CardContent, CardHeader } from './ui/card'

const Welcome: React.FC = () => {
  return (
    <div className='bg-[#FEFCFA] px-[8%] py-10 pt-24 z-10'>
      <h1 className='text-2xl font-bold line-clamp-2 text-[#4A4A4A]'>
        Welcome, John Mathew!!
      </h1>
      <div className='flex gap-4 my-6 '>
        <Card className='w-[28%] z-10'>
          <CardHeader className='text-sm font-[650] pb-3'>
            Order Sync Successful!
          </CardHeader>
          <CardContent className='text-sm font-[450] '>
            Your order details from the last 30 days have been successfully
            synced. Check them out now!
          </CardContent>

          <CardContent className='flex gap-2 my-2 py-3'>
            <Button variant='primary' accessibilityLabel='Explore your orders'>
              Explore Your Orders
            </Button>
          </CardContent>
        </Card>
        <Card className='w-[28%] bg-[#FFF8DB] z-10'>
          <CardHeader className='pb-3'>
            <div className='text-sm font-[650] flex flex-row items-center gap-x-1 text-[#5E4200]'>
              <img src='/alert.svg' className='' />
              <div>Customize Customer Notification</div>
            </div>
          </CardHeader>
          <CardContent className='text-sm font-[450] text-[#5E4200]'>
            Tailor Your Email Experience: Set the Sender Email and Choose
            Notification Triggers
          </CardContent>

          <CardContent className='flex gap-2 my-2 py-3 pt-8'>
            <Button variant='primary' accessibilityLabel='Schedule A Call'>
              Configure Notifications
            </Button>
          </CardContent>
        </Card>
        <Card className='w-[28%] bg-[#EAF4FF] text-[#4A4A4A] z-10'>
          <CardHeader className='pb-3'>
            <div className='text-sm font-[650] flex flex-row items-center gap-x-1'>
              <img src='/info.svg' className='' />
              <div>Your Tracking Link has been generated</div>
            </div>
          </CardHeader>
          <CardContent className='text-sm font-[450]'>
            Include the{' '}
            <span className='underline cursor-pointer text-[#005BD3]'>
              Link
            </span>{' '}
            to Your Store's Navigation Menu.
          </CardContent>

          <CardContent className='mt-auto flex gap-2 pt-10'>
            <Button variant='secondary' accessibilityLabel='Preview'>
              Copy Link
            </Button>

            <Button variant='primary' accessibilityLabel='Apply Changes'>
              Go To Navigation Menu
            </Button>
          </CardContent>
        </Card>
      </div>
      <img src='/box.svg' className='absolute opacity-25 left-20 top-60 ' />
      <img src='/box.svg' className='absolute opacity-25 left-[18%] top-16' />
      <img src='/box.svg' className='absolute opacity-25 left-[35%] top-64 ' />
      <img src='/box.svg' className='absolute opacity-25 left-[40%] top-6 ' />
      <img src='/box.svg' className='absolute opacity-25 left-[55%] top-60 ' />
      <img src='/box.svg' className='absolute opacity-25 left-[64%] top-16 ' />
      <img src='/box.svg' className='absolute opacity-25 left-[72%] top-80 ' />
      <img
        src='/box.svg'
        className='absolute opacity-25 left-[85%] top-36   '
      />
    </div>
  )
}

export default Welcome
