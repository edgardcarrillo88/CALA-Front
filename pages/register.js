import Layout from "../components/layout"
import React, { useState } from "react"
import styles from "../styles/styles.module.scss"
import {useNavigate} from "react-router-dom"
import Link from "next/link";

const initialstateusers = {correo:"",usuario:"", contrasena:"", nombre:""}


function register(){

const [datosusuario,setDatosusuario] = useState(initialstateusers)

const controldecambiosusuarios = (e) =>{
    const targetuser = e.target
    const inputvalueuser =targetuser.value
    const inputnameuser =targetuser.name

    console.log(`${inputnameuser} ${inputvalueuser}`)

    setDatosusuario({...datosusuario,[targetuser.name]:targetuser.value})

}

console.log(datosusuario)

const enviodeformulariouser = async (e) =>{
    e.preventDefault()
    if(datosusuario.correo !=="" && datosusuario.usuario !=="" && datosusuario.contrasena !==""){

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(datosusuario)
            })

            const data = await res.json()

            console.log({data})

            if (!data.guia==1){
                console.log("usuario no encontrado")
                setDatosusuario(initialstateusers)
            }if(!data.guia==2){
                console.log("inicio de sesion exitoso")
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
        <Layout titlepage="register">
            <div className={styles.loginmain}>
                <div>
                    <h3>Registrate</h3>
                </div>
                <div className={styles.formstyle}>
                    <form >
                        <input name="nombre" value={datosusuario.nombre} onChange={controldecambiosusuarios} type="text" placeholder="nombre"></input>
                        <input name="correo" value={datosusuario.correo} onChange={controldecambiosusuarios} type="text" placeholder="correo"></input>
                        <input name="usuario" value={datosusuario.usuario} onChange={controldecambiosusuarios} type="text" placeholder="nombre de usuario"></input>
                        <input name="contrasena" value={datosusuario.contrasena} onChange={controldecambiosusuarios} type="password" placeholder="Contraseña"></input>
                        <button onClick={enviodeformulariouser}>Enviar</button>
                        <p>Ya tienes cuenta? <Link href="login">Inicia sesión</Link></p>
                    </form>
                </div>
            </div>
        </Layout>
        
    </>
)
}


//esta mierda no entiendo que hace
export default register