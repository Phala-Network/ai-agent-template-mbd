import { Request, Response, route } from './httpSupport'

async function GET(req: Request): Promise<Response> {
    return new Response('GET Not Implemented')
}

async function POST(req: Request): Promise<Response> {
    const secrets = req.secret || {}
    const queries = req.queries
    const mbdApiKey = (secrets.mbdApiKey) ? secrets.mbdApiKey as string : ''
    const body = await req.json()
    let result = { body: '' }

    try {
        const response = await fetch('https://api.mbd.xyz/v1/farcaster/casts/feed/for-you', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': `${mbdApiKey}`,
            },
            body: JSON.stringify(body)
        });
        const responseData = await response.json();
        result.body = responseData.body
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        result.body = error as string;
    }

    return new Response(JSON.stringify(result))
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
