import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css"

const Nav= () => {
    return ( 
        <header>
           <ul className="nav">
            <li><Link to="/" class={styles.nav}><h1>NC news</h1></Link></li>
           </ul>
        </header>
     );
}
 
export default Nav