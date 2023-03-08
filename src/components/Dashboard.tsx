import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Router from "next/router";

export default function MyTable() {
  return (
    <Tabs>
      <TabList>
        <Tab>all</Tab>
        <Tab>hold</Tab>
        <Tab>liquidity</Tab>
        <IconButton
          aria-label="add"
          icon={<AddIcon />}
          variant="ghost"
          ml={"auto"}
          onClick={() => Router.push("/liquidity-pair")}
        />
      </TabList>

      <TabPanels>
        <TabPanel>
          <Table>
            <Thead>
              <Tr>
                <Th>token</Th>
                <Th>data criada</Th>
              </Tr>
            </Thead>
            <Tbody>{/* colocar dados da primeira aba aqui */}</Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table>
            <Thead>
              <Tr>
                <Th>token</Th>
                <Th>data criada</Th>
              </Tr>
            </Thead>
            <Tbody>{/* colocar dados da segunda aba aqui */}</Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table>
            <Thead>
              <Tr>
                <Th>token 1</Th>
                <Th>token 2</Th>
                <Th>data criada</Th>
              </Tr>
            </Thead>
            <Tbody>{/* colocar dados da terceira aba aqui */}</Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
