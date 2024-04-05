import './topbar.css'
import {Link} from "react-router-dom" 


export default function TopBar() {
    const user= false;
  return (
    <div className='top'>
        <div className="top">
            <div className="topLeft">
                <i href="https://www.facebook.com/login" className="topIcon fa-brands fa-facebook"></i>
                <i href="https://www.linkedin.com/login" className="topIcon fa-brands fa-linkedin"></i>
                <i href="https://www.instagram.com/?hl=en" className="topIcon fa-brands fa-instagram"></i>
                <i href="https://twitter.com/i/flow/login" className="topIcon fa-brands fa-twitter"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'><Link className="link" to="/" >Home</Link></li>
                    <li className='topListItem'><Link className="link" to="/about" >About</Link></li>
                    <li className='topListItem'><Link className="link" to="/contact" >Contact</Link></li>
                    <li className='topListItem'><Link className="link" to="/write" >Write</Link></li>
                    <li className='topListItem'>
                    <Link className="link" to="/login">
                      {user && "Logout"}
                    </Link>
                        
                    </li>


                </ul>
            </div>
            
            <div className="topRight">
                {user ? (
                  <img 
                  className='topImage' 
                  src="https://th.bing.com/th?id=OIP.nYEuBjiuwCD6oR2JeVu5DwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                  alt=""/>

                )  :  (
                    <ul className="topList">
                       <li className="topListItem">
                          <Link className="link" to="/login" >
                            Login
                          </Link>
                       </li>
                       <li className="topListItem">
                          <Link className="link" to="/register" >
                            Register
                          </Link>
                       </li>
                    </ul>
                ) }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
      
    </div>
  )
}
