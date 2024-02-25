import Container from '~/components/ui/container'
import { Heart, ShoppingCart } from 'lucide-react'

export default function Logobar() {
  return (
    <Container>
      <div className='flex-center md:flex-between h-16 sm:h-24'>
        <div className='flex-center gap-2'>
          <Logo />
          <span className=' font-black text-primary italic uppercase text-xl sm:text-3xl'>
            razin car
          </span>
        </div>
        <div className='hidden md:flex-center gap-2'>
          <input
            type='text'
            className='lg:hidden border border-slate-300 rounded-full px-3 py-1.5 placeholder:text-sm'
            placeholder='search accessories...'
          />
          <Heart className='text-primary size-8' />
          <ShoppingCart className='text-primary size-8' />
        </div>
      </div>
    </Container>
  )
}

/** @TODO add logo */
const Logo = () => (
  <div className='bg-secondary rounded-full px-3 py-4 text-white font-bold text-lg'>
    RCD
  </div>
)
