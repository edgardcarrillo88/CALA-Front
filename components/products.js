import { useEffect, useState } from 'react';
import style from "../styles/Home.module.css";
import logo from "../public/equiparq.png"
import path from 'path';
//import { btoa } from 'buffer';
const btoa = require('btoa')
//import { tobase64 } from 'somewhere'

export default function showitems (){

    const [productlist, setproducts] = useState([])
    
    const actualizarlistadegaleria = ()=>{
        console.log("Renderizando")
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
        .then((res) =>res.json())
        .then(({datos})=>{
              setproducts(datos)
          })
      }
    
      useEffect(() => {
        actualizarlistadegaleria()
      }, [])
    
      return(
          <>
        <div className={style.items}>
            {productlist.map(({name, price, quantity, _id, image}) =>(
                
                <div className={style.itemcontent}  key={_id}>
                    <span>Producto: {name}</span>
                    <div>
                        
                    <img src={`data: image/png; base64,${btoa(String.fromCharCode(...new Uint8Array(image?.data?.data)))}`} width="150" height="150"/>
                    </div>
                    <div className={style.itemdetail}>
                        <span>Precio: {price}</span>
                        <span>Stock: {quantity}</span>
                    </div>
                    <input width="10px"></input>
                    <select defaultValue="">
                        <option>Tienda 1</option>
                        <option>Tienda 2</option>
                        <option>Tienda 3</option>
                    </select>
                    <button>reservar</button>
                    <button onClick={()=>{
                        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${_id}`,{method: "DELETE"})
                        .then(res => res.json())
                        .then(data =>{console.log({data})})
                        .then(actualizarlistadegaleria)
                        }
                    }>Eliminar item</button>
                </div>
                ))
                }
        </div>

        </>
    )
}


    
      

  