import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'//esto sirve para que cuando cambie de pagina, no haga una petinción al servidor, sino lo busque dentro de estos archivos, con esto ganamos rapidez en las respuestas
import Layout from '../components/layout'

export default function Home() {
  return (

    <Layout titlepage="inicio">
      
    </Layout>

  )
}



   