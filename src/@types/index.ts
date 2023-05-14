export type Position = {
  id?: string | undefined;
  token_id: string;
  token_quantity: number;
  amount_paid: number;
  buy_date: Date;
  user_id: string;
};

export type User = {
  id?: string;
  username: string;
  password: string;
  email: string;
};

export type UserData = {
  id: string;
  email: string;
  username: string;
  tokens_hold: Position[];
  history: [];
};

export type History = {
  id?: string;
  user_id: string;
  data: string;
};

export type CoinGeckoTokenList = [
  {
    id: string;
    symbol: string;
    name: string;
  }
];

export type CoinGeckoTokenListResponse = {
  data: [
    {
      id: string;
      symbol: string;
      name: string;
    }
  ];
};

export type CoinGeckoCoinMarketsResponse = {
  data: [
    {
      id: string;
      symbol: string;
      name: string;
      image: string;
      current_price: number;
    }
  ];
};
