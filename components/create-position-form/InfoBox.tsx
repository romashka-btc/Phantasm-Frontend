import { Container, List, ListItem, ListIcon, Skeleton } from "@chakra-ui/react";
import { CheckCircleIcon, AddIcon, MinusIcon, RepeatIcon } from "@chakra-ui/icons";

type InfoBoxTypes = {
	isLong: boolean;
	collateralAmount: number;
	assetSymbol: string;
	stablecoinSymbol: string;
	isLoadingRates: boolean;
};

export const InfoBox = ({ isLong, collateralAmount, assetSymbol, stablecoinSymbol, isLoadingRates }: InfoBoxTypes) => {
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
					<Skeleton display="inline-block" isLoaded={!isLoadingRates} startColor="#2d2bbc" endColor="#ff5ea7">
						{" "}
						{isLong ? "DAI" : assetSymbol} loan
					</Skeleton>
				</ListItem>
				<ListItem>
					<ListIcon as={RepeatIcon} color="green.500" />
					Swap{" "}
					<Skeleton /* w="42px" height="14px" */ display="inline-block" isLoaded={!isLoadingRates} startColor="#2d2bbc" endColor="#ff5ea7">
						{" "}
						{isLong ? "DAI" : assetSymbol} for{" "}
					</Skeleton>
					<Skeleton /* w="42px" height="14px" */ display="inline-block" isLoaded={!isLoadingRates} startColor="#2d2bbc" endColor="#ff5ea7">
						{" "}
						{isLong ? assetSymbol : "DAI"}
					</Skeleton>
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="green.500" />
					Total Debt:{" "}
					<Skeleton /* w="42px" height="14px" */ display="inline-block" isLoaded={!isLoadingRates} startColor="#2d2bbc" endColor="#ff5ea7">
						{" "}
						{isLong ? "DAI" : assetSymbol}
					</Skeleton>
				</ListItem>
			</List>
		</Container>
	);
};
