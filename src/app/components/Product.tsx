import Image, { StaticImageData } from 'next/image'
import 'keen-slider/keen-slider.min.css'

interface ProductProps {
  title: string
  price: string
  imgSource: StaticImageData
}

export default function Product({ imgSource, price, title }: ProductProps) {
  return (
    <a
      className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-t from-[#1ea483] to-[#7465d4]"
      href=""
    >
      <Image
        src={imgSource}
        alt=""
        className="object-cover"
        width={520}
        height={480}
      />
      <footer className="absolute bottom-[0.25rem] left-1 right-1 flex translate-y-[100%] items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 transition-all ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
        <strong className="text-xl">{title}</strong>
        <span className="text-2xl font-bold text-green-300">R$ {price}</span>
      </footer>
    </a>
  )
}
