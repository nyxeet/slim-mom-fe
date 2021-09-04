import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DiaryDateCalendar.module.css';
import { ru } from 'date-fns/locale';

export default function DiaryDateCalendar() {
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisibe] = useState(false);

  const changeDate = inputDate => setDate(inputDate);
  const openCalendar = () => setIsVisibe(true);
  const closeCalendar = () => setIsVisibe(false);

  return (
    <>
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
      <div onClick={openCalendar} className={styles.Calendar}></div>
    </>
  );
}
