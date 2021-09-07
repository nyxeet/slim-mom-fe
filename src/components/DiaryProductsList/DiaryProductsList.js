import React from 'react';

import styles from './DiaryProductsList.module.css';

const productList = [
  { name: 'apple', weight: 100, ccal: 320 },
  { name: 'пирог', weight: 100, ccal: 320 },
  { name: 'конфета', weight: 100, ccal: 320 },
  { name: 'стул', weight: 100, ccal: 320 },
  { name: 'столешница', weight: 100, ccal: 320 },
  { name: 'картошка', weight: 100, ccal: 320 },
  { name: 'ухо', weight: 100, ccal: 320 },
  { name: 'пиво', weight: 100, ccal: 320 },
  { name: 'водка', weight: 100, ccal: 320 },
  { name: 'хлеб', weight: 100, ccal: 320 },
  { name: 'макарошки', weight: 100, ccal: 320 },
  { name: 'аджика', weight: 100, ccal: 320 },
  { name: 'apple', weight: 100, ccal: 320 },
  { name: 'пирог', weight: 100, ccal: 320 },
  { name: 'конфета', weight: 100, ccal: 320 },
  { name: 'стул', weight: 100, ccal: 320 },
  { name: 'столешница', weight: 100, ccal: 320 },
  { name: 'картошка', weight: 100, ccal: 320 },
  { name: 'ухо', weight: 100, ccal: 320 },
  { name: 'пиво', weight: 100, ccal: 320 },
  { name: 'водка', weight: 100, ccal: 320 },
  { name: 'хлеб', weight: 100, ccal: 320 },
  { name: 'макарошки', weight: 100, ccal: 320 },
  { name: 'аджика', weight: 100, ccal: 320 },
  { name: 'apple', weight: 100, ccal: 320 },
  { name: 'пирог', weight: 100, ccal: 320 },
  { name: 'конфета', weight: 100, ccal: 320 },
  { name: 'стул', weight: 100, ccal: 320 },
  { name: 'столешница', weight: 100, ccal: 320 },
  { name: 'картошка', weight: 100, ccal: 320 },
  { name: 'ухо', weight: 100, ccal: 320 },
  { name: 'пиво', weight: 100, ccal: 320 },
  { name: 'водка', weight: 100, ccal: 320 },
  { name: 'хлеб', weight: 100, ccal: 320 },
  { name: 'макарошки', weight: 100, ccal: 320 },
  { name: 'аджика', weight: 100, ccal: 320 },
];

export default function DiaryProductsList() {
  return (
    <section>
      <div className={styles.Wrapper}>
        <ul className={styles.List}>
          {productList.map(({ name, weight, ccal }) => (
            <li className={styles.ListItem} key={name}>
              <p className={styles.Name}>{name}</p>
              <p className={styles.Weight}>{weight} г</p>
              <p className={styles.Ccal}>{ccal} ккал</p>
              <p className={styles.CloseIconWrapper}>
                <svg
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.CloseSVG}
                >
                  <path d="M1 1l12 12M1 13L13 1" stroke-width="2" />
                </svg>
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.HiddenBar}></div>
      </div>
    </section>
  );
}
