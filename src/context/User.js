import React, { createContext, useEffect, useState } from "react";
import { injected, SUPPORTED_WALLETS } from "../connectors";
import { useWeb3React } from "@web3-react/core";
import { ACTIVE_NETWORK } from "../constants";
import {
  getBalanceOf,
  getContract,
  getWeb3ContractObject,
  getWeb3Obj,
  swichNetworkHandler,
} from "../utils";
import { contractAddress } from "../constants";
import CryptoChipsABI from "../ABI/CryptoChipsABI.json";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem("userAddress", userAddress);
  } else {
    sessionStorage.removeItem("userAddress");
  }
};

export default function AuthProvider(props) {
  const { activate, account, library, deactivate, chainId } = useWeb3React();
  const [nftPrice, setNftPrice] = useState(0);
  const [MAX_NFT_SUPPLY, setMAX_NFT_SUPPLY] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [balanceOfValue, setBalanceOfValue] = useState(0);
  const [adminWalletAddress, setAdminWalletAddress] = useState("");
  const [userNFTList, setUserNFTList] = useState([]);
  const [saleIsActive, setsaleIsActive] = useState(false);
  let data = {
    nftPrice,
    saleIsActive,
    balanceOfValue,
    adminWalletAddress,
    MAX_NFT_SUPPLY,
    totalSupply,
    userNFTList,
    getCurrentMintingDetails: () => getCurrentMintingDetails(),
    updateUser: (account) => {
      setSession(account);
    },
    connectWallet: (data) => connectWalletHandler(data),
  };

  const connectWalletHandler = (data) => {
    try {
      const connector = data.connector;

      if (connector && connector.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined;
      }

      activate(connector, undefined, true).catch((error) => {
        if (error) {
          toast.error(JSON.stringify(error.message));
          window.sessionStorage.removeItem("walletName");
          activate(connector);
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const userNFTListHadler = async (balanceOf, cancelTokenSource) => {
    setUserNFTList([]);
    const contract = getContract(
      contractAddress,
      CryptoChipsABI,
      library,
      account
    );

    try {
      for (let i = 0; i < balanceOf; i++) {
        const id = await contract.tokenOfOwnerByIndex(account, i);
        const filter = await contract.tokenURI(id.toString());
        const res = await axios.get(filter, {
          cancelToken: cancelTokenSource && cancelTokenSource.token,
        });
        if (res.status === 200) {
          setUserNFTList((prev) => [
            ...prev,
            { id: id.toString(), nfdData: res.data },
          ]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    if (balanceOfValue > 0) {
      // userNFTListHadler(balanceOfValue, cancelTokenSource);
    }
    return () => {
      cancelTokenSource.cancel();
    };
  }, [balanceOfValue, account]); //eslint-disable-line

  const getContractDetails = async () => {
    try {
      const web3 = await getWeb3Obj();
      const contractObj = await getWeb3ContractObject(
        CryptoChipsABI,
        contractAddress
      );
      const adminAccount = await contractObj.methods.owner().call();
      setAdminWalletAddress(adminAccount);
      const hasFinalSaleStarted = await contractObj.methods
        .hasFinalSaleStarted()
        .call();

      if (hasFinalSaleStarted) {
        const NFT_PRICE = await contractObj.methods.NFT_PRICE().call();
        const getNFTPrice = await web3.utils.fromWei(NFT_PRICE.toString());
        setNftPrice(getNFTPrice);
      } else {
        const RESERVE_PRICE = await contractObj.methods
          .NFT_PRICE_PRESALE()
          .call();
        const getRESERVE_PRICE = await web3.utils.fromWei(
          RESERVE_PRICE.toString()
        );
        setNftPrice(getRESERVE_PRICE);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    if (account) {
      getBalanceOfFun();
    }
  }, [account]); //eslint-disable-line

  async function getBalanceOfFun() {
    setBalanceOfValue(
      await getBalanceOf(CryptoChipsABI, contractAddress, account)
    );
  }

  const getCurrentMintingDetails = async () => {
    try {
      const contractObj = await getWeb3ContractObject(
        CryptoChipsABI,
        contractAddress
      );
      if (account) {
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

  useEffect(() => {
    getContractDetails();
    getCurrentMintingDetails();
  }, []); //eslint-disable-line

  useEffect(() => {
    if (account && chainId) {
      if (chainId !== ACTIVE_NETWORK) {
        if (window.ethereum) {
          swichNetworkHandler();
        }
      }
    }
  }, [chainId, account]); //eslint-disable-line

  // useEffect(() => {
  //   const userAddress = window.sessionStorage.getItem("userAddress");
  //   if (userAddress) {
  //     data.connectWallet();
  //   }
  // }, []); //eslint-disable-line

  useEffect(() => {
    if (window.sessionStorage.getItem("walletName")) {
      const selectectWalletDetails = SUPPORTED_WALLETS.filter(
        (data) => data.name === window.sessionStorage.getItem("walletName")
      );
      if (selectectWalletDetails[0]?.data) {
        connectWalletHandler(selectectWalletDetails[0].data);
      }
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    data.updateUser(account);
  }, [account]); //eslint-disable-line

  useEffect(() => {
    if (!account) {
      deactivate();
    }
  }, [account]); //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
