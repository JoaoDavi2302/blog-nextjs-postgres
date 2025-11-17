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

async function ListPosts(){
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  })

  const posts = await res.json()
  console.log(posts)

  return(
    <div className="bg-[#282828] p-6 rounded-lg border border-[#3c3836]">
          {posts.map((post:any) => {
            return(
            <div 
            key={post.id} 
            className="bg-[#282828] border border-[#3c3836] p-4 rounded"
            >
              <h2 className="text-x1 font-semibold text-[#fabd2f]">
                {post.title}
              </h2>
              <p className="mt-2">{post.content}</p>
            </div>
            )
          })}
        </div>
  )
}

function SearchBox(){
  return(
    <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-[#83a598] mb-3">
          Buscar
        </h2>

        <input
          type="text"
          placeholder="Pesquise no blog..."
          className="w-full px-4 py-2 rounded-md bg-[#282828] text-[#ebdbb2] border border-[#3c3836] focus:outline-none focus:border-[#fe8019]"
        />
      </div>
  )
}