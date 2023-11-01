import web3 from "./web3";
import NftMinterFactory from './build/MyNFT.json';

const instance = new web3.eth.Contract(
    NftMinterFactory,
    '0xB17A4A994A52c914DDEc426222758dac0C66267f'
);

export default instance;