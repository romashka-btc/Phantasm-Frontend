import { Container, List, ListItem, ListIcon, Skeleton } from "@chakra-ui/react";
import { CheckCircleIcon, AddIcon, MinusIcon, RepeatIcon } from "@chakra-ui/icons";

type InfoBoxTypes = {
	isLong: boolean;
	collateralAmount: number;
	assetSymbol: string;
	stablecoinSymbol: string;
};

export const InfoBox = ({ isLong, collateralAmount, assetSymbol, stablecoinSymbol }: InfoBoxTypes) => {
	return (
		<Container>
			<List spacing={3} border="1px solid" borderColor="#161522" borderRadius="0.25rem" p="12px" fontSize="sm">
				<ListItem>
					<ListIcon as={MinusIcon} color="green.500" />
					{collateralAmount}
					{isLong ? assetSymbol : stablecoinSymbol} collateral deposit
				</ListItem>
				<ListItem>
					<ListIcon as={AddIcon} color="green.500" />
					<Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" /> {isLong ? "DAI" : assetSymbol} loan
				</ListItem>
				<ListItem>
					<ListIcon as={RepeatIcon} color="green.500" />
					Swap <Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" /> {isLong ? "DAI" : assetSymbol} for <Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" /> {isLong ? assetSymbol : "DAI"}
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="green.500" />
					Total Debt: <Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" /> {isLong ? "DAI" : assetSymbol}
				</ListItem>
			</List>
		</Container>
	);
};
