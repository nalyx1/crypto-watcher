import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState, ChangeEventHandler } from "react";
import { LiquidityRepository } from "@/repositories/liquidity.repository";
import { HoldRepository } from "@/repositories/hold.repository";

interface FormStateLiquidity {
  token0: string;
  quantidadeToken0: number;
  token1: string;
  quantidadeToken1: number;
  dataCriacao: string;
  status: string;
}

interface FormStateHold {
  token: string;
  token_quantity: number;
  amount_paid: number;
  buy_date: string;
}

interface FormType {
  type: string | undefined;
}

export default function MyForm() {
  const liquidityRepository = new LiquidityRepository();
  const holdRepository = new HoldRepository();

  const [formType, setFormType] = useState<FormType>({
    type: undefined,
  });

  const [formStateLiquidity, setFormStateLiquidity] =
    useState<FormStateLiquidity>({
      token0: "",
      quantidadeToken0: 0,
      token1: "",
      quantidadeToken1: 0,
      dataCriacao: "",
      status: "",
    });

  const [formStateHold, setFormStateHold] = useState<FormStateHold>({
    token: "",
    token_quantity: 0,
    amount_paid: 0,
    buy_date: "",
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    formType.type === "hold"
      ? setFormStateHold((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      : formType.type === "liquidity"
      ? setFormStateLiquidity((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      : null;
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value } = event.target;
    formType.type === "hold"
      ? setFormStateHold((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      : formType.type === "liquidity"
      ? setFormStateLiquidity((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      : null;
  };

  const handleFormTypeSelectChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const { value } = event.target;
    setFormType({
      type: value,
    });
  };

  const createNewLiquidityPair = async () => {
    const result = await liquidityRepository.create(formStateLiquidity);
    console.log(result);
  };

  const createNewHold = async () => {
    const result = await holdRepository.create(formStateHold);
    console.log(result);
  };

  return (
    <Center h="100vh">
      <Box
        bg="#232a38"
        w="1100px"
        borderRadius={"2xl"}
        margin={"8"}
        border={"solid gray 1px"}
        padding={"4"}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault(); // previne o comportamento padrão do formulário
            formType.type === "hold"
              ? createNewHold()
              : formType.type === "liquidity"
              ? createNewLiquidityPair()
              : null;
          }}
        >
          <FormControl>
            <FormLabel>Selecione uma opção</FormLabel>
            <Select onChange={handleFormTypeSelectChange} value={formType.type}>
              <option value="hold">Hold</option>
              <option value="liquidity">Liquidity</option>
            </Select>
          </FormControl>
          {formType.type === "liquidity" ? (
            <Box>
              <FormControl>
                <FormLabel>Token 0</FormLabel>
                <Input
                  type="text"
                  name="token0"
                  value={formStateLiquidity.token0}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantidade de Token 0</FormLabel>
                <Input
                  type="number"
                  name="quantidadeToken0"
                  value={formStateLiquidity.quantidadeToken0}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Token 1</FormLabel>
                <Input
                  type="text"
                  name="token1"
                  value={formStateLiquidity.token1}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantidade de Token 1</FormLabel>
                <Input
                  type="number"
                  name="quantidadeToken1"
                  value={formStateLiquidity.quantidadeToken1}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Data de criação da pool</FormLabel>
                <Input
                  type="date"
                  name="dataCriacao"
                  value={formStateLiquidity.dataCriacao}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={formStateLiquidity.status}
                  onChange={handleSelectChange}
                >
                  <option value="nova">Nova</option>
                  <option value="remontada">Remontada</option>
                  <option value="fechada">Fechada</option>
                </Select>
              </FormControl>
            </Box>
          ) : formType.type === "hold" ? (
            <Box>
              <FormControl>
                <FormLabel>Token</FormLabel>
                <Input
                  type="text"
                  name="token"
                  value={formStateHold.token}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Quantidade de tokens</FormLabel>
                <Input
                  type="number"
                  name="token_quantity"
                  value={formStateHold.token_quantity}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Valor do token</FormLabel>
                <Input
                  type="number"
                  name="amount_paid"
                  value={formStateHold.amount_paid}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Data de compra</FormLabel>
                <Input
                  type="date"
                  name="buy_date"
                  value={formStateHold.buy_date}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Box>
          ) : (
            <></>
          )}
          {formType.type && (
            <Center>
              <Button type="submit" margin={"4"}>
                Enviar
              </Button>
            </Center>
          )}
        </form>
      </Box>
    </Center>
  );
}
