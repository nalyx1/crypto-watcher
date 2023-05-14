'use client';
import Card from '@/components/Card/page';
import Wrapper from '@/components/Wrapper';
import Panel from '@/components/Panel/page';
import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/auth.store';
import { UsersRepository } from '@/services/users.service';
import { UserData } from '@/@types';

const usersRepository = new UsersRepository();

export default function Home() {
  const { user } = useAuthStore();
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    async function main() {
      if (user?.id) {
        const { data } = await usersRepository.listUnique(user.id);
        setUserData(data);
      }
    }
    main();
  }, [user]);

  return (
    <>
      <div className="px-[20vw] w-full  min-h-screen">
        <div className="flex justify-center m-auto max-w-3xl">
          <Panel />
        </div>
        <div className="flex flex-wrap justify-center max-w-3xl m-auto">
          {userData &&
            userData.tokens_hold.map((el) => (
              <Card
                key={el.id}
                gains={2}
                amount_paid={el.amount_paid}
                buy_date={el.buy_date.toString()}
                quantity={el.token_quantity}
              />
            ))}
        </div>
      </div>
    </>
  );
}
