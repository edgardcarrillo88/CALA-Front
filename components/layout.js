import Head from 'next/head'
import Menu from './menu'
import style from '../styles/Home.module.css'

export default function ({children, titlepage}) {
        return(
        <>
            <div className={style.layoutstyle}>
                <Head>
                    <title>Página de {titlepage? `| ${titlepage}`: ""} </title>
                    <meta name="description" content="layout"/>
                </Head>

                <Menu/>

                <div>
                    {children}
                </div>
            </div>
        </>
        )
}