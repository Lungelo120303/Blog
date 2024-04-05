import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/331615440_1152386178782183_4574311279924566766_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwFOdwrjBMKZq5LYkRAa3xwqE4LpiUfYXCoTgumJR9hQdCttxq_T5JC9Q5kS46skyjP1uWsa5x6UDO0tj5wdx3&_nc_ohc=8nowtxbRMIMAb7ZC43n&_nc_ht=scontent-jnb2-1.xx&cb_e2o_trans=t&oh=00_AfBR3m7Tr6YTZVaoYcvzy4XB-e2glPpxEGE7NQZmbE7uaA&oe=66138C4A" alt="" />
      <form  className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
