import * as yup from 'yup';

export const ownerPet = yup.object().shape({
  name: yup.string().required('*Campo obrigatório'),
  phone_number: yup.string().required('*Campo obrigatório'),
});

export const newPet = yup.object().shape({
  name: yup.string().required('*Campo obrigatório'),
  age: yup.number().required('*Campo obrigatório'),
  type: yup.string().required('*Campo obrigatório'),
  breed: yup.string().required('*Campo obrigatório'),
  owner_id: ownerPet,
});
