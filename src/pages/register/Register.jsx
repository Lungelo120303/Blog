import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./register.css"

export default function Login() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label >Usename</label>
        <input type="text" className="registerInput" placeholder="Enter your Username"/>

        <label >Email</label>
        <input type="text" className="registerInput" placeholder="Enter your Email"/>

        <label >Password</label>
        <input type="text" className="registerInput" placeholder="Enter your Password"/>

        <button className="registerButton"><Link className="link" to="/register">Register</Link></button>
        </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
      
    </div>
  )
}
