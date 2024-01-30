import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
//import './product.css';

function Category(){
    const [data,setData] = useState([]) // const data=[]
    const api = 'https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getProductlist()
    })
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);        
        });
    }
    return (
        <>
            <div>
            {
                data.map((ele,i)=>{
                    return(
                        <div>
                            <p>{ele}</p>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default Category;