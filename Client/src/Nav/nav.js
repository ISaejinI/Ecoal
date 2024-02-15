import 'boxicons'
import { Route, Link, Routes } from "react-router-dom"
import styles from './nav.module.css';



export function Nav (props) {
    return (
        <>
          
          <nav className={styles.Navbar}>
          <div className={styles.NavLogo} onClick={() => window.location.href = '/'}>
        <img src="/Images/Logo.png" alt="Logo" width="100px" height="100px" />
      </div>
                {props.accessToken && (

    <nav />
        )}   
            </nav>
        </>
    )
}





{/* <nav>
<Link to="/">Home</Link>


<Link to="/credits">Credits</Link>
<Link to="/articles">Articles</Link>
</nav>

<Routes>
<Route exact={true} path="/" element={<Home/>} />
<Route exact={true} path="/search" element={<Search/>} />
<Route exact={true} path="/login" element={<Login/>} />
<Route exact={true} path="/credits" element={<Credits/>} />
<Route exact={true} path="/articles" element={<Articles/>} />
<Route exact={true} path={"/articles/:id"} element={<ThisArticle/>} />
</Routes> */}