import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SlideBar from "../../components/slidebar/SlideBar"
import "./home.css"

export default function Home() {
  return (
    <>
        <Header />
        <div className="home">
            <Posts/>
            <SlideBar/>
        </div>
    </>
  )
}
