"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 7404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vp": () => (/* binding */ SUPPORTED_WALLETS)
/* harmony export */ });
/* unused harmony exports injected, walletconnect */
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2057);
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_2__);



const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
    supportedChainIds: [
        1,
        3,
        4,
        5,
        42,
        56,
        97
    ]
});
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__.WalletConnectConnector({
    rpc: {
        1: constants__WEBPACK_IMPORTED_MODULE_2__.RPC_URL
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: 15000
});
const SUPPORTED_WALLETS = [
    {
        name: "METAMASK",
        data: {
            connector: injected,
            name: "MetaMask",
            iconName: "/images/walletImages/metamask-fox.svg",
            description: "Easy-to-use browser extension.",
            href: null,
            color: "#E8831D"
        }
    },
    {
        name: "Wallet Connect",
        data: {
            connector: walletconnect,
            name: "Wallet Connect",
            iconName: "/images/walletImages/walletconnect.png",
            description: "Easy-to-use browser extension.",
            href: null,
            color: "#E8831D"
        }
    }, 
];


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yB": () => (/* binding */ ACTIVE_NETWORK),
/* harmony export */   "iF": () => (/* binding */ contractAddress),
/* harmony export */   "$G": () => (/* binding */ RPC_URL),
/* harmony export */   "sr": () => (/* binding */ NetworkDetails)
/* harmony export */ });
/* unused harmony export NetworkContextName */
const NetworkContextName = "Kovan Test Network";
const ACTIVE_NETWORK = 42;
const contractAddress = "0xB494DB91929ca1FcA9b740446B45Aa2B79403987";
const RPC_URL = "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const NetworkDetails = [
    {
        chainId: "0x2A",
        chainName: "Kovan Test Network",
        nativeCurrency: {
            name: "Kovan Test Network",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: [
            RPC_URL
        ],
        blockExplorerUrls: [
            "https://kovan.etherscan.io"
        ]
    }, 
]; // MAINNET CONFIG
 // export const NetworkContextName = "Ethereum Mainnet";
 // export const ACTIVE_NETWORK = 1;
 // export const contractAddress = "MAINNET_CONTRACT_ADDRESS";
 // export const RPC_URL =
 //   "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
 // export const NetworkDetails = [
 //   {
 //     chainId: "0x1",
 //     chainName: "Ethereum Mainnet",
 //     nativeCurrency: {
 //       name: "Ethereum Mainnet",
 //       symbol: "ETH",
 //       decimals: 18,
 //     },
 //     rpcUrls: [RPC_URL],
 //     blockExplorerUrls: ["https://etherscan.io"],
 //   },
 // ];


/***/ }),

/***/ 2395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "Z": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7404);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3135);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4799);
/* harmony import */ var _ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2793);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);










