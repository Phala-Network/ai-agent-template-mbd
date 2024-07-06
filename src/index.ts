import { Request, Response, route } from './httpSupport'

async function GET(req: Request): Promise<Response> {
    return new Response('Only POST Implemented')
}

async function POST(req: Request): Promise<Response> {
    const secret = req.queries?.key;
    // if (!secret) {
    //     const result = {error: 'Error: MISSING VAULT KEY!'}
    //     return new Response(JSON.stringify(result))
    // }
    const mbdApiKey = req.secret?.mbdApiKey as string;
    const body = await req.json();
    let result;

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
        result = await response.json();
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        result = {error};
    }

    console.log(JSON.stringify(result.body));
    return new Response(result);
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
