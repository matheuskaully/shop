'use client'

import Product from './components/Product'
import tshirt1 from './assets/shirts/1.png'
import tshirt2 from './assets/shirts/2.png'
import tshirt3 from './assets/shirts/3.png'
import tshirt4 from './assets/shirts/4.png'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-carousel"
    >
      <Product
        imgSource={tshirt1}
        price="89,90"
        title="Camiseta Beyond the Limits"
      />
      <Product
        imgSource={tshirt2}
        price="89,90"
        title="Camiseta Beyond the Limits"
      />
      <Product
        imgSource={tshirt3}
        price="89,90"
        title="Camiseta Beyond the Limits"
      />
      <Product
        imgSource={tshirt4}
        price="89,90"
        title="Camiseta Beyond the Limits"
      />
    </main>
  )
}
