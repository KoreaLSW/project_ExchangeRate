import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar_item}>
                <Link to='/'>
                    <p className={styles.navbar_item_text}>홈</p>
                </Link>
            </li>
            <li className={styles.navbar_item}>
                <Link to='/LatestRates'>
                    <p className={styles.navbar_item_text}>전체 환율 정보</p>
                </Link>
            </li>
            <li className={styles.navbar_item}>
                <Link to='/ConvertCurrency'>
                    <p className={styles.navbar_item_text}>환율 계산기</p>
                </Link>
            </li>
        </ul>
    );
}
