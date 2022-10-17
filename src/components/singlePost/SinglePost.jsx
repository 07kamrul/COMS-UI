import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80" 
        alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Say thanks 🙌
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Kamrul</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
            Give a shoutout to Johann Siemens on social or copy the text below to attribute.
        </p>

      </div>
    </div>
  )
}
