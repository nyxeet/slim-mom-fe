
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './DailyCalorieIntake.module.css';
import dailyRateSelector from '../../redux/dailyRate/dailyRateSelectors';
import Loader from '../../components/Loader';
import getLoader from './../../redux/loader/loader-selectors';
import { registrationLink } from '../../routes';

const DailyCalorieIntake = () => {
   const loader = useSelector(getLoader);
   const calories = useSelector(dailyRateSelector.getCalories);
   const products = useSelector(dailyRateSelector.getProducts);
   const filteredProducts = products.map(product => product.categories[0]).filter((item, index, arr) => arr.indexOf(item) === index)
   console.log(filteredProducts);
   return (
      <div className={styles.wrapper}>
          {loader ? <Loader/> : <><p className={styles.title}>
            Ваша рекомендуемая суточная норма калорий составляет
         </p>
         <div className={styles.container}>
            <p className={styles.caloriesText}>
               <span className={styles.caloriesValue}>{calories}</span> ккал
            </p>
            <p className={styles.productsTitle}>
               Продукты, которые вам не рекомендуется употреблять
            </p>

            <ol className={styles.productsList}>
               {filteredProducts.map((product) => (
                  <li key={product} className={styles.productsItem}>
                     {product}
                  </li>
               ))} 
            </ol>
         <Link to={registrationLink} className={styles.button}>
               Начать худеть
            </Link>
         </div></>}
      </div>
   );
};

export default DailyCalorieIntake;