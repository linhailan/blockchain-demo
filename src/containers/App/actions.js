import * as actionTypes from './actionTypes';

export const addBlock = block => ({
    type: actionTypes.BLOCK_ADD,
    payload: block
});

export const addMiner = miner => ({
    type: actionTypes.MINER_ADD,
    payload: miner
});

export const newMinerFlag = () => ({
    type: actionTypes.MINER_NEW_FLAG
});

export const addInvestor = investor => ({
    type: actionTypes.INVESTOR_ADD,
    payload: investor
});

export const newInvestorFlag = () => ({
    type: actionTypes.INVESTOR_NEW_FLAG
});

export const resetInvestors = investors => ({
    type: actionTypes.INVESTORS_RESET,
    payload: investors
});

export const addTransaction = transaction => ({
    type: actionTypes.TRANSACTION_ADD,
    payload: transaction
});

export const delTransaction = hash => ({
    type: actionTypes.TRANSACTION_DEL,
    payload: hash
});

export const delTransactionBatch = hashes => ({
    type: actionTypes.TRANSACTION_DEL_BATCH,
    payload: hashes
});