import ListPosts from "../components/ListPosts"
import SearchBox from "../components/SearchBox"
import CreateButton from "../components/CreateButton"

export default function AdminDashboard (){
    return(
        <div className="min-h-screen bg-[#1d2021] text-[#ebdbb2] px-4 py-8">
            <div className="max-w-3x1 mx-auto mb-10">
                <h2 className="text-2x1 font-semibold text-[#fabd2f] mt-4">
                    Lista de posts 
                </h2>
                <ListPosts />
                <CreateButton />
            </div>
                <SearchBox />
        </div>
    )
}