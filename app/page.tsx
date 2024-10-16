import Link from "next/link"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

const Home=()=>{
  return (
    <div>
      <Footer></Footer>
      <Header></Header>
      <h1 className="green" style={{color:"green",background:"pink",textAlign:"center"}}>This is  home page</h1>
      <h2 className="header" style={{color:"white",background:"gray"}}>Hello World</h2>

      <ul>
        <li style={{color:"blue",background:"yellow",textAlign:"right"}}><Link href="/home" target="blank">Home</Link></li>
        <li style={{color:"yellowgreen",background:"pink",textAlign:"center"}}><Link href="/about" target="blank">About</Link></li>
        <li style={{color:"blue",background:"brown"}}><Link href="/components" target="blank">Components</Link></li>
      </ul>
      <h3 style={{color:"black",background:"red",textAlign:"right"}}>This is my first page</h3>

    </div>

  )
}
export default Home