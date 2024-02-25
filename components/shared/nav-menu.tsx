'use client'

import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '~/components/ui/navigation-menu'

export default function Navmenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='grid gap-3 p-2 md:p-4 w-screen sm:w-[400px] lg:w-[500px] lg:grid-cols-2'>
              <NavigationMenuLink asChild>
                <Image
                  src='/images/hl.jpg'
                  alt='headlight'
                  width={400}
                  height={250}
                />
              </NavigationMenuLink>
              <div className='grid gap-y-2'>
                {[1, 2, 3].map((item) => (
                  <div key={item}>
                    <h2>Backlihts</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
