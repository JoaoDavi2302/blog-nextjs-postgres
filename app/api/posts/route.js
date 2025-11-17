import { pool } from "@/lib/db";

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM posts')
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })

    } catch (error) {
        console.log(`deu erro aqui: ${error}`)
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
}

export async function POST(req) {
    try {
        const {title, content} = await req.json()

        if(!title || !content ){
            return new Response(JSON.stringify({ error: 'Preencha todos os dados' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              })
        } 
            
        const result = await pool.query('INSERT INTO posts (title, content) VALUES($1, $2)', [title, content])
        
        return new Response(JSON.stringify({
            message: 'Post criado com sucesso'
          }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          })
    } catch (error) {
        console.log(`erro aqui: ${error}`)
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }

}