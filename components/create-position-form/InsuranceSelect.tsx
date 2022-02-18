import { Container, Switch, FormControl, FormLabel, Box, Skeleton, List, ListItem, ListIcon } from "@chakra-ui/react";
import { InsuranceTypes } from "../../types/Insurance.types";
import { LockIcon, PlusSquareIcon } from "@chakra-ui/icons";

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
				<List spacing={3} border="1px solid" borderColor="#161522" borderRadius="0.25rem" p="12px" fontSize="sm">
					<ListItem>
						<ListIcon as={PlusSquareIcon} color="green.500" />
						<strong>Total Borrowings:</strong> $ <Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" />
					</ListItem>
					<ListItem>
						<ListIcon as={LockIcon} color="green.500" />
						<strong>Available Insurance:</strong> $ <Skeleton w="42px" display="inline-block" height="14px" startColor="#2d2bbc" endColor="#ff5ea7" />
					</ListItem>
				</List>
			)}
		</Container>
	);
};
