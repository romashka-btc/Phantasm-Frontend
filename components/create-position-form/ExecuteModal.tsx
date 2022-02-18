import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, List, ListItem, ListIcon, Image, useDisclosure, useToast } from "@chakra-ui/react";
import { EditIcon, PlusSquareIcon, LockIcon } from "@chakra-ui/icons";
import { useMoralis } from "react-moralis";

type ExecuteModalTypes = {
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

export const ExecuteModal = ({ isLong, assetAddress, assetSymbol, assetLogo, borrowFactor, stablecoinAddress, stablecoinSymbol, collateralAmount, isInsured }: ExecuteModalTypes) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { Moralis, isAuthenticated, authenticate } = useMoralis();
	const toast = useToast();

	const executePosition = async () => {
		const options = {
			//     contractAddress: "0xe...56",
			//     functionName: "setMessage",
			//     // abi: ABI,
			//     // params: {
			//     //   _newMessage: "Set a Message",
			//     // },
			//   };
		};
		//   const transaction = await Moralis.executeFunction(options);
		//   console.log(transaction.hash)
		//   // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
		handleExecutedToast("This is a Fake Transaction");
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
			<Button onClick={!isAuthenticated ? () => authenticate({ signingMessage: "Sign This Message To Log In And Prove You Hold The Private Keys To This Wallet. This will not cost you any gas." }) : onOpen} width="100%" background="linear-gradient(90deg, #352db8, #ff5ea7)" borderRadius="0.25rem">
				{isAuthenticated ? "Execute Position" : "Connect Wallet"}
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
				<ModalContent background="#161522" border="1px solid" borderColor="white" borderRadius="0.25rem">
					<ModalHeader>Confirm Position</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<List spacing={3} p="12px" fontSize="sm">
							<ListItem>
								<ListIcon as={PlusSquareIcon} color="green.500" />
								<strong>Position Side: </strong> {isLong ? "Long" : "Short"}
							</ListItem>
							<ListItem>
								<ListIcon as={PlusSquareIcon} color="green.500" />
								<strong>{isLong ? "Long" : "Short"} Token: </strong> <Image display="inline" boxSize="1rem" src={assetLogo} /> {assetSymbol}
							</ListItem>
							<ListItem>
								<ListIcon as={LockIcon} color="green.500" />
								<strong>Collateral Amount: </strong> {isLong && <Image display="inline" boxSize="1rem" src={assetLogo} />}
							</ListItem>
							<ListItem>
								<ListIcon as={LockIcon} color="green.500" />
								<strong>Insurance: </strong> {isInsured ? "Yes" : "No"}
							</ListItem>
							{isInsured && (
								<ListItem>
									<ListIcon as={LockIcon} color="green.500" />
									<strong>Available Insurance: </strong> $100
								</ListItem>
							)}
						</List>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" border="1px solid" borderColor="white" borderRadius="0.25rem" mr={3} onClick={onClose}>
							<EditIcon mr="12px" /> Edit
						</Button>
						{isAuthenticated && (
							<Button onClick={executePosition} background="linear-gradient(90deg, #352db8, #ff5ea7)" borderRadius="0.25rem">
								Confirm Transaction
							</Button>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
