import { useState } from "react";
import { Flex, Spacer, Box, Tabs, TabList, Tab, TabPanels, TabPanel, Container } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { MakePositionContainer } from "./create-position-form/MakePositionContainer";

export const MainPage = () => {
	const [isLong, setIsLong] = useState<boolean>(true);
	const [assetAddress, setAssetAddress] = useState<string>("0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"); // WFTM
	const [assetSymbol, setAssetSymbol] = useState<string>("WETH");
	const [assetLogo, setAssetLogo] = useState<string | undefined>("https://etherscan.io/token/images/weth_28.png");
	const [stablecoinAddress, setStablecoinAddress] = useState<string>("0x6B175474E89094C44Da98b954EedeAC495271d0F"); // DAI
	const [stablecoinSymbol, setStablecoinSymbol] = useState<string>("DAI");
	const [collateralAmount, setCollateralAmount] = useState<number>(0);
	const [borrowFactor, setBorrowFactor] = useState<number>(50);
	const [isInsured, setIsInsured] = useState<boolean>(false);

	return (
		<Flex w="100%" marginY="30px" marginX="80px">
			<Box w="30%">
				<Sidebar isLong={isLong} assetAddress={assetAddress} assetSymbol={assetSymbol} stablecoinSymbol={stablecoinSymbol} collateralAmount={collateralAmount} assetLogo={assetLogo} borrowFactor={borrowFactor} setBorrowFactor={setBorrowFactor} isInsured={isInsured} />
			</Box>
			<Spacer />
			<Box w="60%">
				<MakePositionContainer isLong={isLong} setIsLong={setIsLong} assetAddress={assetAddress} setAssetAddress={setAssetAddress} assetSymbol={assetSymbol} setAssetSymbol={setAssetSymbol} assetLogo={assetLogo} setAssetLogo={setAssetLogo} borrowFactor={borrowFactor} setBorrowFactor={setBorrowFactor} stablecoinAddress={stablecoinAddress} setStablecoinAddress={setStablecoinAddress} stablecoinSymbol={stablecoinSymbol} setStablecoinSymbol={setStablecoinSymbol} collateralAmount={collateralAmount} setCollateralAmount={setCollateralAmount} isInsured={isInsured} setIsInsured={setIsInsured} />
			</Box>
		</Flex>
	);
};
