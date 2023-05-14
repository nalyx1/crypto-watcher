import { CoinGeckoTokenList } from '@/@types';
import PositionForm from '@/components/PositionForm/page';
import Wrapper from '@/components/Wrapper';
import { listAllGeckoTokens } from '@/services/gecko.api';

export default async function AddPosition() {
  const data = await listAllGeckoTokens();

  const allTokens: CoinGeckoTokenList = await data?.json();

  return (
    <>
      {data && data.status === 200 ? (
        <Wrapper>
          <div className="flex justify-center items-center my-auto min-h-screen w-2/4">
            <PositionForm allTokens={allTokens} />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <h1>Error fetching data</h1>
        </Wrapper>
      )}
    </>
  );
}
