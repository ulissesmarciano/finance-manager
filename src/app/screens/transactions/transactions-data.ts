import transactionsData from './data/recent-transactions.json';

export const TRANSACTIONS = transactionsData;
export type Transaction = (typeof TRANSACTIONS)[number];
