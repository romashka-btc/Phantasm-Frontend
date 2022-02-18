import { Button, useToast } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { ExecuteModal } from "./ExecuteModal";

type ExecuteButtonTypes = {
	isLong: boolean;
	assetAddress: string;
	assetSymbol: string;
	assetLogo: string | undefined;
	borrowFactor: number;
	stablecoinAddress: string;
	stablecoinSymbol: string;
	collateralAmount: number;
	isInsured: boolean;
};

export const ExecuteButton = ({ isLong, assetAddress, assetSymbol, assetLogo, borrowFactor, stablecoinAddress, stablecoinSymbol, collateralAmount, isInsured }: ExecuteButtonTypes) => {
	const { Moralis, isAuthenticated, authenticate } = useMoralis();
	const toast = useToast();

	const executePosition = async () => {
		const options = {
			//     contractAddress: "0xe...56",
			//     functionName: "setMessage",
			//     // abi: ABI,
			//     // params: {
			//     //   _newMessage: "Hello Moralis",
			//     // },
			//   };
		};
		//   const transaction = await Moralis.executeFunction(options);
		//   console.log(transaction.hash)
		//   // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
		alert("Doing Transaction");
	};

	const handleExecutedToast = async (hash: string) => {
		if (hash) {
			toast({
				title: "Position Executed!",
				description: "Click To View Transaction",
				status: "success",
				duration: 5000,
				isClosable: true,
				variant: "left-accent",
				position: "bottom-left",
			});
		} else if (!hash) {
			toast({
				title: "Transaction Error",
				description: "Error Making Position",
				status: "error",
				duration: 5000,
				isClosable: true,
				variant: "left-accent",
				position: "bottom-left",
			});
		}
		return;
	};

	return (
		<>
			<Button onClick={isAuthenticated ? () => executePosition : () => authenticate()} width="100%" background="linear-gradient(90deg, #352db8, #ff5ea7)" borderRadius="0.25rem">
				{isAuthenticated ? "Execute Position" : "Connect Wallet"}
			</Button>
			<ExecuteModal isLong={isLong} assetAddress={assetAddress} assetSymbol={assetSymbol} assetLogo={assetLogo} borrowFactor={borrowFactor} stablecoinAddress={stablecoinAddress} stablecoinSymbol={stablecoinSymbol} collateralAmount={collateralAmount} isInsured={isInsured} />
		</>
	);
};
