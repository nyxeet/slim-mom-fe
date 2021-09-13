import React, { useState } from 'react';
import Button from './Button';
import classNames from 'classnames';
import styles from './DailyCaloriesForm.module.css';
import { Formik, Field, Form } from 'formik';
import Validation from './DailyValidation';

export default function DailyCaloriesForm({ onSubmit }) {
  return (
    <div className={classNames(styles.FormWrapper)}>
      <h1 className={styles.Title}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <Formik
        initialValues={{
          height: '',
          weight: '',
          age: '',
          newWeight: '',
          bloodGroup: '1',
        }}
        validationSchema={Validation}
        onSubmit={onSubmit}
        render={({ errors, touched, values }) => (
          <Form className={styles.Form}>
            <div className={styles.ColumnWrapper}>
              <div className={styles.ColumnOne}>
                <div className={styles.Wrapper}>
                  <Field name="height" type="text" className={styles.Input} />
                  <label className={styles.Label} htmlFor="height">
                    Рост *
                  </label>
                  {errors.height && touched.height && (
                    <div className={styles.fieldError}>{errors.height}</div>
                  )}
                </div>
                <div className={styles.Wrapper}>
                  <Field className={styles.Input} type="text" name="age" />
                  <label className={styles.Label} htmlFor="age">
                    Возраст *
                  </label>
                  {errors.age && touched.age && (
                    <div className={styles.fieldError}>{errors.age}</div>
                  )}
                </div>
                <div className={styles.Wrapper}>
                  <Field className={styles.Input} type="text" name="weight" />
                  <label className={styles.Label} htmlFor="weight">
                    Текущий вес *
                  </label>
                  {errors.weight && touched.weight && (
                    <div className={styles.fieldError}>{errors.weight}</div>
                  )}
                </div>
              </div>
              <div className={styles.ColumnTwo}>
                <div className={classNames(styles.Wrapper, styles.TheLastOne)}>
                  <Field
                    className={styles.Input}
                    type="text"
                    name="newWeight"
                  />
                  <label className={styles.Label} htmlFor="newWeight">
                    Желаемый вес *
                  </label>
                  {errors.newWeight && touched.newWeight && (
                    <div className={styles.fieldError}>{errors.newWeight}</div>
                  )}
                </div>
                <p className={styles.RadioTitle}>Группа крови *</p>
                <div
                  className={styles.RadioButtons}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <div>
                    <Field
                      type="radio"
                      name="bloodGroup"
                      value="1"
                      checked={values.bloodGroup === '1'}
                      className={styles.CustomRadio}
                      id="first"
                    />

                    <label htmlFor="first">1</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="bloodGroup"
                      value="2"
                      checked={values.bloodGroup === '2'}
                      className={styles.CustomRadio}
                      id="second"
                    />
                    <label htmlFor="second">2</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="bloodGroup"
                      value="3"
                      checked={values.bloodGroup === '3'}
                      className={styles.CustomRadio}
                      id="third"
                    />
                    <label htmlFor="third">3</label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="bloodGroup"
                      value="4"
                      checked={values.bloodGroup === '4'}
                      className={styles.CustomRadio}
                      id="fourth"
                    />
                    <label htmlFor="fourth">4</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(styles.BtnWrapper)}>
              <Button type="submit" active={true}>
                Похудеть
              </Button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
