'use client'
import { useState } from "react";
import Form from "./PostForm";
import { PostUpdateData } from "../interfaces/formsUpdateData";


export default function CreateButton(){
    const [formsOpen, setFormsOpen] = useState(false)

    async function postData(formData: PostUpdateData) {

        const res = await fetch("http://localhost:3000/api/posts", {
            method: 'POST',
            headers: {
                'content-hype': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        
        const result = await res.json()
        console.log(result)

        if(result.ok){
            alert('Post criado com sucesso!')
            setFormsOpen(false)
        } 
    }
    
    const toggleForms = () => {
        setFormsOpen(!formsOpen)
    }

    return(
        <div>
            <button onClick={toggleForms} className="bg-[#b8bb26] text-[#282828] p-2 m-5 rounded hover:bg-[#98971a]
            ">
                {formsOpen ? 'cancelar': 'novo post +'}
            </button>

            {formsOpen &&(
                <Form fun = {postData} initialData={null} />
            )}
        </div>
    )
}


