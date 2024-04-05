import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/428395556_1776845192726756_66706263845841994_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFlitUwjTedC0Z-teT6ulPAO_mJYBnjkXs7-YlgGeORe4sHDzFeDBrcjsupyo6AGv6br82wzhfU8Kc6Dqv6QYOB&_nc_ohc=Z8hbR2Ii69QAb6IBp7J&_nc_ht=scontent-jnb2-1.xx&cb_e2o_trans=t&oh=00_AfDaMZmxdYd9Oh68o3jJeHhnvNJ1T70iR3yzI5ou1YqLhw&oe=66136DBA" alt="" />
         <h1 className="singlePostTitle">
            She is the Love of my Life.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
         </h1>
         <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Lungelo</b></span>
             <span className="singlePostDate">1 hour ago</span>
         </div>
         <p className="singlePostDesc">
         I hope your day is coming along alright as is mine. 
         With you, I learnt so much about human relationships. 
         We vibe naturally even though we support different sports teams and have the wildest movie tastes.
         Thank you for letting our friendship be known. 
         Like peas in a pod, we bond. 
         You have always been a source of succor to me and well, I to you. I hope you know how much you mean to me. 
         Honestly, I can talk about you all day and all through the night, 
         and even now I have a million more things to say.
         To my best friend, I know we’ve only known each other for a few years, 
         but it feels like I’ve known you all my life. 
         Every time we meet up and hang out, 
         we always create phenomenal and unforgettable memories that I will cherish for the rest of my life.
         </p>
      </div>
    </div>
  )
}
