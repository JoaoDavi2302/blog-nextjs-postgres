import { pool } from "@/lib/db";

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM posts')
        return Response.json(result.rows)
    } catch (error) {
        console.log(`deu erro aqui: ${error}`)
        return new Response("Internal error server", {status: 500})
    }
}
