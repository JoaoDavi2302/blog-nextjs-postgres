import ListPosts from "./components/ListPosts";
import SearchBox from "./components/SearchBox";

export default async function Home() {  
  return (
    <div className="min-h-screen bg-[#1d2021] text-[#ebdbb2] px-4 py-8">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-[#fabd2f] mb-4">
          Posts Recentes 
        </h2>
        <ListPosts />
        
      </div>

        <SearchBox />

      <footer className="text-center text-sm text-[#8ec07c] opacity-80">
        made by J:D
      </footer>
    </div>
  );
}




