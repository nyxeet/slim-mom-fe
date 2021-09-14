import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
  login: Yup.string()
    .required('Обязательное поле ввода')
    .email('Не корректный email'),
  password: Yup.string().required('Обязательное поле ввода'),
});
export default BasicFormSchema;
