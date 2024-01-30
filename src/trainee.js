import Student from "./student";
function Trainees(){
    let trainees=[{
        Sno:"hello",
        name:"Akhila",
        rollno:434,

    },
    {
        Sno:"hi",
        name:"greesh",
        rollno:449,

    },
    {
        Sno:"bye",
        name:"aditya",
        rollno:422,

    }
]
    return(
        <table>
          <h2>Trainees List</h2>
          <h2>Using ordered list</h2>
            <ol><li>S.no</li><li>Name</li><li>Rollno</li></ol>
            {
                trainees.map((ele,i)=>{
                    return(<Student Sno={ele.Sno} name={ele.name} rollno={ele.rollno}/>)

                })
            }
        </table>

    )
}
export default Trainees;