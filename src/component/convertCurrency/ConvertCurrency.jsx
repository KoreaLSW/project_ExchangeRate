import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { selectConvertCurrency } from '../../api/exchangeRateApi';
import { useSymbolContext } from '../../context/SymbolContext';
import styles from './ConvertCurrency.module.css';

export default function ConvertCurrency() {
    const { symbols } = useSymbolContext();

    const [fromSymbols, setFromSymbols] = useState('KRW');
    const [toSymbols, setToSymbols] = useState('KRW');
    const [amount, setAmount] = useState('1000');

    const { isLoading, data: convertCurrency } = useQuery(
        ['LatestRates', fromSymbols, toSymbols, amount],
        () => selectConvertCurrency(fromSymbols, toSymbols, amount),
        {
            staleTime: 1000 * 60 * 100,
        }
    );

    const handleFromSymbol = (e) => {
        setFromSymbols(e.target.value);
    };

    const handleToSymbol = (e) => {
        setToSymbols(e.target.value);
    };

    const handleChangeAmount = (e) => {
        if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) {
            setAmount(e.target.value);
        }
    };

    return (
        <div className={styles.convertCurrency}>
            <div className={styles.convertCurrency_from_box}>
                <input
                    className={styles.fromInput}
                    onChange={handleChangeAmount}
                    type='text'
                    value={amount}
                />
                <select
                    className={styles.fromSelect}
                    onChange={handleFromSymbol}
                >
                    {symbols &&
                        symbols.map((value) => {
                            return (
                                <option
                                    key={value[1].code}
                                    value={value[1].code}
                                >
                                    {value[1].krCode}
                                </option>
                            );
                        })}
                </select>
            </div>

            <div className={styles.convertCurrency_to_box}>
                {isLoading ? (
                    <p>loaging...</p>
                ) : (
                    convertCurrency && (
                        <p className={styles.toText}>
                            {convertCurrency.data.result}
                        </p>
                    )
                )}
                <select className={styles.toSelect} onChange={handleToSymbol}>
                    {symbols &&
                        symbols.map((value) => {
                            return (
                                <option
                                    key={value[1].code}
                                    value={value[1].code}
                                >
                                    {value[1].krCode}
                                </option>
                            );
                        })}
                </select>
            </div>
        </div>
    );
}
