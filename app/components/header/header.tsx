import headerStyle from "./header.module.css"

const Header=()=>{
    return (
        <div>
            <h1 style={{color:"red",background:"black",}}>This is header components</h1>
            <h2 className={headerStyle.h2}>This is header components2</h2>
            <h3 className={headerStyle.h3}>This is header components3</h3>
        </div>
    )
}
export default Header