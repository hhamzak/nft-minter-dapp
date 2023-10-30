import web3 from "./web3";
import NftMinterFactory from './build/NftMinterFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(NftMinterFactory.interface),
    '0x000000'
);

export default instance;