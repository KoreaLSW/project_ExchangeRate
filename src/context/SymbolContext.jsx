import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { selectSymbol } from '../api/exchangeRateApi';

const AuthContext = createContext();

export default function SymbolContext({ children }) {
    const [symbols, setSymbols] = useState([]);

    useEffect(() => {
        selectSymbol().then((res) => {
            setSymbols(() => Object.entries(res.data.symbols));
        });
    }, []);

    return (
        <AuthContext.Provider value={{ symbols }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useSymbolContext() {
    return useContext(AuthContext);
}
