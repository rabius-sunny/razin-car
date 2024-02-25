import Image from 'next/image'
import { categories } from '~/constants/fakedata'

import SectionHeader from '../shared/section-header'
import { Button } from '../ui/button'
import Container from '../ui/container'

export default function ShopByCategories() {
  return (
    <section>
      <SectionHeader
        title='top featured collection'
        heading='Shop by Categories'
      />
      <Container className='mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {categories.map((item, idx) => (
            <div
              key={idx}
              className='col-auto shadow-lg rounded-lg hover:scale-105 duration-150'
            >
              <div className='flex items-center gap-2 pl-2 pr-4 py-4'>
                <div>
                  <Image
                    src={item.image}
                    alt='category image'
                    width={200}
                    height={200}
                  />
                </div>
                <div className='grid gap-y-3'>
                  <h2 className='text-lg font-semibold'>{item.title}</h2>
                  <ul className=' list-disc ml-4 text-slate-600 font-medium'>
                    {item.items.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                  <Button>View all</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
