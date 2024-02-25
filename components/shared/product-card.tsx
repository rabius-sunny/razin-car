import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'

export default function ProductCard({
  name,
  price,
  image,
  large
}: TProduct & { large?: boolean }) {
  return (
    <div className='shadow-md border border-light p-2 sm:p-4 rounded-lg hover:scale-105 duration-150 hover:shadow-lg'>
      <div className='flex-center'>
        <Image
          src={image}
          alt='product image'
          width={180}
          height={150}
          className={large ? 'lg:w-full' : ''}
        />
      </div>
      <h2 className='text-center text-slate-700 text-base md:text-lg font-semibold line-clamp-1'>
        {name}
      </h2>
      <div className='mt-2 flex-between'>
        <ShoppingCart
          className='text-secondary bg-secondary/20 p-1 rounded size-8'
          strokeWidth={1.5}
        />
        <h2 className='font-bold'>${price.toString()}</h2>
        <Heart
          className='text-primary bg-primary/20 p-1 rounded size-8'
          strokeWidth={1.5}
        />
      </div>
    </div>
  )
}
