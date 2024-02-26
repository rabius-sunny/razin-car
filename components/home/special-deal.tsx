import Image from 'next/image'
import { Heart } from 'lucide-react'

import SectionHeader from '../shared/section-header'
import { Button } from '../ui/button'
import Container from '../ui/container'

export default function SpecialDeal() {
  return (
    <section>
      <SectionHeader title='explore amazing deals' heading='Deal of the Day' />
      <Container size='md'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center'>
          <div className='col-auto justify-self-center'>
            <Image
              src='/images/product2.png'
              alt='deal of the day'
              width={300}
              height={250}
            />
          </div>
          <div className='col-auto justify-self-start'>
            <h1>Aluminium Ring 14&quot;</h1>
            <div className='flex items-end gap-2 mt-2'>
              <h1 className='font-bold text-primary'>$99.00</h1>
              <del className='font-bold text-xl text-slate-400'>$109.00</del>
            </div>
            <div className='mt-4'>
              <p className='line-clamp-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                nam error enim qui cumque. Optio eaque labore tenetur hic
                itaque. cumque. Optio eaque labore tenetur hic itaque.
              </p>
            </div>
            <div className='mt-8 flex gap-4'>
              <Button>Add to cart</Button>
              <Button variant='secondary' className='text-dark'>
                <Heart />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
