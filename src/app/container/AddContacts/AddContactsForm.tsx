import TextField from "@mui/material/TextField";
import Buttons from "@/app/components/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApplicationContext } from "@/app/context/communityContext";
import { ReactNode, useState } from "react";

export default function AddContactsForm() {
  const {
    open,
    setOpen,
    setContacts,
    contacts,
    updateContacts,
    editIndex,
    setEditIndex,
    setUpdateContacts,
    contactsList,
    isUpdate,
    setModel,
  } = useApplicationContext();

  const contactsField = {
    display: "grid",
    gridTemplateRows: "auto",
    rowGap: "10px",
    margin: "10px",
    padding: "30px",
  };
  const submitStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    height: "3px",
    alignItems: "center",
    marginTop: "-23px",
    padding: "24px",
  };

  const formik = useFormik({
    initialValues: updateContacts,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .matches(/^[a-zA-Z]+$/, "firstname must only contain letters")
        .min(2, "Too short")
        .max(10, "Too long")
        .required("Required"),
      lastname: Yup.string()
        .matches(/^[a-zA-Z]+$/, "lastname must only contain letters")
        .min(1, "Too short")
        .max(5, "Too long")
        .required("Required"),
      email: Yup.string().email().required("Required"),
      contactnumber: Yup.string()
        .matches(/^\d{10}$/, "Invalid contactnumber")
        .required("Required"),
    }),

    onSubmit: (values) => {
      if (isUpdate) {
        const updateList = contacts.map((el: any) => {
          return el.id == editIndex ? values : el;
        });
        setContacts(updateList);
        setModel(false);
        setEditIndex(-1);
        setUpdateContacts(contactsList);
      } else {
        const addId = { ...values, id: contacts.length + 1 };
        setOpen(false);
        setContacts((prev: any) => [...prev, addId]);
      }
    },
  });

  const { values, handleSubmit, touched, errors, dirty, handleChange } = formik;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={contactsField}>
          <div>
            <TextField
              type="text"
              name="firstname"
              label="First Name"
              value={values.firstname}
              onChange={formik.handleChange}
              error={touched.firstname && Boolean(errors.firstname)}
            />
          </div>{" "}
          <div>
            {" "}
            <TextField
              type="text"
              name="lastname"
              label="Last Name"
              variant="outlined"
              value={values.lastname}
              onChange={formik.handleChange}
              error={touched.lastname && Boolean(errors.lastname)}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={formik.handleChange}
              error={touched.email && Boolean(errors.email)}
            />
          </div>{" "}
          <div>
            {" "}
            <TextField
              type="text"
              name="contactnumber"
              label="Contact Number"
              variant="outlined"
              value={values.contactnumber}
              onChange={formik.handleChange}
              error={touched.contactnumber && Boolean(errors.contactnumber)}
            />
          </div>
        </div>
        <div style={submitStyle}>
          <Buttons
            type="submit"
            variant="contained"
            text={isUpdate ? "update" : "submit"}
          />
        </div>
      </form>
    </>
  );
}
