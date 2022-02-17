import { useState, ReactNode, useEffect } from "react";
import { useMoralis, useChain } from "react-moralis";
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useToast } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, UnlockIcon, LockIcon, ViewIcon, LinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NavLogo from "../public/phantasm-logo.png";

const Links = ["Earn", "Yield", "Phantasm"];

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { Moralis, user, isAuthenticated, logout, authenticate, web3, enableWeb3, isWeb3Enabled } = useMoralis();
	const { switchNetwork, chainId, chain } = useChain();
	const toast = useToast();

	const handleAuthenticate = async () => {
		if (user) {
			await logout();
			handleAuthToast(false);
		} else {
			await authenticate({ signingMessage: "Sign This Message To Log In And Prove You Hold The Private Keys To This Wallet. This will not cost you any gas." });
			handleAuthToast(true);
		}
	};

	const handleAuthToast = async (loggingIn: boolean) => {
		if (loggingIn) {
			toast({
				title: "Logged In",
				description: "You have successfully logged into Phantasm",
				status: "success",
				duration: 5000,
				isClosable: true,
				variant: "left-accent",
				position: "bottom-left",
			});
		} else if (!loggingIn) {
			toast({
				title: "Logged Out!",
				description: "You have successfully logged out of Phantasm",
				status: "info",
				duration: 5000,
				isClosable: true,
				variant: "left-accent",
				position: "bottom-left",
			});
		}
		return;
	};

	useEffect(() => {
		enableWeb3();
	}, []);

	return (
		<>
			<Box background="black" /* bg={useColorModeValue("gray.100", "gray.900")} */ px={28} borderBottom="1px solid #161522">
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
					<HStack spacing={8} alignItems={"center"}>
						<Box>
							<Image src={NavLogo} width={50} height={50} />
						</Box>
						<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						{chain && (
							<Button variant={"ghost"} size={"md"} mr={4} leftIcon={<LinkIcon />} border="1px solid" borderColor="#161522">
								Connected To {chain.name}
							</Button>
						)}
						{!isAuthenticated && (
							<Button onClick={handleAuthenticate} variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4} leftIcon={<UnlockIcon />}>
								Connect Wallet
							</Button>
						)}
						{isAuthenticated && (
							<Menu>
								<MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
									<Avatar size={"sm"} />
								</MenuButton>
								<MenuList>
									<MenuItem>
										<ViewIcon mr={2} />
										My Positions
									</MenuItem>
									<MenuDivider />
									<MenuItem onClick={logout}>
										<LockIcon mr={2} />
										Logout
									</MenuItem>
								</MenuList>
							</Menu>
						)}
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
};
