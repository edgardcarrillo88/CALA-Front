import Layout from "../components/layout"

import styles from "../styles/styles.module.scss"
import Link from "next/link";
import React, { useState } from "react"

const initialstateusers = {usuario:"", contrasena:""}

function login(){

const [datosusuario,setDatosusuario] = useState(initialstateusers)

const controldecambiosusuarios = (e) =>{
    const targetuser = e.target
    setDatosusuario({...datosusuario,[targetuser.name]:targetuser.value})
}


const iniciosesion = async (e) =>{
    e.preventDefault()
    if(datosusuario.usuario !=="" && datosusuario.contrasena !==""){
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`)
            const data = await res.json()

            if (data.guia==1){
                console.log("usuario no encontrado")
                setDatosusuario(initialstateusers)
            }if(data.guia==2){
                console.log("inicio de sesión exitoso")
                setDatosusuario(initialstateusers)
            }else{
                console.log("contraseña incorrecta")
                setDatosusuario(initialstateusers)
            }
           
        } catch (error) {
            console.log(error)
        }
    }
}






return(
    <>
        <Layout titlepage="Login">
           
            <div className={styles.loginmain}>
            <div>
                    <h3>Login</h3>
            </div>
                <div className={styles.formstyle}>
                    <form >
                        <input name="usuario" value={datosusuario.usuario} onChange={controldecambiosusuarios} type="text" placeholder="nombre de usuario"></input>
                        <input name="contrasena" value={datosusuario.contrasena} onChange={controldecambiosusuarios} type="password" placeholder="Contraseña"></input>
                        <button onClick={iniciosesion}>Enviar</button>
                        <p>Aún no tienes una cuenta <Link href="register">Create una cuenta!</Link></p>
                    </form>
                </div>
            </div>
        </Layout>
        
    </>
)
}


//esta mierda no entiendo que hace
export default login