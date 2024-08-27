import main from './index'
import 'dotenv/config'

async function execute(inputObj: any) {
    const inputJson = JSON.stringify(inputObj)
    console.log('INPUT:', inputJson)
    return await main(inputJson)
}

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
        secret: { mbdApiKey: process.env.MBD_API_KEY },
        headers: {},
        body: JSON.stringify(sampleInput)
    })
    console.log('POST RESULT:', JSON.parse(postResult))

    console.log(`**NOTE**:\nThis is a local test and your published code could have a different result when executing in the TEE on Phala Network.`)
    console.log(`\nPlease reach out to the team here if your run into issues: https://discord.gg/phala-network`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
