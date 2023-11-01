import web3 from "./web3";
import NftMinterFactory from './build/MyNFT.json';

const instance = new web3.eth.Contract(
    NftMinterFactory,
    '0xb17a4a994a52c914ddec426222758dac0c66267f'
);

export default instance;