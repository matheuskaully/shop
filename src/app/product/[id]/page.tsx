'use client'

import { useParams } from 'next/navigation'

export default function Product() {
  const teste = useParams()
  return <h1>Produto: {JSON.stringify(teste)}</h1>
}
