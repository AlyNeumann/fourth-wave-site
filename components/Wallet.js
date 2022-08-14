import React, { useState, useContext, useEffect } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
// import { ethers } from 'ethers';
import { Providers } from "./Providers";
import { Context } from "../context/context";
import { Button } from "@chakra-ui/react";
import lotteryContract from '../blockchain/lottery'
import PricePicker from "./PricePicker";

export default function Wallet(props) {

  const { state, dispatch } = useContext(Context);

  const [account, setAccount] = useState();
  const [web3, setWeb3] = useState();
  const [provider, setProvider] = useState();
  const [network, setNetwork] = useState();
  const [modalClose, setModalClose] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const [contract, setContract] = useState()
  const [lotteryPot, setLotteryPot] = useState();
  const [players, setPlayers] = useState();
  const [lotteryHistory, setLotteryHistory] = useState([]);
  const [lotteryId, setLotteryId] = useState();
  const [randomResult, setRandomResult] = useState();
  const [donated, setDonated] = useState(false);
  const [amount, setAmount] = useState('1000000000000000000');
  const [isOwner, setIsOwner] = useState(false);

  const providerOptions = Providers;

  useEffect(() => {
    if (contract) {
      updateState();
    }
  }, [contract])

  const updateState = () => {
    if (contract) getPot()
    if (contract) getPlayers()
    if (contract) getLotteryId()
    if (lotteryContract) checkRandomness()
    if (lotteryContract) getHistory()
  };

  const getPot = async () => {
    setError("");
    const pot = await state.lotteryContract.methods.getContractBalance().call();
    setLotteryPot(web3.utils.fromWei(pot, "ether"));
    dispatch({
      type: "LOTTERY_POT",
      payload: pot,
    });
  };

  const getPlayers = async () => {
    setError("");
    const players = await state.lotteryContract.methods.getPlayers().call();
    setPlayers(players);
    dispatch({
      type: "LOTTERY_PLAYERS",
      payload: players,
    });
  };

  const getHistory = async (id) => {
    setError("");
    setLotteryHistory([])
    let winners = [];
    for (let i = parseInt(id); i > 0; i--) {
      const winnerAddress = await state.lotteryContract.methods.lotteryHistory(i).call()
      winners.push(winnerAddress)
    }
    winners = winners.slice(1);
    setLotteryHistory(winners)
    dispatch({
      type: "LOTTERY_WINNERS",
      payload: winners,
    });
  };

  const getLotteryId = async () => {
    setError("");
    const lotteryId = await state.lotteryContract.methods.lotteryId().call();
    setLotteryId(lotteryId);
    await getHistory(lotteryId);
  };

  const checkRandomness = async () => {
    setError("");
    const randomResult = await state.lotteryContract.methods.randomResult().call();
    setRandomResult(randomResult);
  };


  const pickWinnerHandler = async () => {
    setError("");
    let address = state.user;
    try {
      await state.lotteryContract.methods.pickWinner().send({
        from: address,
        gas: 300000,
        gasPrice: null,
      });
      setSuccess(`Winner is being chosen....`);
    } catch (err) {
      setError(err.message);
    }
  };

  const payWinnerHandler = async () => {
    setError("");
    setSuccess("");
    let address = state.user;
    try {
      await state.lotteryContract.methods.payWinner().send({
        from: address,
        gas: 300000,
        gasPrice: null,
      });
      const winnerAddress = await contract.methods
        .lotteryHistory(lotteryId)
        .call();
      setSuccess(`And your winner is....${winnerAddress}`);
      updateState();
    } catch (err) {
      setError(err.message);
    }
  };

  const donateHandler = async () => {
    setError("");
    setSuccess("");
    let address = state.user;
    try {
      await state.lotteryContract.methods.donations().send({
        from: address,
        value: amount,
        gas: 300000,
        gasPrice: null,
      });
      setDonated(true);
      setSuccess(`A donation. Nice.`);
    } catch (err) {
      setError(err.message);
      console.log(err.message)
    }
  }

  const handleEnterLottery = async () => {
    let address = state.user;
    try {
      await state.lotteryContract.methods.enter().send({
        from: address,
        value: amount,
        gas: 300000,
        gasPrice: null,
      });
      updateState();
    } catch (err) {
      setError(err.message);
    }
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        theme: {
          background: "rgb(178, 217, 210)",
          main: "rgb(61, 77, 74)",
          secondary: "rgb(87, 125, 118)",
          border: "rgba(38, 117, 103)",
          hover: "rgb(198, 245, 237)",
        },
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      setProvider(provider);

      let web3 = new Web3(provider);

      dispatch({
        type: "WEB3_INSTANCE",
        payload: web3,
      });
      setWeb3(web3);

      let network = await web3.eth.net.getId()
      setNetwork(network);

      let accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
      setIsConnected(true);
      dispatch({
        type: "CONNECTED_WALLET",
        payload: accounts[0],
      });

      if (accounts[0] == process.env.NEXT_PUBLIC_OWNER) {
        setIsOwner(true);
      }

      web3.currentProvider.on('accountsChanged', (newAccount) => {
        setIsConnected(false)
        setAccount(newAccount[0])
        dispatch({
          type: "CONNECTED_WALLET",
          payload: newAccount[0],
        });
      });

      web3.currentProvider.on('disconnect', () => {
        setAccount(undefined)
        setIsConnected(false)
        setIsOwner(false)
        dispatch({
          type: "CONNECTED_WALLET",
          payload: '',
        });
      });

      const lc = lotteryContract(web3);
      setContract(lc);
      dispatch({
        type: "LOTTERY_CONTRACT",
        payload: lc,
      });

    } catch (err) {
      if (err == 'Modal closed by user') {
        setModalClose(true)
      }
      console.log(err);
      setModalClose(true);
      setError(err.message)
    }
  };

  return (
    <div>
      <div>
        <div>
          {(!isConnected && !state.user ) && (
            <Button
              colorScheme="teal"
              variant="ghost"
              size="lg"
              onClick={connectWallet}
            >
              CONNECT
            </Button>
          )}
          {(props.page == 'lottery' && state.user) ?
            <div> <Button colorScheme="teal"
              variant="ghost"
              size="lg"
              onClick={handleEnterLottery}>ENTER</Button>
              <Button colorScheme="teal"
                variant="ghost"
                size="lg"
                onClick={donateHandler}>DONATE</Button></div>
            : ''}
        </div>
        <div>{(isOwner) ? (<div>
          <Button
            colorScheme="teal"
            variant="ghost"
            size="lg"
            onClick={pickWinnerHandler}
          >
            PICK WINNER
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            size="lg"
            onClick={checkRandomness}
          >
            CHECK RANDOMNESS
          </Button>
          <Button
            colorScheme="teal"
            variant="ghost"
            size="lg"
            onClick={payWinnerHandler}
          >
            PAY WINNER
          </Button>
        </div>) : ''}</div>
        {(state.web3 && props.page == 'lottery') ? <PricePicker amount={amount} web3={state.web3} handleAmount={handleAmount} /> : ''}
        <div>{error}</div>
        <div>{(modalClose && !isConnected) ? "Please your connect wallet!" : ""}</div>
        <div>{donated ? 'thanks for your donation' : ''}</div>
      </div>
    </div>
  );
}
