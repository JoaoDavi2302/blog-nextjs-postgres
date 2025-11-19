'use client'

import { EditButtonProps } from "../interfaces/editButtonProps"
import { useState } from "react"
import Form from "./PostForm"

export default function EditButton({postId, onEdit}: EditButtonProps){
    const [formsOpen, setFormsOpen] = useState(false)

    async function editPost() {
        try {
                await fetch(`http://localhost:3000/api/posts/${postId}`,{
                method: 'PUT'
            })
    
            if (onEdit) onEdit(postId)
        } catch (error) {
            console.log(`erro ao editar: ${error}`)
        }
    }

    const toggleForms = () => {
        setFormsOpen(!formsOpen)
    }
    
    return(
        <div>
            <button
                onClick={toggleForms}
                className="bg-[#fe8019] text-[#282828] p-2 m-5 rounded hover:bg-[#d65d0e]"
            >
                {formsOpen ? 'Cancelar Edição' : 'Editar'}
            </button>

            {formsOpen &&(
                <Form fun = {editPost} />
            )}
       </div>
    )
}