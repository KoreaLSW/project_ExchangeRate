import React, { useEffect, useState } from 'react';
import { useSymbolContext } from '../../context/SymbolContext';
import { useQuery } from '@tanstack/react-query';
import { selectLatestRates } from '../../api/exchangeRateApi';
import LatestRatesItem from './LatestRatesItem';
import styles from './LatestRates.module.css';

export default function LatestRates() {
    const { symbols } = useSymbolContext();

    const [arrlatestRates, setArrlatestRates] = useState([]);
    const [baseSymbols, setBaseSymbols] = useState('KRW');
    const [amount, setAmount] = useState('1000');

    const { isLoading, data: LatestRates } = useQuery(
        ['LatestRates', baseSymbols, amount],
        () => selectLatestRates(baseSymbols, amount),
        {
            staleTime: 1000 * 60 * 100,
        }
    );

    const handleChangeSymbol = (e) => {
        setBaseSymbols(e.target.value);
    };

    const handleChangeAmount = (e) => {
        if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) {
            setAmount(e.target.value);
        }
    };

    useEffect(() => {
        LatestRates &&
            setArrlatestRates(() => Object.entries(LatestRates.data.rates));
    }, [LatestRates]);

    return (
        <div className={styles.latestRates}>
            <div className={styles.latestRates_box}>
                <input
                    className={styles.input}
                    onChange={handleChangeAmount}
                    type='text'
                    value={amount}
                />
                <select className={styles.select} onChange={handleChangeSymbol}>
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
            <ul className={styles.latestRates_list}>
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    arrlatestRates &&
                    arrlatestRates.map((value) => {
                        return (
                            <li
                                className={styles.latestRates_item}
                                key={value[0]}
                            >
                                <LatestRatesItem
                                    symbol={value[0]}
                                    amount={value[1]}
                                />
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
}
