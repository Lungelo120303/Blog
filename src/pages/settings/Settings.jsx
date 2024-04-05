import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/276135384_1341103482967598_7899693646625097033_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKBpiazRH4pkx3L8ihAv4guIVAnKRWD124hUCcpFYPXfolX740lzZgW0l5a_lY-UGa3z2WJosh3gfoLjIOfABP&_nc_ohc=0mQEP3_j1u0Ab63Tvjk&_nc_ht=scontent-jnb2-1.xx&cb_e2o_trans=t&oh=00_AfAp1VQvkrtwRf4r6s01bQaiFma1r-3t0qn6e1ufZaU-AA&oe=6613B9DE" alt="" 
                    />
            <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
            <label >Username</label>
            <input type="text" placeholder="Lungelo"/>
            <label >Email</label>
            <input type="email" placeholder="lungelo@gmail.com"/>
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
            
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
