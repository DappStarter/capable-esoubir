require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note noise hospital install battle frame gasp'; 
let testAccounts = [
"0x37885d09718eb4f3814796be47db09cd0b4144bacd5545a6022720118952c2b6",
"0x209b817e7403c670dabb983f5f8773352decc11a33ad816335a75f6a85627b98",
"0x343b1f8e4418fdcb8ec4cd4323eee9cd76c3e728e6e1a940573837bc82b3315c",
"0x13a77e0f80e4944c988c061fea1c276d930034820a81c895251b032ef8add187",
"0x253e94a8e6dc9141a0f4d53b249baf719eedb4b6e0062b6ab0e2d430830d5707",
"0xee998bf0de678595fa6412070084205dccba14c73df3bacb62dfe3d61ce165b5",
"0x28484ef5208c23ea40922b950dbba3a9406c0ca477bae5069f364d0779dad001",
"0x0c96e54d50de8493907460f797f1b889fc4b99e2390d18f6e57cf451e7db5541",
"0x6ed7b2735907cef044d36e0aea73dbd7087eafc73733bc25a15722b267a1ea42",
"0xe174415c03d31e98ee41dd0c9c1b696b18f91cd75e4ae84117cc73a83a2cdad3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
