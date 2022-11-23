import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'//esto sirve para que cuando cambie de pagina, no haga una petinción al servidor, sino lo busque dentro de estos archivos, con esto ganamos rapidez en las respuestas

export default function Home() {
  return (
   <div>
    <h1>Holi boli</h1>
{/* si en vez de Link estuviera "a" para cambiar de pagina haría una petición al servidor    
     */}
    <Link href='/products/create'>ir a crear producto</Link>
   </div>
  )
}
