'use client'

import React from "react"
import { DeleteButtonProps } from "../interfaces/deleteButtonProps"

export default function DeleteButton({postId, onDelete}: DeleteButtonProps){
    async function deletePost() {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
                method: 'DELETE'
            })  

            if (onDelete) onDelete(postId)
        } catch (error) {
             console.log(`Erro no delete: ${error}`);
        }
    }

    return(
        <button
            onClick={deletePost}
            className="bg-[#fb4934] text-[#282828] p-2 m-5 rounded hover:bg-[#cc241d]"
        >
            deletar
        </button>
    )
}