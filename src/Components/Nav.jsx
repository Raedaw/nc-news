import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css"
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const Nav= () => {
   const {user, setUser} = useContext(UserContext);
   console.log(user, "<<<< user in nav");

  function handleLogout(){
   setUser("")
  }

function handleLogin(){
   setUser({
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    })
}

    return ( 
        <header>
           <ul className="nav">
            <li><Link to="/" class={styles.nav}><h1>NC news</h1></Link></li>
            
            <li>{user ? <div><li><img src={user.avatar_url} alt="your avatar" /><p>{user.username}</p></li><button onClick={handleLogout}>Logout</button></div> : <button onClick={handleLogin}>Login</button>}</li>
            
           </ul>
        </header>
     );
}
 
export default Nav