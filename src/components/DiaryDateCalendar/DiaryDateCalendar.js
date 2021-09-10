import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DiaryDateCalendar.module.css';
import { ru } from 'date-fns/locale';

import productsActions from '../../redux/products/products-actions';

export default function DiaryDateCalendar() {
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisibe] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userDate = format(date, 'dd-MM-yyyy');
    dispatch(productsActions.dateValue(userDate));
  }, [date]);

  const changeDate = inputDate => setDate(inputDate);
  const openCalendar = () => setIsVisibe(true);
  const closeCalendar = () => setIsVisibe(false);

  return (
    <section className={styles.Wrapper}>
      <DatePicker
        selected={date}
        onChange={changeDate}
        onSelect={closeCalendar}
        maxDate={new Date()}
        className={styles.Datepicker}
        dateFormat="dd.MM.yyyy"
        onInputClick={openCalendar}
        onClickOutside={closeCalendar}
        open={isVisible}
        locale={ru}
      />
      <div onClick={openCalendar} className={styles.Calendar}>
        <svg
          className={styles.CalendarIcon}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 9h-2v2h2V9zM11 9H9v2h2V9zM7 9H5v2h2V9z" />
          <path d="M17 2h-1V0h-2v2H6V0H4v2H3c-1.11 0-1.99.9-1.99 2L1 18a2 2 0 002 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H3V7h14v11z" />
        </svg>
      </div>
    </section>
  );
}
