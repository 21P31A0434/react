let trainees=[{
    Sno:1,
    name:"Akhila",
    rollno:434,

},
{
    Sno:2,
    name:"greesh",
    rollno:449,

},
{
    Sno:3,
    name:"aditya",
    rollno:422,

},
];
function Event(){
    const getdata = (res) => {
        res.map((ele,i) => {
            document.write(i+1 + "." +ele.name +" "+ele.rollno+"<br>");
        });
    };
    return(
        <div>
            <h1>Events</h1>
            <button onClick={() => getdata(trainees)}>Click here</button>
        </div>
    );
}
export default Event