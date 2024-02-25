'use client'

import Link from 'next/link'
import Container from '~/components/ui/container'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '~/components/ui/navigation-menu'
import { siteInfo } from '~/configs/site'
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react'

import Navmenu from '../nav-menu'

export default function Menubar() {
  return (
    <Container className='flex-between'>
      <div className='flex-between gap-10 w-full md:w-auto'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-gradient-to-b from-slate-400 to-slate-100 md:gap-4 uppercase font-semibold'>
                all categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid gap-y-4 px-2 py-4'>
                  <Navmenu />
                  <Navmenu />
                  <Navmenu />
                  <Navmenu />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='hidden md:flex-center gap-5'>
          {siteInfo.navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className='uppercase font-semibold text-black/80 hover:text-primary text-sm'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex-center gap-2 md:hidden'>
          <Search className='text-primary size-6' />
          <Heart className='text-primary size-6' />
          <ShoppingCart className='text-primary size-6' />
          <Menu />
        </div>
      </div>
      <div className='hidden lg:flex'>
        <input
          type='text'
          className='border border-slate-300 rounded-full px-3 py-1.5 placeholder:text-sm'
          placeholder='search accessories...'
        />
      </div>
    </Container>
  )
}
