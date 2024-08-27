<div align="center">
  <a href="https://github.com/Phala-Network/ai-agent-template-mbd">
    <h1>AI Agent Contract Template with 'mbd</h1>
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>
  <p align="center">
    Host your AI Agent Contract on Phala's decentralized serverless cloud.
    <br />
    <a href="https://github.com/Phala-Network/ai-agent-template-mbd"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="QmQu9AmBL13tyGpxgg5ASt96WQ669p63rnJRWiAo9st8ns/0?key=c0c0105ba56276cd&chatQuery=When%20did%20humans%20land%20on%20the%20moon">View Demo</a>
    ·
    <a href="https://github.com/Phala-Network/ai-agent-template-mbd/issues">Report Bug</a>
    ·
    <a href="https://discord.gg/phala-network">Discord</a>
  </p>

  <h3>Architecure Overview</h3>
  <img height="320" src="./public/ai-agent-architecture.jpg" />
</div>

## 🤖 What Is This?!

<div align="center">
  <img height="240" src="https://www.jlwranglerforums.com/forum/attachments/zoolander-gif.325299/">
</div>

The 'mbd AI Agent template is a **MINIMAL** template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol. Unlike Vercel or other FaaS, it allows you to publish your AI Agent compiled code to IPFS and hosts it on a fully decentralized FaaS cloud with the following benefits:

- 💨 Ship Fast: Build and ship with familiar toolchain in minutes
- ⛑️ Secure: Execution guarded by rock solid TEE / Intel SGX
- 🔒 Private: Host API keys and user privacy at ease
- 💎 Unstoppable: Powered by IPFS and Phala's 35k+ decentralized TEE workers

