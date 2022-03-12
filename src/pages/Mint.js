import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { ACTIVE_NETWORK, contractAddress } from "../constants";
import { Button } from "../components/atoms/index";
import { useWeb3React } from "@web3-react/core";
import { UserContext } from "../context/User";
import CryptoChipsABI from "../ABI/CryptoChipsABI.json";
import { getWeb3Obj, getContract, swichNetworkHandler } from "../utils";
import { SUPPORTED_WALLETS } from "connectors";
import { toast } from "react-toastify";

const Container = styled.div`
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
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const { account, library, chainId } = useWeb3React();
  const user = useContext(UserContext);
  const mintNFT = async () => {
    if (chainId === ACTIVE_NETWORK) {
      if (user?.saleIsActive) {
        try {
          if (account && count && count !== "") {
            setIsLoading(true);
            const web3 = await getWeb3Obj();
            var balance = await web3.eth.getBalance(account);
            var walletBalance = web3.utils.fromWei(balance.toString());
            const contract = getContract(
              contractAddress,
              CryptoChipsABI,
              library,
              account
            );
            const hasFinalSaleStarted = await contract.hasFinalSaleStarted();
            if (
              Number(user?.totalSupply) + Number(count) <=
              Number(user?.MAX_NFT_SUPPLY)
            ) {
              if (hasFinalSaleStarted) {
                const MAX_NFT_WALLET = await contract.MAX_NFT_WALLET();
                if (
                  Number(user?.balanceOfValue) + Number(count) <=
                  Number(MAX_NFT_WALLET.toString())
                ) {
                  const NFT_PRICE = await contract.NFT_PRICE();
                  const amount = Number(NFT_PRICE.toString()) * Number(count);
                  if (
                    Number(walletBalance) >
                    Number(web3.utils.fromWei(amount.toString()))
                  ) {
                    const tx = await contract.mintNFT(count, {
                      value: amount.toString(),
                      from: account,
                    });
                    await tx.wait();
                    toast.success("Successfully minted");
                    user.getCurrentMintingDetails();
                  } else {
                    toast.error("Insufficient funds");
                  }
                } else {
                  toast.error("Purchase exceeds max allowed per wallet");
                }
              } else {
                const checkIfWhitelisted = await contract.checkIfWhitelisted(
                  account
                );
                if (checkIfWhitelisted) {
                  const MAX_NFT_WALLET_PRESALE =
                    await contract.MAX_NFT_WALLET_PRESALE();

                  if (
                    Number(user?.balanceOfValue) + Number(count) <=
                    Number(MAX_NFT_WALLET_PRESALE.toString())
                  ) {
                    const NFT_PRICE = await contract.NFT_PRICE_PRESALE();
                    const amount = Number(NFT_PRICE.toString()) * Number(count);
                    if (
                      Number(walletBalance) >
                      Number(web3.utils.fromWei(amount.toString()))
                    ) {
                      const tx = await contract.mintNFT(count, {
                        value: amount.toString(),
                        from: account,
                      });
                      await tx.wait();
                      toast.success("Successfully minted");
                      user.getCurrentMintingDetails();
                    } else {
                      toast.error("Insufficient funds");
                    }
                  } else {
                    toast.error("Purchase exceeds max allowed per wallet");
                  }
                } else {
                  toast.error("Address not whitelisted");
                }
              }
            } else {
              toast.error("Minting would exceed max supply");
            }
          } else {
            toast.error("Please select correct data");
          }
        } catch (error) {
          setIsLoading(false);
          toast.error(error.message);
        }
      } else {
        toast.error("Sale must be active to mint NFT");
      }
    } else {
      swichNetworkHandler();
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <div className='text' style={{ fontSize: "64px" }}>
        <h3> MINT</h3>
      </div>

      <Grid container spacing={3} style={{ marginTop: "-65px" }}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <h4>Amount</h4>
          <div
            className='intputfield'
            style={{
              width: "100%",
              border: "2px solid #fff",
              height: "50px",
              display: "flex",
              justifyContent: "start",
            }}
          >
            <p style={{ marginLeft: "10px" }}>
              {Number(user?.nftPrice * count).toFixed(3)}
            </p>
          </div>
        </Grid>

        <Grid item lg={5} md={5} sm={12} xs={12}>
          <h4>
            Quantity (Available NFTs :{" "}
            {Number(user?.MAX_NFT_SUPPLY) - Number(user?.totalSupply)})
          </h4>
          <div
            style={{
              width: "100%",
              border: "2px solid #fff",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={
                isLoading
                  ? {
                      cursor: "not-allowed",
                      background: "0",
                      marginTop: "-10px",
                    }
                  : { background: "0", marginTop: "-10px" }
              }
              disabled={isLoading}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </Button>
            <p>{count}</p>
            <Button
              style={
                isLoading
                  ? {
                      cursor: "not-allowed",
                      background: "0",
                      marginTop: "-10px",
                    }
                  : { background: "0", marginTop: "-10px" }
              }
              disabled={isLoading}
              onClick={() => {
                if (count < user?.MAX_NFT_SUPPLY) {
                  setCount(count + 1);
                }
              }}
            >
              +
            </Button>
          </div>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          {account ? (
            <Button
              italic
              uppercase
              color='#1C1C1C'
              disabled={isLoading}
              style={
                isLoading
                  ? {
                      cursor: "not-allowed",
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                    }
              }
              onClick={() => {
                if (account) {
                  mintNFT();
                } else {
                  user?.connectWallet(SUPPORTED_WALLETS[0].data);
                }
              }}
            >
              Mint {isLoading && "..."}
            </Button>
          ) : (
            <Button
              italic
              uppercase
              color='#1C1C1C'
              fullWidth
              onClick={() => {
                user?.connectWallet(SUPPORTED_WALLETS[0].data);
              }}
              style={{
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Connect
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Mint;
