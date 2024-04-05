import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" 
       src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/332094677_756972639067544_6433499543533489487_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGKxrbydwrf61IjtcLvcu-ByRSv1fxOrUfJFK_V_E6tR35dy32QOY2DIKOytXpRLG9Q-SXcnwJfhL5Q43GCunn0&_nc_ohc=ef5EJx0icE8Ab6lAo2n&_nc_ht=scontent-jnb2-1.xx&cb_e2o_trans=t&oh=00_AfCt3mIu3w8g3oG7wv7GKgBCxC9MJbPSEKf3WkLDX0pHTA&oe=66137F69" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>

        <div className="postTitle">
            Am not perfect, came from ruthless times as a child.
        </div>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDis">I am a strong and capable person. 
      I’ve overcome difficult challenges in the past, and I have the resilience to face whatever comes my way. It’s okay to feel upset, angry, or sad sometimes; those emotions are part of being human. 
      My personal boundaries matter, and I can express my needs without hesitation. 
      ‘No’ is a complete sentence, and I don’t need to justify my boundaries. 
      I deserve happiness, success, and good things in life. 
      The past doesn’t dictate my future—I forgive myself for mistakes and keep moving forward. 
      I am allowed to take up space, have desires, and use my voice.</p>
      
    </div>
  )
}
