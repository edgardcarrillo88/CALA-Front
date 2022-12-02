import Link from "next/link";
import style from "../styles/Home.module.css"

export default function Menu() {
    return(
        <nav className={style.navbar}>
            <div className={style.navbaroption}>
                <Link className={style.linkoption} href="createitem">Creación de items</Link>
                <Link className={style.linkoption} href="storage">Listado de items</Link>
                <Link className={style.linkoption} href="dashboard">dashboard</Link>
            </div>
            <div className={style.loginoption}>
                <Link className={style.linkoption} href="login">Login
                </Link>
            </div>    
        </nav>
    )
}


   {/* si en vez de Link estuviera "a" para cambiar de pagina haría una petición al servidor    
          */}
         