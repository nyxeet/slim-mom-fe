import React, { useState } from 'react';
import styles from './MainPage.module.css';
import Container from '../../components/Container';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Modal from './../../components/Modal';
import DailyCalorieIntake from './../../components/DailyCalorieIntake';
import dailyOperetions from './../../redux/dailyRate/dailyRateOperations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import getLoader from './../../redux/loader/loader-selectors';

const MainPage = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(modalIsOpen);

  const loader = useSelector(getLoader);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onSubmit = values => {
    localStorage.setItem('userInfo', JSON.stringify(values));
    dispatch(dailyOperetions.onFetchDailyRates(values));
    toggleModal();
  };

  return (
    <div className={styles.background}>
      <Container>
        <DailyCaloriesForm onSubmit={onSubmit} />
      </Container>
      {modalIsOpen && (
        <Modal onClose={toggleModal}>
          <DailyCalorieIntake />
        </Modal>
      )}
      {loader && <Loader />}
    </div>
  );
};

export default MainPage;
