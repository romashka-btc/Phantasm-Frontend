export type InsuranceTypes = {
	isInsured: boolean;
	setIsInsured: React.Dispatch<React.SetStateAction<boolean>>;
	insuranceAvailable: number | null | undefined;
	setInsuranceAvailable: React.Dispatch<React.SetStateAction<number | null | undefined>>;
};