[//]: # (<img width="320" src="https://media1.tenor.com/m/NBtFH5F9QTgAAAAd/what-is-my-purpose-butter.gif" />)

## Getting Started
### Prepare
Install dependencies
```shell
npm install
```

### Testing Locally
Create `.env` file and add your RedPill API Key
```shell
cp .env.example .env
```
Get an 'mbd Key from https://console.mbd.xyz/dashboard
> Go to https://console.mbd.xyz/dashboard and claim your 'mbd API Key
>
> Video: https://youtu.be/ZoJwbLNhbWE

In `.env` file replace `YOUR_MBD_KEY` with your API Key
```text
MBD_API_KEY="YOUR_MBD_KEY"
```

Build your Agent
```shell
npm run build
```

Test your Agent locally
```shell
npm run test
```

Expected Test Results
```shell
INPUT: {"method":"POST","path":"/ipfs/CID","queries":{},"secret":{"mbdApiKey":"mbd-7abc882c5c21647894fdcf0158ada934c9f8116db673759c5659614959005eb2"},"headers":{},"body":"{\"scoring\":\"like\",\"user_id\":\"12470\",\"top_k\":25,\"return_ai_labels\":true,\"return_metadata\":false}"}
POST RESULT: {
  status: 200,
  body: '{"body":[{"score":0.0007551,"labels":{"topics":["diaries_daily_life"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x83d7cd9ed67ee2e3ba4bd4dc5d73c142d15f473a"},{"score":0.0004989,"labels":{"topics":["business_entrepreneurs"],"sentiment":["negative"],"emotion":["joy"],"moderation":[]},"item_id":"0x46c3dd863f80e96e8d4a4132db425f79a4b64c77"},{"score":0.0004544,"labels":{"topics":["diaries_daily_life"],"sentiment":["positive"],"emotion":["joy","love","optimism"],"moderation":[]},"item_id":"0xc6a17393cf77e51f31eb1081a6a939cf9f95fe55"},{"score":0.0004505,"labels":{"topics":["food_dining"],"sentiment":["neutral"],"emotion":[],"moderation":[]},"item_id":"0xd85e34c8878105471e4e2f30a87088bbc3cb6059"},{"score":0.0004446,"labels":{"topics":["food_dining"],"sentiment":["positive"],"emotion":["joy"],"moderation":[]},"item_id":"0x7c9e8acb91e5f2f3f875c5cf4998801b01d5d1ac"},{"score":0.0003669,"labels":{"topics":["business_entrepreneurs","science_technology"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x3b38c9e59b3d316a1777d803070d88f36a1bfc51"},{"score":0.0003238,"labels":{"topics":["food_dining"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x9bf31fe5de25f423663db306820ef13e0584ad76"},{"score":0.0003202,"labels":{"topics":["business_entrepreneurs"],"sentiment":["neutral"],"emotion":[],"moderation":[]},"item_id":"0xb960ac130806814dc643b6528d7ab7244fde16b3"},{"score":0.0003061,"labels":{"topics":["food_dining"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x9e123b8a13918529c59c838affd8a0f4163e1233"},{"score":0.0003017,"labels":{"topics":[],"sentiment":["neutral"],"emotion":[],"moderation":[]},"item_id":"0x97906c211fa5f48d4377ddc1e2b5547e428b4c8e"},{"score":0.0002771,"labels":{"topics":[],"sentiment":["neutral"],"emotion":[],"moderation":[]},"item_id":"0x5581cfca4704754735962c72c01d4e768b9ba0c4"},{"score":0.0002708,"labels":{"topics":["sports"],"sentiment":["neutral"],"emotion":["optimism"],"moderation":[]},"item_id":"0x5b8a48d7c62eece2b08fb802f774f6484652cbd9"},{"score":0.0002556,"labels":{"topics":["business_entrepreneurs"],"sentiment":["positive"],"emotion":["anticipation","joy","optimism"],"moderation":[]},"item_id":"0x83dd9be074a55dfa186660085cae8e793e9d38cb"},{"score":0.0002548,"labels":{"topics":["fitness_health"],"sentiment":["positive"],"emotion":["optimism"],"moderation":[]},"item_id":"0x919add6dff1be577d0174155325ee173af58c64f"},{"score":0.0002489,"labels":{"topics":["food_dining"],"sentiment":["neutral"],"emotion":[],"moderation":[]},"item_id":"0xcc31a87c6bb481fb24b8572c1ff7cb7337792e64"},{"score":0.0002356,"labels":{"topics":["other_hobbies"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x8c4d6aedefc19a6faf9136198b091384bfdff682"},{"score":0.0002327,"labels":{"topics":["fitness_health"],"sentiment":["neutral"],"emotion":["joy"],"moderation":[]},"item_id":"0x102df553577d4b41126a0b35f2b0be9cb6d6bf31"},{"score":0.0002179,"labels":{"topics":["business_entrepreneurs"],"sentiment":["neutral"],"emotion":["anticipation"],"moderation":[]},"item_id":"0x0349c5fe7783eda17d73d6cb9d144970bb9c5368"},{"score":0.000215,"labels":{"topics":["sports"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x6fbfa668ca16a8717051762b1c5536068f6f0316"},{"score":0.000213,"labels":{"topics":["travel_adventure"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x513014dafb2df1097308620aa79430b98a924962"},{"score":0.0002117,"labels":{"topics":["diaries_daily_life","travel_adventure"],"sentiment":["neutral"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0x49aa4deb035cfb154db60a7c8a7fb28bec9fa398"},{"score":0.0002096,"labels":{"topics":["food_dining"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0xff0745fbe03d3dc80a96b54a057c5198c2b03dfd"},{"score":0.000209,"labels":{"topics":["diaries_daily_life","fitness_health"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0xea4e1c9f4cabddbee3a1d4970278db6e335a0e55"},{"score":0.0002025,"labels":{"topics":["sports"],"sentiment":["positive"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0xb125b56924cdf7f540a1dec556ed641baecc8a23"},{"score":0.0002013,"labels":{"topics":["arts_culture"],"sentiment":["neutral"],"emotion":["joy","optimism"],"moderation":[]},"item_id":"0xcf673cbe97a99f745901bfcd52d9ab6a116e3b7c"}]}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
**NOTE**:
This is a local test and your published code could have a different result when executing in the TEE on Phala Network.

Please reach out to the team here if your run into issues: https://discord.gg/phala-network
```

### Publish Your AI Agent

Upload your compiled AI Agent code to IPFS.
```shell
npm run publish-agent
```

Upon a successful upload, the command should show the URL to access your AI Agent.
```shell
✓ Compiled successfully.
  1.36 KB  dist/index.js
Running command: npx thirdweb upload dist/index.js
This may require you to log into thirdweb and will take some time to publish to IPFS...

    $$\     $$\       $$\                 $$\                         $$\       
    $$ |    $$ |      \__|                $$ |                        $$ |      
  $$$$$$\   $$$$$$$\  $$\  $$$$$$\   $$$$$$$ |$$\  $$\  $$\  $$$$$$\  $$$$$$$\  
  \_$$  _|  $$  __$$\ $$ |$$  __$$\ $$  __$$ |$$ | $$ | $$ |$$  __$$\ $$  __$$\ 
    $$ |    $$ |  $$ |$$ |$$ |  \__|$$ /  $$ |$$ | $$ | $$ |$$$$$$$$ |$$ |  $$ |
    $$ |$$\ $$ |  $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$   ____|$$ |  $$ |
    \$$$$  |$$ |  $$ |$$ |$$ |      \$$$$$$$ |\$$$$$\$$$$  |\$$$$$$$\ $$$$$$$  |
     \____/ \__|  \__|\__|\__|       \_______| \_____\____/  \_______|\_______/ 

 💎 thirdweb v0.14.12 💎

- Uploading file to IPFS. This may take a while depending on file sizes.

✔ Successfully uploaded file to IPFS.
✔ Files stored at the following IPFS URI: ipfs://QmUG4mpRuqPAgWdAnv1mFWDXfnUfumiR7Xp76EqgLJr5VA
✔ Open this link to view your upload: https://b805a9b72767504353244e0422c2b5f9.ipfscdn.io/ipfs/bafybeicx7fwuavddpc3ihi5kb5mjg4glwz4vxwuf5fk7cpntjqf2k32aje/

Agent Contract deployed at: https://wapo-testnet.phala.network/ipfs/QmUG4mpRuqPAgWdAnv1mFWDXfnUfumiR7Xp76EqgLJr5VA

If your agent requires secrets, ensure to do the following:
1) Edit the setSecrets.ts file to add your secrets
2) Set the variable AGENT_CID=QmUG4mpRuqPAgWdAnv1mFWDXfnUfumiR7Xp76EqgLJr5VA in the .env file
```

<details>
<summary>New to thirdweb?</summary>
We use <a href="https://thirdweb.com/dashboard/infrastructure/storage">thirdweb Storage</a> to host IPFS contents. If you are new to thirdweb, the command will guide you to create your account or login to your existing account from the browser. (You may need to forward port 8976 if you are accessing a remote console via SSH.)
</details>

<details>
<summary>Did thirdweb fail to publish?</summary>
If ThirdWeb fails to publish, please use any IPFS pinning service to publish your Agent Contract.
</details>

### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://wapo-testnet.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://wapo-testnet.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

To add your secrets,
1) edit the [setSecrets.ts](./scripts/setSecrets.ts) file and update the `secrets` variable at the top of the file
```typescript
// Update your key value JSON object here for your secrets
const secrets = JSON.stringify({
  // Add your secrets here
  // key: value
  mbdApiKey: process.env.MBD_API_KEY
})
```
2) Update the [.env](./.env.example) file with your published agent IPFS CID
```text
AGENT_CID=QmUG4mpRuqPAgWdAnv1mFWDXfnUfumiR7Xp76EqgLJr5VA
```
3) Run command to set the secrets
```shell
npm run set-secrets
```
Expected output:
```shell
Storing secrets...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   219    0    68  100   151     99    220 --:--:-- --:--:-- --:--:--   319
{"token":"1e4d12a87503081d","key":"680665645b9f4e90","succeed":true}

Secrets set successfully. Go to the URL below to interact with your agent:
https://wapo-testnet.phala.network/ipfs/QmUG4mpRuqPAgWdAnv1mFWDXfnUfumiR7Xp76EqgLJr5VA?key=680665645b9f4e90
```

