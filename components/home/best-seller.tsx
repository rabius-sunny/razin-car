import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'

import ProductCard from '../shared/product-card'
import SectionHeader from '../shared/section-header'
import Container from '../ui/container'

export default function BestSeller() {
  return (
    <section>
      <SectionHeader title='top sale in the week' heading='Best Seller' />
      <Container>
        <div className='my-10'>
          <div className='grid grid-cols-12 gap-4 my-20'>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <ProductCard
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-6 lg:row-span-2 h-full'>
              <ProductCard
                large
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <ProductCard
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <ProductCard
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <ProductCard
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4'>
          {Array.from({ length: 8 }, (i, j) => j + 1).map((idx) => (
            <div className='col-auto' key={idx}>
              <ProductCard
                name='X Corolla headlight 2003'
                price={99.05}
                image='/images/product.png'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
