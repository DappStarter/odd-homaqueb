require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area speak walnut radar shift protect giraffe light army gather'; 
let testAccounts = [
"0x5d3c82791c41e0aa3f557be7863f7285613172861eaf1ef77abcf3b1b0d4479a",
"0xefb71e695d27d92c6796ee67b89cc847aa1d17fa8aae69252ea837b50aa8a3e1",
"0x8fe2ef1afdc4093526b1a7daacf6afee498f2f38c319a306b98dd70bb28ea61a",
"0x70ec7ea4f0dc649d1a618594e1b018e74675706474971a39a010c0204e5de0d1",
"0xea3ad39306ff08e29c52539762603591713836aa79b45effad4e8198cc78c5f9",
"0x286d3dcbb978a8adeebe92c8fbf249b323167b16a08ccf47bced2487847d1f5d",
"0x26533b077fee4ca2a21ea7db4519181ef966b29f2ab50c22b681cdb93f8ebf09",
"0xa754671acacc77b00bbf773b328b2438a62aee0567b57f273e941f98e5d5e686",
"0xaa0c7ffcf692e9c50128304d45c7ba98135dab3413ad30464619a9df805b1fba",
"0xa4926ecd4fc032042590ef685ec40bd7539d53614195986ad9c0d4adbf23a837"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
