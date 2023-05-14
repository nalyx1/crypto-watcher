import { useRouter } from 'next/navigation';

interface PanelProps {
  capitalProvided?: string;
  assetsGains?: string;
}

export default function Panel({ capitalProvided, assetsGains }: PanelProps) {
  const { push } = useRouter();
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex justify-start flex-col border-2 border-gray-700 p-2 m-2 w-2/4 rounded">
            <h3>capital provided:</h3>${capitalProvided || 0}
          </div>
          <div className="flex justify-end flex-col border-2 border-gray-700 p-2 m-2 w-2/4 rounded">
            <h3>assets gains:</h3>${assetsGains || 0}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => push('/add-position')}
            className="m-auto border-2 border-gray-700 w-28 rounded"
          >
            Add Position
          </button>
        </div>
      </div>
    </>
  );
}