The API returns a `token` and a `key`. The `key` is the id of your secret. It can be used to specify which secret you are going to pass to your frame. The `token` can be used by the developer to access the raw secret. You should never leak the `token`.

To verify the secret, run the following command where `key` and `token` are replaced with the values from adding your `secret` to the vault.
```shell
curl https://wapo-testnet.phala.network/vaults/<key>/<token>
```

Expected output:
```shell
{"data":{"mbdApiKey":"<MBD_API_KEY>"},"succeed":true}
```

### Access Queries
To help create custom logic, we have an array variable named `queries` that can be accessed in the `Request` class. To access the `queries` array variable `chatQuery` value at index `0`, the syntax will look as follows:
```typescript
const query = req.queries.chatQuery[0] as string;
```
The example at https://wapo-testnet.phala.network/ipfs/QmcQbQzJop8m9uqGJTRmxVCEPoWtzx6NkNJRA12CZ6vFyT?key=b7fd2b6c4bf008cc&chatQuery=When%20did%20humans%20land%20on%20the%20moon will have a value of `When did humans land on the moon`. `queries` can have any field name, so `chatQuery` is just an example of a field name and not a mandatory name, but remember to update your `index.ts` file logic to use your expected field name.


## FAQ

<details>
<summary><b>What packages can I use in the AI Agent server?</b></summary>
<ul>
  <li>Most of the npm packages are supported: viem, onchainkit, ….</li>
  <li>Some packages with some advanced features are not supported:</li>
  <ul>
    <li>Memory usage over 100MB</li>
    <li>Web Assembly</li>
    <li>Browser only features: local storage, service workers, etc</li>
  </ul>
