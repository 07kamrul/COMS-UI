import SinglePost from "../../components/singlePost/SinglePost"
import SlideBar from "../../components/slidebar/SlideBar"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SlideBar/>  
    </div>
  )
}
