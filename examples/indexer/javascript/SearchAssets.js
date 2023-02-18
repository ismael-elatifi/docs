// SearchAssets.js
// requires algosdk@1.6.1 or higher 
// verify installed version
// npm list algosdk

const algosdk = require('algosdk');
const indexer_token = "";
const indexer_server = "http://localhost";
const indexer_port = 8980;

// Instantiate the indexer client wrapper
let indexerClient = new algosdk.Indexer(indexer_token, indexer_server, indexer_port);

(async () => {
    const assetIndex = 2044572;
    let assetInfo = await indexerClient.searchForAssets()
        .index(assetIndex).do();
    console.log("Information for Asset: " + JSON.stringify(assetInfo, undefined, 2));
})().catch(e => {
    console.log(e);
    console.trace();
});