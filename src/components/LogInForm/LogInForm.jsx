import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import ButtonLoader from '../ButtonLoader/ButtonLoader';
import css from "./LogInForm.module.css";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const validation = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Required field!'),
  password: Yup.string()
    .min(8, 'Not enough symbols!')
    .max(24, 'Too long!')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Requred field!'),
});

const LogInForm = () => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    setLoad(true);
    dispatch(logIn({ ...values }))
      .unwrap()
      .then(() => {
        toast.success('Welcome!', {
          style: {
            border: '1px solid #0d47a1',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#2196f3',
            secondary: '#fff',
          },
        });
        actions.resetForm();
        setLoad(false);
      })
      .catch(() => {
        toast.error('Oops, something go wrong!', {
          style: {
            border: '1px solid #F1041B',
            padding: '16px',
            color: '#111',
          },
          iconTheme: {
            primary: '#F1041B',
            secondary: '#fff',
          },
        });
        setLoad(false);
      });
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[800],
    },
  }));

  return (
    <div className={css.cont}>
      <Grid container>
        <Grid item sm={4} xs={false}></Grid>
        <Grid item sm={4} xs={8}></Grid>
        <Paper>
          <Box m={3} p={2}>
            <Formik
              initialValues={initialValues}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              {props => {
                return (
                  <Form>
                    <Field
                      as={TextField}
                      label="Email"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />

                    <ColorButton variant="contained" type="sumbit" fullWidth>
                      {load ? <ButtonLoader /> : 'Log In'}
                    </ColorButton>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export default LogInForm;