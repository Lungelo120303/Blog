import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>

      <form className="loginForm">
        <label >Email</label>
        <input type="text" className="loginInput" placeholder="Enter your Email"/>
        <label >Password</label>
        <input type="text" className="loginInput" placeholder="Enter your Password"/>
        <button className="loginButton"><Link className="link" to="/register">Login</Link></button>
        </form>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
         
    </div>
  )
}
