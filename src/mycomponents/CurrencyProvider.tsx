import { createContext, useState, useContext } from "react";

const currencyRates: { [key: string]: [number, string] } = {
  USD: [1, "$"],
  EUR: [0.9, "€"],
  INR: [83.89, "₹"],
};
interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  getCurrencyDetails: () => [number, string];
}
export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);
export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrency] = useState<string>("USD");

  const getCurrencyDetails = (): [number, string] => {
    return currencyRates[currency];
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, getCurrencyDetails }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
