import React, { useState } from 'react';
import Button from './../Button';
import classNames from 'classnames';

import styles from './CalculatorCalorieForm.module.css';
import Modal from './../Modal';
import DailyCalorieIntake from './../DailyCalorieIntake';

export default function DailyCaloriesForm({ onSubmit }) {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('1');

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'height':
        setHeight(value);
        break;

      case 'age':
        setAge(value);
        break;

      case 'weight':
        setWeight(value);
        break;

      case 'desiredWeight':
        setDesiredWeight(value);
        break;

      default:
        break;
    }

    console.log(name, value);
  };

  const onChangeRadio = e => {
    setBloodType(e.target.value);
  };

  // todo
  const onSubmitForm = event => {
    event.preventDefault();
    onSubmit({
      weight,
      age,
      height,
      newWeight: desiredWeight,
      bloodGroup: bloodType,
    });
    clearForm();
  };

  // todo
  const clearForm = () => {
    setHeight('');
    setAge('');
    setWeight('');
    setDesiredWeight('');
    setBloodType('1');
  };

  return (
    <div className={classNames(styles.FormWrapper)}>
      <h1 className={styles.Title}>Узнай свою суточную норму калорий</h1>
      <form onSubmit={onSubmitForm} className={styles.Form} id="calculatorForm">
        <div className={styles.ColumnWrapper}>
          <div className={styles.ColumnOne}>
            <div className={styles.Wrapper}>
              <input
                className={styles.Input}
                type="text"
                name="height"
                value={height}
                onChange={onChangeInput}
                autoComplete="off"
                placeholder=" "
                id={height}
              ></input>
              <label className={styles.Label} htmlFor={height}>
                Рост *
              </label>
            </div>
            <div className={styles.Wrapper}>
              <input
                className={styles.Input}
                type="text"
                name="age"
                value={age}
                onChange={onChangeInput}
                autoComplete="off"
                placeholder=" "
                id={age}
              ></input>
              <label className={styles.Label} htmlFor={age}>
                Возраст *
              </label>
            </div>
            <div className={styles.Wrapper}>
              <input
                className={styles.Input}
                type="text"
                name="weight"
                value={weight}
                onChange={onChangeInput}
                autoComplete="off"
                placeholder=" "
                id={weight}
              ></input>
              <label className={styles.Label} htmlFor={weight}>
                Текущий вес *
              </label>
            </div>
          </div>
          <div className={styles.ColumnTwo}>
            <div className={classNames(styles.Wrapper, styles.TheLastOne)}>
              <input
                className={styles.Input}
                type="text"
                name="desiredWeight"
                value={desiredWeight}
                onChange={onChangeInput}
                autoComplete="off"
                placeholder=" "
                id={desiredWeight}
              ></input>
              <label className={styles.Label} htmlFor={desiredWeight}>
                Желаемый вес *
              </label>
            </div>
            <p className={styles.RadioTitle}>Группа крови *</p>
            <div className={styles.RadioButtons}>
              <div>
                <input
                  className={styles.CustomRadio}
                  type="radio"
                  value="1"
                  checked={bloodType === '1'}
                  onChange={onChangeRadio}
                  id="first"
                />
                <label htmlFor="first">1</label>
              </div>
              <div>
                <input
                  className={styles.CustomRadio}
                  type="radio"
                  value="2"
                  checked={bloodType === '2'}
                  onChange={onChangeRadio}
                  id="second"
                />
                <label htmlFor="second">2</label>
              </div>
              <div>
                <input
                  className={styles.CustomRadio}
                  type="radio"
                  value="3"
                  checked={bloodType === '3'}
                  onChange={onChangeRadio}
                  id="third"
                />
                <label htmlFor="third">3</label>
              </div>
              <div>
                <input
                  className={styles.CustomRadio}
                  type="radio"
                  value="4"
                  checked={bloodType === '4'}
                  onChange={onChangeRadio}
                  id="fourth"
                />
                <label htmlFor="fourth">4</label>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className={classNames(styles.BtnWrapper)}>
        <Button
          type="submit"
          active={true}
          form="calculatorForm"
          withoutLink={true}
        >
          Похудеть
        </Button>
      </div>
    </div>
  );
}
