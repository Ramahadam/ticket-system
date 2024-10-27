import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
	const [checkValues, setCheckValues] = useState([]);

	return (
		<FilterContext.Provider value={{ checkValues, setCheckValues }}>
			{children}
		</FilterContext.Provider>
	);
}

function useFilterValues() {
	const context = useContext(FilterContext);

	if (context === undefined)
		throw new Error("Dark mode is used outside the provider");

	return context;
}

export { useFilterValues, FilterProvider };
