'use client';
import { PositionsRepository } from '@/services/positions.service';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { positionFormSchema } from '@/schemas/position-form.schema';
import type { CoinGeckoTokenList } from '@/@types';
import useAuthStore from '@/stores/auth.store';
import { useId } from 'react';

const positionsRepository = new PositionsRepository();

export default function PositionForm({
  allTokens
}: {
  allTokens: CoinGeckoTokenList;
}) {
  const { user } = useAuthStore();

  type positionFormProps = z.infer<typeof positionFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<positionFormProps>({
    resolver: zodResolver(positionFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
    defaultValues: {
      user_id: user?.id
    }
  });

  const onSubmit: SubmitHandler<positionFormProps> = (data) =>
    positionsRepository.create(data);

  const id = useId();

  return (
    <>
      <form
        className="flex flex-col w-full p-20 rounded border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select
          {...register('token_id')}
          className="m-1 p-1 rounded"
          placeholder="Selecione uma opção"
          required
        >
          {allTokens &&
            allTokens.map((token) => (
              <option key={token.id} value={token.symbol}>
                {`${token.symbol} - ${token.name}`}
              </option>
            ))}
        </select>
        {errors?.token_id?.message && (
          <p className="text-red-500"> {errors.token_id.message}</p>
        )}

        <input
          {...register('buy_date', { valueAsDate: true })}
          className="m-1 p-1 rounded "
          type="date"
          placeholder="data da compra..."
          required
        />
        {errors?.buy_date?.message && (
          <p className="text-red-500"> {errors.buy_date.message}</p>
        )}

        <input
          {...register('amount_paid', { valueAsNumber: true })}
          className="m-1 p-1 rounded "
          type="number"
          placeholder="valor pago nos tokens..."
          required
        />
        {errors?.amount_paid?.message && (
          <p className="text-red-500"> {errors.amount_paid.message}</p>
        )}

        <input
          {...register('token_quantity', { valueAsNumber: true })}
          className="m-1 p-1 rounded"
          type="number"
          placeholder="quantidade de tokens..."
          required
        />
        {errors?.token_quantity?.message && (
          <p className="text-red-500"> {errors.token_quantity.message}</p>
        )}

        <button className="m-1 p-1 rounded border" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
}
