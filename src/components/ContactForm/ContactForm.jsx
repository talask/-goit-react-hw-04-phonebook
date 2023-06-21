import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, DivMyForm, Label } from './ContactForm.styled';
import * as yup from 'yup';
import styled from 'styled-components';

const InputField = styled(Field)`
    outline: none;
    padding: 5px 8px;
    margin-bottom: 10px;
    width: 250px;
    font-size: 18px;
`;

const ErrorField = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`

const initialValues = {
  name: '',
  number: '',
};


const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp  = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const schema = yup.object().shape({
  name: yup.string().required().matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan'),
  number: yup.string().required('Field must not be empty' ).matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').min(10, 'Field must be from 10 to 15 symbols').max(15, 'Field must be from 10 to 15 symbols'),
});

export const ContactForm = ({contactsChange}) => {

    return ( 
      <DivMyForm>
        <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit = {(values, {resetForm}) => {
              
              contactsChange(values);
              resetForm();
            }}
        >
            <Form>
                <Label>
                 Name
                </Label>
                <InputField 
                    type="text"
                    name="name"
                />
                <ErrorField name="name" component="div" />
                <Label>
                    Phone
                </Label>
                <InputField 
                    type="tel"
                    name="number"
                />
                <ErrorField name="number" component="div" />
                <Button type="submit">Add contact</Button>
            </Form>
          </Formik>
        </DivMyForm>
        )
    }

  