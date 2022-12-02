import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import style from "../styles/Home.module.css"
import logo from "../public/equiparq.png"
import layout from '../components/layout';
import axios from 'axios'

const initialstate = {name:'', price:0, quantity:0, image:""}

function Createitem(){

    const [product, setproduct] = useState(initialstate)

    const controlcambios = (e) =>{
        const target = e.target
        const inputvalue=e.target.value
        const inputname=e.target.name

        setproduct({
            ...product,
            [inputname]: inputvalue
        })
    }

    const enviodeformulario = async (e)=>{
        e.preventDefault()

        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,{
            method:'POST',
            headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify(product)
          })
          const data = await res.json()
              console.log({data});
              console.log(data.image);
          setproduct(initialstate)
          console.log("item agregado")
        }catch (error) {
            console.log({error});
        }
    }

      
    return(
        <>
        <Layout>
        </Layout>
        <div className={style.layoutstyle}>
            <h1>Ingreso de mercaderia</h1>
                <form className={style.additem}>
                    <div>
                        <label>Descipción</label>
                        <input type='text' name='name' value={product.name} onChange={controlcambios}></input>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input type='number' name='price' value={product.price} onChange={controlcambios}></input>
                    </div>
                    <div>
                        <label>Cantidad</label>
                        <input type='number' name='quantity' value={product.quantity} onChange={controlcambios}></input>
                    </div>
                    <div>
                        <label>Adjuntar foto</label>
                        <input type='file' name='image' value={product.image} onChange={controlcambios}></input>
                    </div>
                    <button onClick={enviodeformulario}>crear el puto item</button>
                </form>
        </div>
        <div>
            {/* <img src={pathimage} alt="image" width="150"/> */}
        </div>
        </>
    )
}
            
export default Createitem