const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const setSession = (userAddress)=>{
    if (userAddress) {
        sessionStorage.setItem("userAddress", userAddress);
    } else {
        sessionStorage.removeItem("userAddress");
    }
};
function AuthProvider(props) {
    const { activate , account: account1 , library , deactivate , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();
    const { 0: nftPrice , 1: setNftPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: MAX_NFT_SUPPLY1 , 1: setMAX_NFT_SUPPLY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: totalSupply1 , 1: setTotalSupply  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: balanceOfValue , 1: setBalanceOfValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: adminWalletAddress , 1: setAdminWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: userNFTList , 1: setUserNFTList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: saleIsActive1 , 1: setsaleIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let data1 = {
        nftPrice,
        saleIsActive: saleIsActive1,
        balanceOfValue,
        adminWalletAddress,
        MAX_NFT_SUPPLY: MAX_NFT_SUPPLY1,
        totalSupply: totalSupply1,
        userNFTList,
        getCurrentMintingDetails: ()=>getCurrentMintingDetails()
        ,
        updateUser: (account)=>{
            setSession(account);
        },
        connectWallet: (data)=>connectWalletHandler(data)
    };
    const connectWalletHandler = (data)=>{
        try {
            const connector = data.connector;
            if (connector && connector.walletConnectProvider?.wc?.uri) {
                connector.walletConnectProvider = undefined;
            }
            activate(connector, undefined, true).catch((error)=>{
                if (error) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(JSON.stringify(error.message));
                    window.sessionStorage.removeItem("walletName");
                    activate(connector);
                }
            });
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error.message);
        }
    };
    const userNFTListHadler = async (balanceOf, cancelTokenSource)=>{
        setUserNFTList([]);
        const contract = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getContract */ .uN)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .contractAddress */ .iF, _ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_6__, library, account1);
        try {
            for(let i = 0; i < balanceOf; i++){
                const id = await contract.tokenOfOwnerByIndex(account1, i);
                const filter = await contract.tokenURI(id.toString());
                const res = await axios__WEBPACK_IMPORTED_MODULE_7___default().get(filter, {
                    cancelToken: cancelTokenSource && cancelTokenSource.token
                });
                if (res.status === 200) {
                    setUserNFTList((prev)=>[
                            ...prev,
                            {
                                id: id.toString(),
                                nfdData: res.data
                            }, 
                        ]
                    );
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_7___default().CancelToken.source();
        if (balanceOfValue > 0) {
        // userNFTListHadler(balanceOfValue, cancelTokenSource);
        }
        return ()=>{
            cancelTokenSource.cancel();
        };
    }, [
        balanceOfValue,
        account1
    ]); //eslint-disable-line
    const getContractDetails = async ()=>{
        try {
            const web3 = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWeb3Obj */ .dX)();
            const contractObj = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWeb3ContractObject */ .ut)(_ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_6__, _constants__WEBPACK_IMPORTED_MODULE_4__/* .contractAddress */ .iF);
            const adminAccount = await contractObj.methods.owner().call();
            setAdminWalletAddress(adminAccount);
            const hasFinalSaleStarted = await contractObj.methods.hasFinalSaleStarted().call();
            if (hasFinalSaleStarted) {
                const NFT_PRICE = await contractObj.methods.NFT_PRICE().call();
                const getNFTPrice = await web3.utils.fromWei(NFT_PRICE.toString());
                setNftPrice(getNFTPrice);
            } else {
                const RESERVE_PRICE = await contractObj.methods.NFT_PRICE_PRESALE().call();
                const getRESERVE_PRICE = await web3.utils.fromWei(RESERVE_PRICE.toString());
                setNftPrice(getRESERVE_PRICE);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (account1) {
            getBalanceOfFun();
        }
    }, [
        account1
    ]); //eslint-disable-line
    async function getBalanceOfFun() {
        setBalanceOfValue(await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getBalanceOf */ .yh)(_ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_6__, _constants__WEBPACK_IMPORTED_MODULE_4__/* .contractAddress */ .iF, account1));
    }
    const getCurrentMintingDetails = async ()=>{
        try {
            const contractObj = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWeb3ContractObject */ .ut)(_ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_6__, _constants__WEBPACK_IMPORTED_MODULE_4__/* .contractAddress */ .iF);
            if (account1) {
                getBalanceOfFun();
            }
            const saleIsActive = await contractObj.methods.saleIsActive().call();
            setsaleIsActive(saleIsActive);
            const MAX_NFT_SUPPLY = await contractObj.methods.MAX_NFT_SUPPLY().call();
            setMAX_NFT_SUPPLY(Number(MAX_NFT_SUPPLY));
            const totalSupply = await contractObj.methods.totalSupply().call();
            setTotalSupply(Number(totalSupply));
        } catch (error) {
            console.log("ERROR", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getContractDetails();
        getCurrentMintingDetails();
    }, []); //eslint-disable-line
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (account1 && chainId) {
            if (chainId !== _constants__WEBPACK_IMPORTED_MODULE_4__/* .ACTIVE_NETWORK */ .yB) {
                if (window.ethereum) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .swichNetworkHandler */ .OM)();
                }
            }
        }
    }, [
        chainId,
        account1
    ]); //eslint-disable-line
    // useEffect(() => {
    //   const userAddress = window.sessionStorage.getItem("userAddress");
    //   if (userAddress) {
    //     data.connectWallet();
    //   }
    // }, []); //eslint-disable-line
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.sessionStorage.getItem("walletName")) {
            const selectectWalletDetails = _connectors__WEBPACK_IMPORTED_MODULE_2__/* .SUPPORTED_WALLETS.filter */ .Vp.filter((data)=>data.name === window.sessionStorage.getItem("walletName")
            );
            if (selectectWalletDetails[0]?.data) {
                connectWalletHandler(selectectWalletDetails[0].data);
            }
        }
    }, []); //eslint-disable-line
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        data1.updateUser(account1);
    }, [
        account1
    ]); //eslint-disable-line
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!account1) {
            deactivate();
        }
    }, [
        account1
    ]); //eslint-disable-line
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: data1,
        children: props.children
    }));
};


