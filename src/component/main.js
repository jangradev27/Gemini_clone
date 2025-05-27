import Content from "./content";
import Navbar from "./navbar";

function Mainscreen(){
    return(
        <div className=" w-full flex flex-col">
            <Navbar/>
            <Content/>

        </div>
    )
}
export default Mainscreen;