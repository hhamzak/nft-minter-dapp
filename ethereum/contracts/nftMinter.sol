// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.4.17;

//import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./ERC721.sol";


contract NFTMinter is ERC721A {

    string [] public mintElements;

    function mint(string memory _imageCid) public returns(uint256) {
        // this is deprecated - uint _id = KryptoBirdz.push(_kryptoBird);
        mintElements.push(_imageCid);
        uint _id = mintElements.length - 1;

        // .push no longer returns the length but a ref to the added element
        _mint(msg.sender, _id);

        return _id;
    }

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}


}

