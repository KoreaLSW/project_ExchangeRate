import React, { useEffect, useState } from 'react';
import { useSymbolContext } from '../../context/SymbolContext';
import styles from './LatestRatesItem.module.css';

export default function LatestRatesItem({ symbol, amount }) {
    const { symbols } = useSymbolContext();

    const [korSymbols, setKorSymbols] = useState('');

    useEffect(() => {
        if (symbols) {
            setKorSymbols(
                symbols.filter((value) => value[1].code === symbol)[0][1].krCode
            );
        }
    }, [symbols, symbol]);

    return (
        <div className={styles.latestRatesItem_box}>
            <p className={styles.symbol}>{korSymbols && korSymbols}</p>
            <p className={styles.amount}>{amount}</p>
        </div>
    );
}
