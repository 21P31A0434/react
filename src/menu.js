import { Link } from "react-router-dom"
 function Menu(){
    return(
        <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/service">Service</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/trainee">Trainee</Link> |
        <Link to="/event">Event</Link> |
        <Link to="/random_colors">ColorGenerator</Link> |
        <Link to="/imageslider">ImageSlider</Link> |
        <Link to="/hooks">Hooks</Link> |
        <Link to="/product1">Products1</Link> |
        <Link to="/newproduct">Newproduct</Link> |
        <Link to="/categories">Category</Link> |

        </div>
    )
}
export default Menu