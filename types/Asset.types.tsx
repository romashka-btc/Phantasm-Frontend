export type AssetAddressTypes = {
	assetAddress: string;
	setAssetAddress: React.Dispatch<React.SetStateAction<string>>;
};

export type AssetSymbolTypes = {
	assetSymbol: string;
	setAssetSymbol: React.Dispatch<React.SetStateAction<string>>;
	assetLogo: string | undefined;
	setAssetLogo: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type StablecoinTypes = {
	stablecoinAddress: string;
	setStablecoinAddress: React.Dispatch<React.SetStateAction<string>>;
	stablecoinSymbol: string;
	setStablecoinSymbol: React.Dispatch<React.SetStateAction<string>>;
	stablecoinLogo: string | undefined;
	setStablecoinLogo: React.Dispatch<React.SetStateAction<string | undefined>>;
};
