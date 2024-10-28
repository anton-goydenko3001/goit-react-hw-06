import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";

const phoneRegex = /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(phoneRegex, "Number format: 000-00-00")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.formContainer}>
          <div className={style.inputContainer}>
            <label htmlFor={nameId}>Name</label>
            <Field className={style.inputValue} type="text" name="name" />
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor={phoneId}>Number</label>
            <Field className={style.inputValue} type="tel" name="phone" />
            <ErrorMessage
              className={style.errorMessage}
              name="phone"
              component="span"
            />
          </div>
          <button className={style.addButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