</ul>
</details>

<details>
<summary><b>What’s the spec of the Javascript runtime?</b></summary>
<ul>
  <li>The code runs inside a tailored <a href="https://bellard.org/quickjs/">QuickJS engine</a></li>
  <li>Available features: ES2023, async, fetch, setTimeout, setInterval, bigint</li>
  <li> <a href="https://docs.phala.network/tech-specs/ai-agent-contract#wapojs/">Tech spec doc</a></li>
</ul>
</details>

<details>
<summary><b>Why is the serverless platform secure?</b></summary>
<ul>
  <li>Your AI Agent code on is fully secure, private, and permissionless. Nobody can manipulate your program, steal any data from it, or censor it.</li>
  <li>Security: The code is executed in the decentralized TEE network running on Phala Network. It runs code inside a secure blackbox (called enclave) created by the CPU. It generates cryptographic proofs verifiable on Phala blockchain. It proves that the hosted code is exactly the one you deployed.</li>
  <li>Privacy: You can safely put secrets like API keys or user privacy on Phala Network. The code runs inside TEE hardware blackboxs. The memory of the program is fully encrypted by the TEE. It blocks any unauthorized access to your data.</li>
  <li>Learn more at <a href="https://phala.network">Phala Network Homepage</a></li>
</details>

<details>
<summary><b>What's TEE / Intel SGX?</b></summary>
<ul>
  <li><a href="https://collective.flashbots.net/t/tee-sgx-wiki/2019">TEE/SGX wiki</a></li>
  <li><a href="https://collective.flashbots.net/t/debunking-tee-fud-a-brief-defense-of-the-use-of-tees-in-crypto/2931">Debunking TEE FUD: A Brief Defense of The Use of TEEs in Crypto</a></li>
</details>
