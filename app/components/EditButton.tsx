'use client'

import { EditButtonProps } from "../interfaces/editButtonProps"
import { useState } from "react"
import Form from "./PostForm"
import { PostUpdateData } from "../interfaces/formsUpdateData"

export default function EditButton({postId, onEdit}: EditButtonProps){
    const [formsOpen, setFormsOpen] = useState(false)
    const [currentPost, setCurrentPost] = useState<PostUpdateData | null> (null)

    async function fetchPostData(){
        try {
            const res = await fetch(`api/posts/${postId}`)
            if(res.ok){
                const data: PostUpdateData = await res.json()
                setCurrentPost(data)
            } else {
                setCurrentPost(null)
                console.error('falha ao carrrgar post')
            }
           
        } catch (error) {
            console.log(`erro ao buscar os posts: ${error}`)
        }
    }

    async function editPost(formData: PostUpdateData) {
        try {
                await fetch(`/api/posts/${postId}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

    
            if (onEdit) onEdit(postId)
        } catch (error) {
            console.log(`erro ao editar: ${error}`)
        }
    }

    const toggleForms = () => {
        const shouldOpen = !formsOpen
        setFormsOpen(!formsOpen)

        if (shouldOpen){
            fetchPostData()
        } else {
            setCurrentPost(null)
        }
        

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
                <Form fun = {editPost} initialData = {currentPost}/>
            )}
       </div>
    )
}