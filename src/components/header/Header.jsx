import './header.css'

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://mishry.com/wp-content/uploads/2021/01/diary-for-journaling.jpg" alt="" width="100%"/>
    </div>
  )
}
