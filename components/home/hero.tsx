'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { Button } from '../ui/button'
import Container from '../ui/container'

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000 })
  ])
  return (
    <Container className='mt-6'>
      <div className='grid lg:grid-cols-4 lg:gap-6'>
        <div className='hidden lg:block lg:col-span-1 bg-gradient-to-r from-slate-300 to-slate-100 lg:rounded-l-xl py-6 px-4'>
          <div className='flex items-center size-full'>
            <div className='w-full'>
              <h1 className='text-center mb-10'>Select vehicle</h1>
              <div className='grid gap-8'>
                <select className='px-4 py-2 rounded border-slate-300 shadow-lg border'>
                  <option value='dkfj'>X COROLLA 2003</option>
                </select>
                <select className='px-4 py-2 rounded border-slate-300 shadow-lg border'>
                  <option value='dkfj'>X COROLLA 2003</option>
                </select>
                <select className='px-4 py-2 rounded border-slate-300 shadow-lg border'>
                  <option value='dkfj'>X COROLLA 2003</option>
                </select>
                <select className='px-4 py-2 rounded border-slate-300 shadow-lg border'>
                  <option value='dkfj'>X COROLLA 2003</option>
                </select>
              </div>
              <div className='mt-10'>
                <Button className='w-full'>Get parts</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div
            className='rounded-lg lg:rounded-r-xl lg:rounded-l-none overflow-hidden'
            ref={emblaRef}
          >
            <div className='flex'>
              <div className='embla__slide'>
                <Image
                  src='/images/sliders/slider1.jpg'
                  alt='slide'
                  width={500}
                  height={300}
                  className='size-full'
                />
              </div>
              <div className='embla__slide'>
                <Image
                  src='/images/sliders/slider2.jpg'
                  alt='slide'
                  width={500}
                  height={300}
                  className='size-full'
                />
              </div>
              <div className='embla__slide'>
                <Image
                  src='/images/sliders/slider3.jpg'
                  alt='slide'
                  width={500}
                  height={300}
                  className='size-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
