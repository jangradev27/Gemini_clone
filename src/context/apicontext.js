import { createContext, useContext } from "react";
import { AssestContext } from "./assestcontext";
import { useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const Apicontext=createContext();

export function Apicontextprovider({children}){
    const[isresulttext,settrue]=useState(false);
    const{resulttext,setresult}=useContext(AssestContext);
   
    const[loading,setloading]=useState(false)
    
    // Access your API key as an environment variable (see "Set up your API key" above)
    const api_key='AIzaSyB7zGfiAJwiEj0lxOJFTfWY6sMKYR5b2RA'
    const genAI = new GoogleGenerativeAI(api_key);

    async function run(prompt) {
    setloading(true)
    setresult(true)
        
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    // const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setresult(text);
    setloading(false)
    
    }

    const value={run,loading,setloading,isresulttext,settrue};
    return<Apicontext.Provider value={value}>
        {children}
    </Apicontext.Provider>
}