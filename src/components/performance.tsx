import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button as ButtonShopify } from '@shopify/polaris'

type ChartProps = {
  color: string
  name: string
}

const ChartReading = ({ color, name }: ChartProps) => {
  const bgColor = {
    backgroundColor: color,
  }
  return (
    <div className='flex items-center gap-2'>
      <div className='w-[20px] h-[10px] rounded-2xl' style={bgColor}></div>
      <div>{name}</div>
    </div>
  )
}

type CardProps = {
  name: string
  value: number
  icon: string
  bgColor: string
}

const CardFrame = ({ name, value, icon, bgColor }: CardProps) => {
  return (
    <Card
      style={{ backgroundColor: bgColor }}
      className='p-1 px-6 text-[#4A4A4A] min-h-24'
    >
      <div className='mt-2 font-semibold text-sm'>{name}</div>
      <div className='flex items-center'>
        <div className='text-3xl font-bold'>{value}</div>
        <img src={`/${icon}.svg`} className='ml-auto' alt='Frame Icon' />
      </div>
    </Card>
  )
}

const Performance: React.FC = () => {
  return (
    <div className=' bg-[#FFF7EE] px-[8%] py-14 relative'>
      <h1 className='text-[#4A4A4A] text-2xl font-bold'>
        Instant Dive into Your Performance Metrics
      </h1>

      <div className='flex gap-3 my-6'>
        <Button
          variant={'secondary'}
          className='border-[#8051FF] border bg-[#F8F7FF]'
        >
          Lifetime
        </Button>
        <Button variant={'secondary'}>Last Week</Button>
        <Button variant={'secondary'}>Last Month</Button>
        <Button variant={'secondary'}>Last Year</Button>
        <Button variant={'secondary'} className='flex gap-2 items-center'>
          Customized Timeline{' '}
          <span>
            <img src='/calendar.svg' alt='calendar' />
          </span>
        </Button>
      </div>

      <div className='flex gap-2 h-[368px]'>
        <Card className='w-2/5'>
          <CardHeader>
            <div className='flex flex-row items-start'>
              <div className='text-sm font-[650] text-[#4A4A4A]'>
                Shipment Updates
              </div>
              <div className='ml-auto text-[#4A4A4A] text-sm font-[450]'>
                Total Orders : 394
              </div>
            </div>
          </CardHeader>
          <CardContent className='flex gap-x-1.5 overflow-x-hidden mr-6'>
            <Button variant={'tertiary'} className='bg-[#FFF1E3]'>
              Delivered
            </Button>
            <Button variant={'tertiary'}>Out for delivery</Button>
            <Button variant={'tertiary'}>Intransit</Button>
            <Button variant={'tertiary'}>Pending</Button>
            <Button variant={'tertiary'}>Exception</Button>
          </CardContent>
          <CardContent>
            <img src='/chart.svg' alt='Chart' className='mx-auto' />
          </CardContent>
          <CardContent className='flex flex-row gap-x-4 mt-3'>
            <ChartReading name='Exception' color='#5E4200' />
            <ChartReading name='Intransit' color='#956F00' />
            <ChartReading name='Pending' color='#E5A500' />
          </CardContent>
          <CardContent className='flex flex-row gap-x-4 '>
            <ChartReading name='Delivered' color='#FFC879' />
            <ChartReading name='Out for delivery' color='#FFDDB6' />
          </CardContent>
        </Card>

        <Card className='bg-[#956F00] w-1/5 flex flex-col text-white px-4 py-4'>
          <section className='pr-14'>
            <div className='text-sm font-bold'>
              Star Facts about your orders!!!
            </div>
            <div className='text-sm mt-4'>
              There are 8 shipments that have been in out for delivery for more
              than 3 days.
            </div>
            <div className='text-sm my-3'>
              There are 5 shipments in exception rigth now
            </div>

            <div className='text-sm my-3'>
              The maximum chargebacks are from Miami
            </div>
          </section>
          <div className='mt-auto pb-2'>
            <ButtonShopify>Check Orders Page</ButtonShopify>
          </div>
          <img
            src='/orange.svg'
            alt='Orange Blur'
            width={70}
            height={70}
            className='ml-auto pr-0 absolute right-0 bottom-32'
          />
        </Card>

        <Card className='w-2/5'>
          <CardHeader>
            <div className='flex flex-row items-start'>
              <div className='text-sm font-[650] text-[#4A4A4A]'>
                Tracking Page Views Vs Orders
              </div>
            </div>
          </CardHeader>
          <CardContent className='text-sm font-[450]'>
            Understand user engagement patterns and optimize your tracking page
            for enhanced customer experiences.
          </CardContent>
          <CardContent className='flex flex-col gap-5 mt-4'>
            <CardFrame
              bgColor='#FFEBD5'
              icon='order'
              name='Orders'
              value={80}
            />
            <CardFrame
              bgColor='#FFC879'
              icon='view'
              name='Tracking Page Views'
              value={44}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Performance
