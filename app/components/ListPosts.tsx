import { posts } from "../interfaces/type";

export default async function ListPosts(){
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store"
    })
  
    const posts: posts[] = await res.json()
    console.log(posts)
  
    return(
      <div className="bg-[#282828] p-6 rounded-lg border border-[#3c3836]">
            {posts.map((post) => {
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