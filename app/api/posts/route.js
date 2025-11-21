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

        const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
        const exist = await pool.query('SELECT id FROM posts WHERE slug = $1 LIMIT 1', [slug])

        if(exist.rows.length > 0){
          return new Response(JSON.stringify({error: 'Posts iguais'}), {
            status: 409,
            headers: {'Content-type': 'application/json'}
          })
        }
        
        await pool.query(
          'INSERT INTO posts (title, content, slug) VALUES($1, $2, $3)', [title, content, slug])
        console.log('Dados recebidos', {title, content})
        
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
