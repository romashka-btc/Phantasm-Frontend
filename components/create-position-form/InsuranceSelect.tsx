import { Container, Switch, FormControl, FormLabel, Box, Skeleton } from "@chakra-ui/react";
import { InsuranceTypes } from "../../types/Insurance.types";

export const InsuranceSelect = ({ isInsured, setIsInsured }: InsuranceTypes) => {
	return (
		<Container>
			<FormControl display="flex" alignItems="center" marginBottom="16px">
				<FormLabel htmlFor="email-alerts" mb="0">
					Insure With 88mph
				</FormLabel>
				<Switch
					isChecked={isInsured ? true : false}
					onChange={() => {
						if (isInsured) {
							setIsInsured(false);
						} else {
							setIsInsured(true);
						}
					}}
					colorScheme="teal"
				/>
			</FormControl>
			{isInsured && (
				<Box color="white" border="1px solid" borderColor="#161522" borderRadius="0.25rem" padding="12px">
					There is $<Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" /> worth of <strong>yield tokens</strong> to buy to insure your position.
				</Box>
			)}
		</Container>
	);
};
