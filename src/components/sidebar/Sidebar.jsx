import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/428395556_1776845192726756_66706263845841994_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFlitUwjTedC0Z-teT6ulPAO_mJYBnjkXs7-YlgGeORe4sHDzFeDBrcjsupyo6AGv6br82wzhfU8Kc6Dqv6QYOB&_nc_ohc=Z8hbR2Ii69QAb6IBp7J&_nc_ht=scontent-jnb2-1.xx&cb_e2o_trans=t&oh=00_AfDaMZmxdYd9Oh68o3jJeHhnvNJ1T70iR3yzI5ou1YqLhw&oe=66136DBA" alt="" />
        <p>I am not a loud person but I promise you my presence makes all the noise.
           I always look for the best in people no matter how bad they may be towards me.
           Wonderful person to ever come across.
           
        </p>
      </div> 
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarListItem">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Folllow us</span>
        <div className="sidebarSocial">
                <i href="https://www.facebook.com/login"  className="sidebarIcon fa-brands fa-facebook"></i>
                <i href="https://www.linkedin.com/login"  className="sidebarIcon fa-brands fa-linkedin"></i>
                <i href="https://www.instagram.com/?hl=en"className="sidebarIcon fa-brands fa-instagram"></i>
                <i href="https://twitter.com/i/flow/login"className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}
