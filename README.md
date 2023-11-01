# nft-minter-dapp
softtech nft-minter-dapp example

TR
-----------------------------------------------------------------
Proje kapsamında 1 adet solidity ile contract yazıldı. MyNFT
  Contract yazılırken ERC721 standardına uygun olarak hazırlandı. 
  Deploy sırasında tanımlanan iki adet hesap Liquidity wallet ve treasury wallet constructor ile verildi. 
  Üretilen token'lar Softtech NFT Example adıyla ve SNFTE ifadesiyle türetildi. 

  Contrat'ın mint fonksiyonu, fonksiyonu tetikleyen adresi ve string bir ifade olan web3.storage den dönen content id değerini alıyor. Unique ifade olan bu değeri tekrar gönderimde kabul etmeyecek şekilde düzenlendi.
  
  Gerekli %60 ve % 40 oranında liquidity ve treasury gönderimlerini yapmakta.
  
Bu contract Remix üzerinden Sepolia ağına publish edildi.
Contract address: 0xb17a4a994a52c914ddec426222758dac0c66267f

React tarafında npm start dev komutu ile birlikte ayağa kaldırabilirsiniz.  Ya da proje içerisindeki start.bat kullanılabilir. Start.bat içerisind gerekli npm install fonksiyonu bulunmaktadır. 
React tarafında off chain çözüm olarak web3.storage kullanılarak block zincir üzerine seçilen image gönderilir. 
Image gönderildikten sonra dönen cid ile birlikte meta data ve diğer özelliklerde JSON olarak web3.storage'e gönderilir. 

Yaşanan sorunlar;
* Custom javascript compiler ile openzeppelin fonksiyonların derlenememsi, bu nedenle Remix ide üzerinden ağa publish edildi.
* Ağa gönderilen mint fonksiyonunda remix ide ile problem olmamasına karşın react kodunda iletilen revert edilmesi.


ENG
-----------------------------------------------------------------
MyNFT contract written for a project that was prepared according to the ERC721 standard. Two accounts, Liquidity wallet and treasury wallet, were given with the constructor during deployment. The tokens produced were named Softtech NFT Example and SNFTE.

The contract’s mint function takes the address that triggers the function and a string expression, the content id value returned from web3.storage. This unique expression is arranged not to be accepted again when sent.

It makes the necessary %60 and %40 liquidity and treasury transfers.

This contract was published on the Sepolia network via Remix. Contract address: 0xb17a4a994a52c914ddec426222758dac0c66267f

You can start the React side with the npm start dev command. Or you can use the start.bat in the project. The start.bat contains the necessary npm install function. On the React side, web3.storage is used as an off chain solution to send the selected image to the block chain. After the image is sent, meta data and other features are sent to web3.storage as JSON with the returned cid.

Problems encountered;
*Openzeppelin functions could not be compiled with custom javascript compiler, so it was published to the network via Remix ide.
*Revert of the mint function sent to the network. No problem with remix ide in react code.



