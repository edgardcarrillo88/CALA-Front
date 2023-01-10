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

    console.log({product});
        
    }






    

    console.log({product});

  


    const enviodeformulario = async (e)=>{
        e.preventDefault()


        //const myFile = document.querySelector("input[type=file]").files[0]
        const myFile = document.getElementById('file').files[0]
        const producto = new FormData()
        producto.append('image',myFile)
        producto.append('name',product.name)
        producto.append('price',product.price)
        producto.append('quantity',product.quantity)

        console.log(producto)
      
        

        // try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,{
        //     method:'POST',
        //     headers:{
        //       'Content-type':'application/json'
        //     },
        //     body:JSON.stringify(product)
        //   })
        //   const data = await res.json()
        //   console.log(product)
        //   setproduct(initialstate)
        //   console.log("item agregado")
        // }catch (error) {
        //     console.log({error});
        // }

        try{
            const res =await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,{
                method: 'POST',
                body: producto
            })
            const data = await res.json()
            console.log(NEXT_PUBLIC_BACKEND_URL)
            console.log(data)
            console.log(product)
            console.log(producto)
            setproduct(initialstate)
            console.log("item agregado")
        }catch(error){
            console.log(producto)
            console.log(JSON.stringify(producto))
            console.log(producto.File) 
            console.log(product)
            console.log({error})
        }

   


    }

      
    return(
        <>
        <Layout titlepage="Creación de items">
        </Layout>
        <div className={style.additem}>
            
                <form>
                    <h1>Ingreso de items</h1>
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
                        <input type='file' name='image' id='file' value={product.image} onChange={controlcambios}></input>
                    </div>
                    <button onClick={enviodeformulario}>crear item</button>
                </form>
        </div>
        <div>
            {/* <img src={pathimage} alt="image" width="150"/> */}
        </div>
   
        </>

    )
}
            
export default Createitem

