// 引用 ethers 模块
const { ethers } = require('ethers');
// 初始化一个 provider (连接到以太坊的 RPC 节点)
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");

async function main() {
    // 这里填入的可以是钱包地址或者是 ENS 域名
    const balance = await provider.getBalance('vitalik.eth');
    console.log("V神的余额", `${ethers.utils.formatEther(balance)} ETH`);
}

main();





