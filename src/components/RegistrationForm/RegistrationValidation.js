import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле ввода')
    .min(2, 'Имя должно содержать минимум 2 символа'),
  login: Yup.string()
    .required('Обязательное поле ввода')
    .email('Не корректный email'),
  password: Yup.string()
    .required('Обязательное поле ввода')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});
export default BasicFormSchema;
