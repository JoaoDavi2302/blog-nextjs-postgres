import { pool } from "@/lib/db";

export async function DELETE(req, {params}) {
  const p = await params
  const id = Number(p.id)
  

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "ID inválido" }),{ status: 400 })
  }

  try {
    const result = await pool.query("DELETE FROM posts WHERE id = $1", [id])

    if(result.rowCount === 0){
      return new Response(JSON.stringify({message: 'post não encontrado'}), {status: 404})
    }

    return new Response(
    JSON.stringify({ message: "Post deletado com sucesso" }), { status: 200 })

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ erro: 'Erro ao deletar o post' }), { status: 500 });
  }
}

export async function PUT(req, {params}) {
  const p = await params
  const id = Number(p.id)

  if(isNaN(id)){
    return new Response(JSON.stringify({error: "ID inválido"}), {status: 404})
  }

  if (!title || !content) {
    return new Response(JSON.stringify({ error: "Título e conteúdo são obrigatórios" }), { status: 400 }); 
  }

  try {
    const {title, content} = await req.json()

    const result = await pool.query("UPDATE posts SET title = $1, content = $2 WHERE id = $3", [title,content,id])

    if(result.rowCount === 0){
      return new Response(JSON.stringify({message: "post não encontrado"}), {status: 404})
    } 

    return new Response(JSON.stringify({message: "post editado com sucesso"}), {status: 200})
  } catch (error) {
    console.log(`erro ao editar o post de  id ${id}: ${error}`)
    return new Response(JSON.stringify({ erro: 'Erro ao editar o post' }), { status: 500 });
  }
  
}