import { PostUpdateData } from "./formsUpdateData";

export interface FormsProps{
    fun: (FormData: PostUpdateData) => void | Promise<void>
    initialData?: PostUpdateData | null
}