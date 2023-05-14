interface CardProps {
  sym?: string;
  gains?: number;
  amount_paid?: number;
  quantity?: number;
  buy_date?: string;
}

export default function Card({
  sym,
  gains,
  amount_paid,
  quantity,
  buy_date
}: CardProps) {
  return (
    <>
      <div className="flex justify-center items-center max-w-3xl w-2/5 m-2">
        <div className="flex flex-col p-2 rounded border-2 w-full border-gray-700">
          <div className="flex justify-between">
            <h3>{sym}</h3>
            <h3 className="ml-auto">{gains} %</h3>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start flex-col">
              <label>amount paid:</label>${amount_paid}
            </div>
            <div className="flex justify-end flex-col">
              <label>quantity:</label>
              {quantity}
            </div>
          </div>

          <div className="flex justify-end">{buy_date}</div>
        </div>
      </div>
    </>
  );
}
