import { useState } from 'react';

//Esto es para que cuando se envie el formulario y se reinicie, el los valores de los campos vuelvan a estos que estamos seteando
const initialstate = {name:'', price:0}

function Create() {

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

    //vamos a hacer la petición a nuesto backend
    const enviodeformulario = (e)=>{
        e.preventDefault()//esto es para evitar que cada vez que se envie el formulario, la pagina no se refresque
        fetch('http://localhost:5000/api/v1/products',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          // body:JSON.stringify({
          //   name:productname,
          //   price:productprice,
          //   quantity:productquantity
          // })
      
          body:JSON.stringify(product)
        }).then(res =>{
            console.log({res})
            
        }).then((data)=>{
            setproduct(initialstate)
        }).catch(err=>{
            console.log({err});
        })
      }

    return(
        <div>
            <h1>Creación de productos</h1>
            <form>
                <input type='text' name='name' value={product.name} onChange={controlcambios}></input>
                <input type='number' name='price' value={product.price} onChange={controlcambios}></input>
                <button onClick={enviodeformulario}>crear el puto item</button>
            </form>
        </div>

    )
}




//sigo sin saber para que mierda sirve esto, pero es importante señalar que el nombre de la función se debe escribir con mayuscula
export default Create