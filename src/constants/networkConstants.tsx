interface INetworkMap {
  [key: string]: {
    key: string;
    title: string;
    rpcUrl: string;
    scanner: string;
    graphqlClientUrl: string;
    defaultFactoryAddr: string;
    scannerUrl?: string;
  };
}

export const networkMap: INetworkMap = {
  polygon: {
    title: 'Polygon Mainnet',
    key: 'polygon',
    scanner: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com/',
    defaultFactoryAddr: '0x45eBc3eAE6DA485097054ae10BA1A0f8e8c7f794',
    graphqlClientUrl:
      'https://api.thegraph.com/subgraphs/name/humanprotocol/polygon',
    scannerUrl: 'https://polygonscan.com/address/',
  },
  mumbai: {
    title: 'Polygon Mumbai Testnet',
    key: 'mumbai',
    scanner: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    defaultFactoryAddr: '0x558cd800f9F0B02f3B149667bDe003284c867E94',
    graphqlClientUrl: '',
  },
  rinkeby: {
    title: 'Ethereum Rinkeby',
    key: 'rinkeby',
    scanner: 'https://rinkeby.etherscan.io',
    rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    defaultFactoryAddr: '0x925B24444511c86F4d4E63141D8Be0A025E2dca4',
    graphqlClientUrl:
      'https://api.thegraph.com/subgraphs/name/humanprotocol/rinkeby',
    scannerUrl: 'https://rinkeby.etherscan.io/address/',
  },
  neonslabdev: {
    title: 'NeonsLab Devtestnet',
    key: 'neonslabdev',
    scanner: 'https://neonscan.org',
    rpcUrl: 'https://proxy.devnet.neonlabs.org/solana',
    defaultFactoryAddr: '0x75D377773aCf9eB1076B01c1698415Bfe2db6D9d',
    graphqlClientUrl: '',
  },
};
export const networks = Object.values(networkMap).map((network) => network);
