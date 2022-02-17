import { Flex, Box, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { MainPage } from "../components/MainPage";
import { MyPositionsTable } from "../components/my-positions/MyPositionsTable";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>88mph - Phantasm</title>
				<meta name="description" content="Phantasm" />
				<link rel="icon" href="/phantasm-icon.png" />
			</Head>
			<Box mt="10px" backgroundColor="black">
				<Tabs variant="line">
					<TabList pl="10%">
						<Tab>Create Position</Tab>
						<Tab>My Positions</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Flex backgroundColor="black">
								<MainPage />
							</Flex>
						</TabPanel>
						<TabPanel>
							<MyPositionsTable />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</div>
	);
};

export default Home;
