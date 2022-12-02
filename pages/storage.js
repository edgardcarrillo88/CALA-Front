import Layout from "../components/layout"
import Showitems from "../components/products"
import style from "../styles/Home.module.css"
import { btoa } from 'buffer';

function storageitems(){
    return(
        <>
            <Layout>
            </Layout>
           
            <div>
                <h1>Página de almacén</h1>
            </div>
            <div className={style.layoutstyle}>
                <Showitems></Showitems>
            </div>

        </>
    )
    }
    
    console.log(Showitems);
    
    //esta mierda no entiendo que hace
    export default storageitems