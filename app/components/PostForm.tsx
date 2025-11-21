import { FormEvent, useState } from "react"
import { FormsProps } from "../interfaces/FormsProps"
import { PostUpdateData } from "../interfaces/formsUpdateData"


export default function Form({fun, initialData}: FormsProps){
    const [title, setTitle] = useState(initialData?.title || '')
    const[content, setContent] = useState(initialData?.content || '')

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData: PostUpdateData = {
            title: title,
            content: content
        }   

        fun(formData)

        if(!initialData){
            setTitle('')
            setContent('')
        }
    }
    return(
        <div className="bg-[#282828] border border-[#3c3836] p-4 rouded mt-4">
        <h1 className="text-x1 font-semibold text-[#fabd2f]">Criar post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="mb -4">
                <label 
                    htmlFor="title" 
                    id="title" 
                    className="block text-sm font-medium text-[#928374]"
                    >
                    titulo    
                </label>
                <input 
                    type="text" id="title" 
                    name="title" 
                    className="mt-1 block rounded-md border-[#d65d0e] shadow-sm
                    focus:outline-none focus: ring-brand px-4 py-2 bg-[#928374]" 
                    value= {title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label 
                    htmlFor="content" 
                    id="content" 
                    className="block text-sm font-medium text-[#928374]"
                    >
                    conteudo
                </label>
                <input 
                    type="text" 
                    id="content" 
                    name="content" 
                    className="mt-1 block rounded-md border-[#d65d0e] shadow-sm
                    focus:outline-none focus: ring-brand px-4 py-2 bg-[#928374]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                <button 
                    type="submit" 
                    className="bg-[#b8bb26] text-[#282828] p-2 m-5 rounded hover:bg-[#98971a]"
                    >
                    {initialData? 'Salvar Edição' : 'Postar'}
                </button>
            </div>
            
        </form>
    </div>
    )
}