/***/ }),

/***/ 4799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uN": () => (/* binding */ getContract),
/* harmony export */   "dX": () => (/* binding */ getWeb3Obj),
/* harmony export */   "ut": () => (/* binding */ getWeb3ContractObject),
/* harmony export */   "yh": () => (/* binding */ getBalanceOf),
/* harmony export */   "OM": () => (/* binding */ swichNetworkHandler)
/* harmony export */ });
/* unused harmony exports sortAddress, getSigner, getProviderOrSigner, getWeb3Provider, calculateTimeLeft, copyTextByID, addNetworkHandler */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3135);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




function sortAddress(add) {
    const sortAdd = `${add.slice(0, 6)}...${add.slice(add.length - 4)}`;
    return sortAdd;
}
function getSigner(library, account) {
    return library.getSigner(account).connectUnchecked();
}
function getProviderOrSigner(library, account) {
    return account ? getSigner(library, account) : library;
}
function getContract(address, ABI, library, account) {
    return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__.Contract(address, ABI, getProviderOrSigner(library, account));
}
const getWeb3Provider = async ()=>{
    const httpProvider = new Web3.providers.HttpProvider(RPC_URL);
    return httpProvider;
};
const getWeb3Obj = async ()=>{
    const httpProvider = new (web3__WEBPACK_IMPORTED_MODULE_2___default().providers.HttpProvider)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .RPC_URL */ .$G);
    const web3 = await new (web3__WEBPACK_IMPORTED_MODULE_2___default())(httpProvider);
    return web3;
};
const getWeb3ContractObject = async (abi, contractAddress)=>{
    const web3 = await getWeb3Obj();
    const contract = await new web3.eth.Contract(abi, contractAddress);
    return contract;
};
const getBalanceOf = async (abi, address, account)=>{
    try {
        const contract = await getWeb3ContractObject(abi, address);
        const balanceOf = await contract.methods.balanceOf(account).call();
        return balanceOf.toString();
    } catch (error) {
        console.log("ERROR", error);
        return 0;
    }
};
const calculateTimeLeft = (endDate)=>{
    if (endDate) {
        let difference = +new Date(endDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(difference / (1000 * 60 * 60) % 24),
                minutes: Math.floor(difference / 1000 / 60 % 60),
                seconds: Math.floor(difference / 1000 % 60)
            };
        }
        return timeLeft;
    } else {
        return false;
    }
};
function copyTextByID(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */ 
    navigator.clipboard.writeText(copyText.value);
    toast.info(`Copied ${copyText.value}`);
}
const swichNetworkHandler = async ()=>{
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: "0x" + _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTIVE_NETWORK.toString */ .yB.toString(16)
                }
            ]
        });
    } catch (error) {
        console.log("ERROR", error);
        if (error.code === 4902) {
            addNetworkHandler();
        }
    }
};
const addNetworkHandler = async ()=>{
    try {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: _constants__WEBPACK_IMPORTED_MODULE_0__/* .NetworkDetails */ .sr
        });
    } catch (error) {
        console.log("ERROR", error);
    }
};


/***/ }),

/***/ 2793:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_publicSaleStartTimestamp","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURIChanged","type":"event"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOfNFTs","type":"uint256"}],"name":"mintNFT","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOfNFTs","type":"uint256"}],"name":"reserveNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountOfNFTs","type":"uint256"}],"name":"SaleMint","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMAX_NFT_WALLET","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMAX_NFT_WALLET_PRESALE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setNFT_PRICE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setNFT_PRICE_PRESALE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setPublicSaleStartTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"checkIfWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasFinalSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFT_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFT_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFT_WALLET_PRESALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE_PRESALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;