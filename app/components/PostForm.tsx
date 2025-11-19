import { FormsProps } from "../interfaces/FormsProps"

export default function Form({fun}: FormsProps){
    return(
        <div className="bg-[#282828] border border-[#3c3836] p-4 rouded mt-4">
        <h1 className="text-x1 font-semibold text-[#fabd2f]">Criar post</h1>
        <form onSubmit={fun} className="flex flex-col gap-4">
            <div className="mb -4">
                <label htmlFor="title" id="title" className="block text-sm font-medium text-[#928374]">
                    titulo    
                </label>
                <input type="text" id="title" name="title" className="mt-1 block rounded-md border-[#d65d0e] shadow-sm
                    focus:outline-none focus: ring-brand px-4 py-2 bg-[#928374]" />
                <label htmlFor="content" id="content" className="block text-sm font-medium text-[#928374]">
                    conteudo
                </label>
                <input type="text" id="content" name="content" className="mt-1 block rounded-md border-[#d65d0e] shadow-sm
                    focus:outline-none focus: ring-brand px-4 py-2 bg-[#928374]"  />
                <button type="submit" className="bg-[#b8bb26] text-[#282828] p-2 m-5 rounded hover:bg-[#98971a]
                ">
                    postar
                </button>
            </div>
            
        </form>
    </div>
    )
}