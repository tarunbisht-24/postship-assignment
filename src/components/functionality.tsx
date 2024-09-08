import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button, Label, TextField } from '@shopify/polaris'

const Functionality: React.FC = () => {
  return (
    <div className='bg-[#FEFCFA] px-[8%] py-14 text-[#4A4A4A]'>
      <h1 className=' text-2xl font-bold'>
        Discover the Heart of Our Functionality
      </h1>
      <section className='flex gap-3 my-6'>
        <Card className='w-[30%]'>
          <CardHeader className='text-sm font-[650]'>
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </CardHeader>
          <CardContent className='text-sm font-[450]'>
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </CardContent>
          <CardContent>
            <div className='flex'>
              <div className='w-[80%] mr-4'>
                <TextField
                  label='Accent Color'
                  autoComplete='off'
                  placeholder='FF9898'
                />
              </div>
              <div className='bg-[#FF9898] mt-auto ml-auto  w-16 h-8 rounded-xl'></div>
            </div>
          </CardContent>
          <CardContent>
            <div className='flex'>
              <div className='w-[80%] mr-4'>
                <TextField
                  label='Text color'
                  autoComplete='off'
                  placeholder='571010'
                />
              </div>
              <div className='bg-[#571010] mt-auto ml-auto  w-16 h-8 rounded-xl'></div>
            </div>
          </CardContent>
          <CardContent>
            <div className='flex'>
              <div className='w-[80%] mr-4'>
                <TextField
                  label='Background Color'
                  autoComplete='off'
                  placeholder='FFEAEA'
                />
              </div>
              <div className='bg-[#FFEAEA] mt-auto ml-auto  w-16 h-8 rounded-xl'></div>
            </div>
          </CardContent>

          <CardContent className='flex gap-2 my-2 pt-4'>
            <Button variant='secondary' accessibilityLabel='Preview'>
              Preview
            </Button>

            <Button variant='primary' accessibilityLabel='Apply Colors'>
              Apply Colors
            </Button>
          </CardContent>
        </Card>

        <div className='flex flex-col gap-3 w-[40%] items-start'>
          <Card>
            <CardHeader className='text-sm font-[650]'>
              Exclusive Onboarding Support for High-Volume Brands
            </CardHeader>
            <CardContent className='text-sm font-[450]'>
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </CardContent>

            <CardContent className='flex gap-2 my-2 py-3'>
              <Button variant='primary' accessibilityLabel='Schedule A Call'>
                Schedule A Call
              </Button>
            </CardContent>
          </Card>
          <Card className='w-full'>
            <CardHeader className='text-sm font-[650]'>
              Explore Our Integrated Ecosystem
            </CardHeader>
            <CardContent className='text-sm font-[450]'>
              Discover a variety of popular integrations tailored for your
              convenience.
            </CardContent>
            <CardContent className='flex gap-4 '>
              <img src='/paypal.png' alt='Paypal' />
              <img src='/star.png' alt='Star' />
              <img src='/postship.png' alt='Postship' />
              <img src='/analytics.png' alt='Analytics' />
              <img src='/graph.png' alt='Graph' />
            </CardContent>
            <CardContent className='flex gap-2 my-2 py-3'>
              <Button variant='primary' accessibilityLabel='Schedule A Call'>
                Explore Integrations
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className='w-[30%]'>
          <CardHeader className='text-sm font-[650]'>
            Seamlessly Integrate Custom HTML Elements
          </CardHeader>
          <CardContent className='text-sm font-[450]'>
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers.
          </CardContent>
          <CardContent className='mt-6'>
            <Label id=''>HTML Link</Label>
            <textarea
              autoComplete='off'
              placeholder='Value'
              className='h-32 w-full mt-2 rounded-xl resize-none p-2 border border-gray-500'
            />
          </CardContent>
          <CardContent className='mt-auto flex gap-2 pt-10'>
            <Button variant='secondary' accessibilityLabel='Preview'>
              Preview
            </Button>

            <Button variant='primary' accessibilityLabel='Apply Changes'>
              Apply Changes
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Functionality
