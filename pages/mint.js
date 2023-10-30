import React, { Component } from 'react';
import { Web3Storage, getFilesFromPath } from 'web3.storage'

class Nftinter extends Component {
    state = {
        web3token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxMmE4MmMxQjQ1RDljODhFNThCMzQ5RTI3YmE3NWUxRTQ0OGM5MzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTg2NzY4ODcxNjMsIm5hbWUiOiJuZnQtbWludGUtZGFwcCJ9.7sky9ZQq_QIv1zQ74nyR4_ponXhxzddhwCUfAYegisM",
        filePath: "",
        cid: "",
        name: "",
        items: [],
        newItem: { key: "", value: "" },
        itemsLenght: 0,
        amount: 0
    };

    async handleNewItemChange(event) {
        console.log("asdassd");
        const { name, value } = event.target;

        await this.setState(prevState => ({
            newItem: { ...prevState.newItem, [name]: value }
        }));
    }

    async handleAddItem(e) {
        e.preventDefault();
        const { key, value } = this.state.newItem;
        await this.setState(prevState => ({
            items: [...prevState.items, { key, value }],
            newItem: { key: '', value: '' }
        }));
    }

    async uploadWeb3() {
        const storage = new Web3Storage({ token: this.state.web3token });
        const file = await fetch(this.state.filePath).then((r) => r.blob());
        const cid = await storage.put([file]);
        await this.setState({ cid: cid });

        const metaData = {
            Name: this.state.name,
            DocumentCid: this.state.cid,
            MetaData: this.state.items.map(item => ({ Key: item.key, Value: item.value })),
            Amount: this.state.amount
        };

        console.log(JSON.stringify(metaData));

        const fileJSON = new File([JSON.stringify(metaData)], cid + '.json', { type: 'application/json' });
        const cidJSON = await storage.put([fileJSON]);
        console.log(`JSON uploaded with CID: ${cidJSON}`);

    }

    render() {
        return (
            <div>
                <h2>NFT Minter Dapp</h2>
                <hr />
                <h1>filepath: {this.state.filePath}</h1>
                <h1>cid: {this.state.cid}</h1>
                <h1>l: {this.state.itemsLenght}</h1>
                <div align="center">
                    <form >
                        <table border="1">
                            <tbody>
                                <tr>
                                    <td style={{ padding: "10px" }}>
                                        <h4> General Info</h4>
                                        <label id="name">Name:</label>
                                        <input type="text" id="fname" name="name" style={{ margin: "5px" }} onChange={(event) => this.setState({ name: event.target.value })} />
                                        <br />
                                        <input type="file" id="Upload" onChange={(event) => this.setState({ filePath: URL.createObjectURL(event.target.files[0]) })} />
                                    </td>
                                    <td>
                                        <img src={this.state.filePath} width="200" height="200" style={{ margin: "5px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style={{ padding: "10px" }}>
                                        <h4> Meta Data</h4>

                                        <ul>
                                            {this.state.items.map((item, index) => (
                                                <li key={index}>
                                                    <p>{item.key}: {item.value}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <input type="text" name="key" value={this.state.newItem.key} onChange={this.handleNewItemChange.bind(this)} />
                                        <input type="text" name="value" value={this.state.newItem.value} onChange={this.handleNewItemChange.bind(this)} />
                                        <button onClick={this.handleAddItem.bind(this)}>Add</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style={{ padding: "10px" }}>

                                        <h4> Price</h4>
                                        <label for="amount">Amount:</label>
                                        <input type="text" id="fname" name="amaunt" /><br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />

                    </form>

                    <button onClick={this.uploadWeb3.bind(this)}>Mint</button>
                </div>
            </div>
        );
    }
}

export default Nftinter;