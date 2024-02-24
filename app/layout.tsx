import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { siteInfo } from '~/configs/site'

import './globals.css'
import Navbar from '~/components/shared/nav'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: siteInfo.authors,
  generator: siteInfo.generator
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
