import React, { Fragment } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigateTodashBoard = useNavigate();

    const handleNavigate = () => {
        const allFieldsFilled = Object.values(formik.values).every(value => value.trim() !== '');

        if (allFieldsFilled && formik.isValid) {
            // If all fields are non-empty and the form is valid, navigate to the dashboard
            navigateTodashBoard('/dashboard');
        } else {
            // If any field is empty or the form is not valid, you can handle it accordingly
            console.log("All fields must be filled and the form must be valid.");
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            name: "",
            email: "",
            password: "",
        },

        validationSchema:
            Yup.object({
                username: Yup.string().max(10, "Under 10 characters")
                    .required('This is required field'),
                name: Yup.string().required('This is required field'),
                email: Yup.string().email()
                    .required('This is required field'),
                password: Yup.string().required('This is required field'),
            }),

        onSubmit: (values) => {
            console.log("form submitted", values);
        }
    });

    console.log(formik.errors);
    // console.log(formik.values);

    return (
        <Fragment>
            <div className="main_login">
                <form onSubmit={formik.handleSubmit} className="sub_login">
                    <h1>User Login</h1>
                    <TextField type='text'
                        label="Username"
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur}
                        variant="outlined" />
                    {formik.errors.username && <p className='errors'>{formik.errors.username}</p>}

                    <TextField type='text'
                        label="Name"
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        variant="outlined" />

                    {formik.errors.name && <p className='errors'>{formik.errors.name}</p>}

                    <TextField type='email'
                        label="Email"
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        variant="outlined" />
                    {formik.errors.email && <p className='errors'>{formik.errors.email}</p>}


                    <TextField type='password'
                        label="Password"
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        variant="outlined" />
                    {formik.errors.password && <p className='errors'>{formik.errors.password}</p>}

                    <Button onClick={handleNavigate} variant='contained' type='submit'>Login</Button>
                </form>
            </div>
        </Fragment>
    )
}
