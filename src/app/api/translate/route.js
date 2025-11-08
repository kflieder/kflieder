import * as deepl from 'deepl-node';

const authKey = process.env.DEEPL_API_KEY; // replace with your key
const deeplClient = new deepl.DeepLClient(authKey);

(async () => {
    const result = await deeplClient.translateText('Hello, world!', null, 'de');
    console.log(result.text);
})();