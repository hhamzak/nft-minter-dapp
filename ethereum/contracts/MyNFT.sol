// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    address payable liquidityWallet;
    address payable treasuryWallet;
    uint256 public treasuryFee = 6;
    uint256 public liquidityFee = 4;

    mapping(string => bool) mintElementExists;
    string [] public mintElements;


    constructor(address payable _liquidityWallet, address payable _treasuryWallet) ERC721("Softtech NFT Example", "SNFTE") {
        liquidityWallet = _liquidityWallet;
        treasuryWallet = _treasuryWallet;
    }

    function mint(address _to, string memory _imageCid) public payable {
        require(msg.value > 0, "You must pay to mint an NFT");
        require(!mintElementExists[_imageCid],
                'Error - kryptoBird already exists');

        mintElements.push(_imageCid);
        uint tokenId = mintElements.length - 1;

        uint256 treasuryAmount = msg.value * treasuryFee / 100;
        uint256 liquidityAmount = msg.value * liquidityFee / 100;

        liquidityWallet.transfer(liquidityAmount);
        treasuryWallet.transfer(treasuryAmount);

        _safeMint(_to, tokenId);

        mintElementExists[_imageCid] = true;
    }
}
