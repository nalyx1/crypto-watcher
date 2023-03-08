import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState, ChangeEventHandler } from "react";

interface FormState {
  token0: string;
  quantidadeToken0: number;
  token1: string;
  quantidadeToken1: number;
  dataCriacao: string;
  status: string;
}

export default function MyForm() {
  const [formState, setFormState] = useState<FormState>({
    token0: "",
    quantidadeToken0: 0,
    token1: "",
    quantidadeToken1: 0,
    dataCriacao: "",
    status: "",
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <FormControl>
        <FormLabel>Token 0</FormLabel>
        <Input
          type="text"
          name="token0"
          value={formState.token0}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Quantidade de Token 0</FormLabel>
        <Input
          type="number"
          name="quantidadeToken0"
          value={formState.quantidadeToken0}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Token 1</FormLabel>
        <Input
          type="text"
          name="token1"
          value={formState.token1}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Quantidade de Token 1</FormLabel>
        <Input
          type="number"
          name="quantidadeToken1"
          value={formState.quantidadeToken1}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Data de criação da pool</FormLabel>
        <Input
          type="date"
          name="dataCriacao"
          value={formState.dataCriacao}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select
          name="status"
          value={formState.status}
          onChange={handleSelectChange}
        >
          <option value="nova">Nova</option>
          <option value="remontada">Remontada</option>
          <option value="fechada">Fechada</option>
        </Select>
      </FormControl>
    </form>
  );
}
