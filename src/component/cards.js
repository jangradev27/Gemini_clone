import { useContext } from "react";
import { Apicontext } from "../context/apicontext";
import { AssestContext } from "../context/assestcontext";

function Cards(props){

    const{run}=useContext(Apicontext);const{setpre,setloading}=useContext(AssestContext);
    function handler(){
        run(props.title
        );
        setpre((prev)=>[...prev,props.title])
       
    }
    return(
        <button onClick={handler} className=" hover:scale-105 hover:bg-gray-300 transition-all cursor-pointer w-[13rem] border-[1px] p-3 text-lg bg-gray-200 rounded-lg flex flex-col justify-between h-[13rem] items-start ">
            <p className="text-start text-gray-500">{props.title}</p>
            <div className=" w-full flex justify-end">
                <img src={props.image} width={30} height={30}></img>
            </div>
        </button>
    )
}
export default Cards;
