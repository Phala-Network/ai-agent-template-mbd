import 'dotenv/config'
import './testSupport'
import {execute} from "./testSupport";

// Sample body input for a POST request
const sampleInput = {
    "scoring": "like",
    "user_id": "12470",
    "top_k": 25,
    "return_ai_labels": true,
    "return_metadata": false
}

async function test() {
    const postResult = await execute({
        method: 'POST',
        path: '/ipfs/CID',
        queries: {},
        secret: { mbdApiKey: 'MBD_API_KEY' },
        headers: {},
        body: JSON.stringify(sampleInput)
    })
    console.log('POST RESULT:', JSON.parse(postResult))

    console.log(`Now you are ready to publish your agent, add secrets, and interact with your agent in the following steps:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
