import { useContext } from "react";
import Cards from "./cards";
import { AssestContext } from "../context/assestcontext";
import { Apicontext } from "../context/apicontext";

function Content(){
  const{compass_icon,message_icon,gemini_icon,youtube_icon,bulb_icon,resulttext,setresult,user_icon,previous}=useContext(AssestContext);
  const{loading}=useContext(Apicontext)
  
  function beautify(text) {
    const parts = text.split('**');
    const formattedParts = parts.map((part, index) => {
      if (index % 2 === 1) {
        return `<b>${part}</b>`;
      } else {
        return part;
      }
    });
    const formattedText = formattedParts.join('').replace(/\*/g, '<br>');
    setresult(formattedText)
    return formattedText;
    
  }

  
    return(
        <div className="border-[1px] w-full min-h-[calc(80vh-3.5rem)]  flex flex-col items-center p-2 px-7 ">
                {resulttext?(
                   <div className=" flex  min-h-full font-[500] text-lg">
                   <div className="  h-full w-[60rem] overflow-y-scroll gap-7 flex flex-col items-start font-[500]">
                     <div className=" flex gap-1  items-center ">
                       <img src={user_icon} className="rounded-[50%]" width={40} height={40}></img>
                       <p>{previous[previous.length-1]}</p>
                     </div>
                     <div className=" flex justify-start items-start text-start">
                         <img src={gemini_icon} width={40} height={40}></img>
                         {
                          loading?(
                            
                              <div className="Preloader w-[4rem] h-[4rem] border-[10px] border-t-gray-400 rounded-[50%] animate-spin">
                                
                              </div>
                            
                          ):(<div dangerouslySetInnerHTML={{ __html: beautify(resulttext) }} />)
                         }
                     </div>
                   </div>
                 </div>
                ):(
                  <div className="  flex flex-col items-center text-6xl gap-8 font-[500]">
                  <div className="flex flex-col w-[48rem] gap-2 items-start">
                    <p className="hello">Hello, Developers.</p>
                    <p className=" text-gray-400 ">How can I help you today?</p>
                  </div>
                  <div className="h-[20rem] flex gap-2">
                    <Cards title="Suggest beautifull places to see on an upcoming road trip" image={compass_icon}/>
                    <Cards title="Briefly summarize this concept:urban planning" image={bulb_icon}/>
                    <Cards title='Brainstorm team bonding activities for our work retreat' image={message_icon}/>
                    <Cards title='Give me an funny video' image={youtube_icon}/>
                  </div>
                    
                </div>
                )

                }
                
        </div>
    )
}
export default Content;