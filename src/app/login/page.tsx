'use client';
import { Alchemy, Network } from 'alchemy-sdk';
import LoginForm from '@/components/LoginForm/page';
import Wrapper from '@/components/Wrapper';

const settings = {
  apiKey: 'e9qYo8yfVgVdaRPxsDqzUEpKNxENIi_8',
  network: Network.ARB_MAINNET
};
const alchemy = new Alchemy(settings);
const ownerAddress = '0xb3f95a8d2fc85fe1ac9f892912246db8631030ec';

export default function Login() {
  async function getTokens() {
    const { tokenBalances } = await alchemy.core.getTokenBalances(ownerAddress);

    const walletTokens = tokenBalances.map((token) => {
      if (token?.tokenBalance) {
        const intValue = parseInt(token.tokenBalance, 16);
        const decimalValue = intValue / Math.pow(10, 18);
        return {
          ...token,
          tokenBalance: decimalValue
        };
      }
    });
  }

  return (
    <Wrapper>
      <LoginForm />
      {/* <button onClick={getTokens}>CLICA AE</button> */}
    </Wrapper>
  );
}
