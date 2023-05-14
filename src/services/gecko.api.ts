import axios from 'axios';
import type {
  CoinGeckoTokenListResponse,
  CoinGeckoCoinMarketsResponse
} from '@/@types';
const API_URL = 'https://api.coingecko.com/api/v3';

export async function listAllGeckoTokens() {
  try {
    const data = await fetch(`${API_URL}/coins/list`);
    return data
  } catch (error) {
    console.log(error);
  }
}

export async function getGeckoTokensPrice(tokensId: string[]) {
  try {
    const data = await fetch(`${API_URL}/coins/markets`);
    // {
    //   params: {
    //     vs_currency: 'usd',
    //     ids: tokensId.toString()
    //   }
    // }
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
