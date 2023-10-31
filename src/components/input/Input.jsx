import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import { TextField,Button } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().min(3).max(32).required(),
  
  number: yup.string().min(3).max(14).required(),
});

export const Input = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values, {resetForm}) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        return Notiflix.Notify.failure(`${values.name} is already in contacts`);
      }
      dispatch(addContact(values));
      resetForm();
    },
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{mb:2}}
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          sx={{mb:2}}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     validationSchema={schema}
  //     onSubmit={handleFormSubmit}
  //   >
  //     <FormWrapper>
  //       <FormInput
  //         type="text"
  //         name="name"
  //         placeholder="name"
  //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       />
  //       <Error name="name" component="div" />
  //       <FormInput
  //         type="tel"
  //         name="number"
  //         placeholder="number"
  //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       />
  //       <Error name="number" component="div" />
  //       <Button type="submit">Add to contacts</Button>
  //     </FormWrapper>
  //   </Formik>
  // );
};

