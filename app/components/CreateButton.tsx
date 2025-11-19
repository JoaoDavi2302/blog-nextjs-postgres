'use client'
import { useState } from "react";
import type { FormEvent } from "react";
import Form from "./PostForm";


export default function CreateButton(){
    const [formsOpen, setFormsOpen] = useState(false)

    async function postData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(event.currentTarget)
        const res = await fetch("http://localhost:3000/api/posts", {
            method: 'POST',
            body: formData,
        })

        const result = await res.json()
        console.log(result)

        form.reset()
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
                <Form fun = {postData} />
            )}
        </div>
    )
}


