import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import logo from "../public/equiparq.png"

//Esto es para que cuando se envie el formulario y se reinicie, el los valores de los campos vuelvan a estos que estamos seteando
const initialstate = {name:'', price:0}

function Create() {


    //constante definida oara ingreso de productos
    const [product, setproduct] = useState(initialstate)

    //Constante defininada para mostrar productos
    const [productlist, setproducts] = useState([])



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
    const enviodeformulario = async (e)=>{
        e.preventDefault()//esto es para evitar que cada vez que se envie el formulario, la pagina no se refresque

        try {
        //http://localhost:5000/api/v1
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,{//process.env es para acceder a variables de entorno (variables que se configuran por ejemplo en vercel o azure, despues de ese cpdigo se coloca "." y el nombre de la variable de entorno), EL NOMBRE DE ESTA VARIBLE se debe crear  en un nuevo archivo llamado ".env.local", asi lo dice la documentación de Next
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
          })
          const data = await res.json()
              console.log({data});
          setproduct(initialstate)
          actualizarlistadegaleria()
          console.log("item agregado")
        }catch (error) {
            console.log({error});
        }
    }



      const actualizarlistadegaleria = ()=>{
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
        //aca obtengo la respuesta, que es lo que se define enn COntroller/products. js (json({ok: true, datos:products, cantidad: productos.length}))
        .then((res) =>res.json())
        //De la respuesta lo que quiero es el arrego de datos, es por eso que lo llamo entre llaves
        .then(({datos})=>{
            // aca configuro que el valor que defini en el usestate (productlist) tome el valor de "datos"
              setproducts(datos)
          })
      }


      useEffect(() => {
        actualizarlistadegaleria()
      }, [])
      

  
    
    //esta webada es para obtener los datos guardados en la base de datos, pero aun no entiendo bien la lógica
    //useEffect(() => 
    // {
    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
    //     //aca obtengo la respuesta, que es lo que se define enn COntroller/products. js (json({ok: true, datos:products, cantidad: productos.length}))
    //     .then((res) =>res.json())
    //     //De la respuesta lo que quiero es el arrego de datos, es por eso que lo llamo entre llaves
    //     .then(({datos})=>{
    //         // aca configuro que el valor que defini en el usestate (productlist) tome el valor de "datos"
    //           setproducts(datos)
    //       })
    // }
    //, [])


      
    return(
        <>
        <Layout>
        </Layout>

        <h1 className='aic'>Creación de productos</h1>
        <div className='df g2r cblack mgauto aic jcc pad2'>
            <div className="df fdc">
                    <form className='df fdc w20 mb2px'>
                        <input className='mb2px' type='text' name='name' value={product.name} onChange={controlcambios}></input>
                        <input className='mb2px' type='number' name='price' value={product.price} onChange={controlcambios}></input>
                        <button onClick={enviodeformulario}>crear el puto item</button>
                    </form>
            </div>

            <div className='products-container cblack br10px pad2 bs2px'>
              {/* el ".map" es para iterear sobre el objeto y x cad uno de estos items queremos renderizarlos  || El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
                {productlist.map(({name, price, quantity, _id}) =>(
                    <div className='df aic jcsb pad2 bs2px br10px mb2px' key={_id}>
                        <span>Producto: {name}</span>
                        <div className='df fdc aic'>
                        <span>Precio: {price}</span>
                        <img className='curp' src={logo.src} width="20px" height="20px" 
                        onClick={()=>
                                    {
                                    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${_id}`,{method: "DELETE"})
                                    .then(res => res.json())
                                    .then(data =>{console.log({data})})
                                    }
                                }
                        />
                        </div>
                        {/* <span>Cantidad: {quantity}</span> */}
                    </div>
                   ))}

            </div>
        </div>


        <style jsx>
        {
        `
        .curp{
            cursor: pointer;
        }

        .pad2{
            padding: 1rem
        }

        .bs2px{
            box-shadow: 2px 2px 2px gray
        }

        .aic{
            align-items: center
        }

        .jcc{
            justify-content: center;
        }

        .jcsb{
            justify-content: space-between;
        }

        .products-container{
            overflow: hidden;
            overflow-y: auto;
            max-height: 10rem;
        }

        .sbtw{
            space
        }

        .cblack{
            border: 1px solid black;
        }

        .g1r{
            gap: 1rem
        }

        .g2r{
            gap: 2rem
        }
        
        .g3r{
            gap: 3rem
        }
        .g4r{
            gap: 4rem
        }
        
        .br10px{
            border-radius: 10px;
        }

        .bgwhite{
            background-color: white
        }

        .bggray{
            background-color: black
        }

        .w50r{
            width: 50rem;
        }

        .mgauto {
            margin: 0 auto;
        }    

        .df {
            display: flex
        }

        .fdc{
            flex-direction: column
        }

        .w20{
            width:20rem
        }

        .mb2px{
            margin-bottom:2px
        }

        `}
        </style>
        

        </>



    )
}




//sigo sin saber para que mierda sirve esto, pero es importante señalar que el nombre de la función se debe escribir con mayuscula
export default Create

// la lora
//la lora 2
