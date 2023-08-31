import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import logoImg from './assets/logo.svg'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Shop',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} bg-gray900 font-sans text-gray100`}>
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="mx-auto my-0 w-full max-w-[1180px] px-0 py-8">
            <Image src={logoImg} alt="" />
          </header>

          {children}
        </div>
      </body>
    </html>
  )
}
