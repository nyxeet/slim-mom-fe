import React, { useState } from "react";
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm";
import DiaryAddProductFormModal from "../../components/DiaryAddProductForm/DiaryAddProductFormModal";
import DiaryProductList from "../../components/DiaryProductList/DiaryProductList";
import styles from "./DiaryPage.module.css";
import Calendar from "../../components/DiaryDateCalendar/DiaryDateCalendar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import useMedia from "use-media";

const DiaryPage = () => {
  const [state, setState] = useState(false);

  const isWide = useMedia({ minWidth: "768px" });

  const openModal = (event) => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

  return (
    <section className={styles.diarySection}>
      {state && (
        <div className={styles.section}>
          <DiaryAddProductFormModal closeModal={closeModal}>
            <DiaryAddProductForm closeModal={closeModal} />
          </DiaryAddProductFormModal>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.dateAndCalendar}>
          <Calendar />
        </div>

        {isWide && <DiaryAddProductForm closeModal={closeModal} />}

        <DiaryProductList openModalProp={openModal} />
      </div>

      <div className={styles.summary}>
        <RightSideBar />
      </div>
    </section>
  );
};

export default DiaryPage;
