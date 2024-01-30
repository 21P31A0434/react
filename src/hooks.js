import { useState } from "react"
 //let cnt=0;


function Hooks(){
    const[arr,setArr]=useState(['apple','banana','papaya','custurd apple'])
    const[fruitname,setfruitname]=useState('')
    const Filterfruits = () =>{
        let filteredarray = arr.filter((ele)=>
        {
            return(ele===fruitname)
        })
        if (filteredarray.length==0){
            setArr(['apple','banana','papaya','custurd apple'])
        }else{
            setArr(filteredarray)
        }
    }
    //const [cnt,setCnt]=useState(0)
    //const[name,setName]=useState('')
     //setCnt(20)=>cnt=20
    //const getCount = () =>{
    //    ++cnt;
    //   console.log(cnt)
    //}

    return(
        <div>
            <h1>Fruit Market</h1>
            <input type="text" onChange={(e)=> setfruitname(e.target.value)}/>
            <button onClick={Filterfruits}>Check fruits</button>
            <br />
            <ul style={{'display':'inline-block'}}>
            {
                arr.map((ele,i)=>{
                    return (<li key={i}>{ele}</li>)
                })
            }
            </ul>    
        </div>
    )
}
export default Hooks;