import { Facebook, Github, Linkedin, Lock } from 'lucide-react'
import Link from 'next/link'
import Container from '~/components/ui/container'

export default function Topbar() {
  return (
    <div className=' bg-black text-slate-400 py-2'>
      <Container className='flex-between'>
        <div className='flex-center gap-1 sm:gap-2'>
          <Facebook className='border border-slate-500 rounded p-1 size-7' />
          <Github className='border border-slate-500 rounded p-1 size-7' />
          <Linkedin className='border border-slate-500 rounded p-1 size-7' />
        </div>
        <div className='flex-center gap-1 sm:gap-2'>
          <Lock className='text-primary size-4 mb-0.5' />
          <Link href='/'>Login / Register</Link>
        </div>
      </Container>
    </div>
  )
}
