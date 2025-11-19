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