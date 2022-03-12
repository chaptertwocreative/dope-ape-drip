"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3135);
/* harmony import */ var _components_atoms_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9885);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2395);
/* harmony import */ var _ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2793);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4799);
/* harmony import */ var connectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7404);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);












const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin-top: 50px;
  min-height: 200px;

  intputfield {
    width: 100%;
    border: 1px solid #fff;
  }
  text {
    font-size: 30px;
  }
`;
function Mint() {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { account , library , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();
    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_User__WEBPACK_IMPORTED_MODULE_7__/* .UserContext */ .S);
    const mintNFT = async ()=>{
        if (chainId === _constants__WEBPACK_IMPORTED_MODULE_4__/* .ACTIVE_NETWORK */ .yB) {
            if (user?.saleIsActive) {
                try {
                    if (account && count && count !== "") {
                        setIsLoading(true);
                        const web3 = await (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getWeb3Obj */ .dX)();
                        var balance = await web3.eth.getBalance(account);
                        var walletBalance = web3.utils.fromWei(balance.toString());
                        const contract = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getContract */ .uN)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .contractAddress */ .iF, _ABI_CryptoChipsABI_json__WEBPACK_IMPORTED_MODULE_8__, library, account);
                        const hasFinalSaleStarted = await contract.hasFinalSaleStarted();
                        if (Number(user?.totalSupply) + Number(count) <= Number(user?.MAX_NFT_SUPPLY)) {
                            if (hasFinalSaleStarted) {
                                const MAX_NFT_WALLET = await contract.MAX_NFT_WALLET();
                                if (Number(user?.balanceOfValue) + Number(count) <= Number(MAX_NFT_WALLET.toString())) {
                                    const NFT_PRICE = await contract.NFT_PRICE();
                                    const amount = Number(NFT_PRICE.toString()) * Number(count);
                                    if (Number(walletBalance) > Number(web3.utils.fromWei(amount.toString()))) {
                                        const tx = await contract.mintNFT(count, {
                                            value: amount.toString(),
                                            from: account
                                        });
                                        await tx.wait();
                                        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success("Successfully minted");
                                        user.getCurrentMintingDetails();
                                    } else {
                                        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Insufficient funds");
                                    }
                                } else {
                                    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Purchase exceeds max allowed per wallet");
                                }
                            } else {
                                const checkIfWhitelisted = await contract.checkIfWhitelisted(account);
                                if (checkIfWhitelisted) {
                                    const MAX_NFT_WALLET_PRESALE = await contract.MAX_NFT_WALLET_PRESALE();
                                    if (Number(user?.balanceOfValue) + Number(count) <= Number(MAX_NFT_WALLET_PRESALE.toString())) {
                                        const NFT_PRICE = await contract.NFT_PRICE_PRESALE();
                                        const amount = Number(NFT_PRICE.toString()) * Number(count);
                                        if (Number(walletBalance) > Number(web3.utils.fromWei(amount.toString()))) {
                                            const tx = await contract.mintNFT(count, {
                                                value: amount.toString(),
                                                from: account
                                            });
                                            await tx.wait();
                                            react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success("Successfully minted");
                                            user.getCurrentMintingDetails();
                                        } else {
                                            react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Insufficient funds");
                                        }
                                    } else {
                                        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Purchase exceeds max allowed per wallet");
                                    }
                                } else {
                                    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Address not whitelisted");
                                }
                            }
                        } else {
                            react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Minting would exceed max supply");
                        }
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Please select correct data");
                    }
                } catch (error) {
                    setIsLoading(false);
                    react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(error.message);
                }
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error("Sale must be active to mint NFT");
            }
        } else {
            (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .swichNetworkHandler */ .OM)();
        }
        setIsLoading(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text",
                style: {
                    fontSize: "64px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: " MINT"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 3,
                style: {
                    marginTop: "-65px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        lg: 5,
                        md: 5,
                        sm: 12,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Amount"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "intputfield",
                                style: {
                                    width: "100%",
                                    border: "2px solid #fff",
                                    height: "50px",
                                    display: "flex",
                                    justifyContent: "start"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: Number(user?.nftPrice * count).toFixed(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        lg: 5,
                        md: 5,
                        sm: 12,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    "Quantity (Available NFTs :",
                                    " ",
                                    Number(user?.MAX_NFT_SUPPLY) - Number(user?.totalSupply),
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    border: "2px solid #fff",
                                    height: "50px",
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_index__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                        style: isLoading ? {
                                            cursor: "not-allowed",
                                            background: "0",
                                            marginTop: "-10px"
                                        } : {
                                            background: "0",
                                            marginTop: "-10px"
                                        },
                                        disabled: isLoading,
                                        onClick: ()=>{
                                            if (count > 1) {
                                                setCount(count - 1);
                                            }
                                        },
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: count
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_index__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                        style: isLoading ? {
                                            cursor: "not-allowed",
                                            background: "0",
                                            marginTop: "-10px"
                                        } : {
                                            background: "0",
                                            marginTop: "-10px"
                                        },
                                        disabled: isLoading,
                                        onClick: ()=>{
                                            if (count < user?.MAX_NFT_SUPPLY) {
                                                setCount(count + 1);
                                            }
                                        },
                                        children: "+"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        lg: 2,
                        md: 2,
                        sm: 12,
                        xs: 12,
                        style: {
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "end"
                        },
                        children: account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_atoms_index__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                            italic: true,
                            uppercase: true,
                            color: "#1C1C1C",
                            disabled: isLoading,
                            style: isLoading ? {
                                cursor: "not-allowed",
                                fontSize: "18px",
                                display: "flex",
                                justifyContent: "center"
                            } : {
                                fontSize: "18px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            onClick: ()=>{
                                if (account) {
                                    mintNFT();
                                } else {
                                    user?.connectWallet(connectors__WEBPACK_IMPORTED_MODULE_10__/* .SUPPORTED_WALLETS[0].data */ .Vp[0].data);
                                }
                            },
                            children: [
                                "Mint ",
                                isLoading && "..."
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_index__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                            italic: true,
                            uppercase: true,
                            color: "#1C1C1C",
                            fullWidth: true,
                            onClick: ()=>{
                                user?.connectWallet(connectors__WEBPACK_IMPORTED_MODULE_10__/* .SUPPORTED_WALLETS[0].data */ .Vp[0].data);
                            },
                            style: {
                                fontSize: "18px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: "Connect"
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mint);


/***/ })

};
;