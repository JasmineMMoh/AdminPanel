import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
      phone: '',
      country: '',
      city: '',
      tin: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
      companyName: Yup
        .string()
        .max(255)
        .required(
          'Company Name is required'),
         phone: Yup
          .number()
          .max(15)
          .required(
            'Phone number is required'), 
         country: Yup
        .string()
        .max(255)
        .required(
          'Country name is required'),
        tin: Yup
          .number()
          .max(15)
          .required(
            'Tin number is required'),
        trading: Yup
          .number()
          .max(15)
          .required(
            'Trading License number is required'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
      )

    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Register a new Exporter
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Legitimate Exporters Only!
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.companyName && formik.errors.companyName)}
              fullWidth
              helperText={formik.touched.companyName && formik.errors.companyName}
              label="Company Name"
              margin="normal"
              name="companyName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.companyName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="phone"
              value={formik.values.number}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.country && formik.errors.country)}
              fullWidth
              helperText={formik.touched.country && formik.errors.country}
              label="Country"
              margin="normal"
              name="country"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="country"
              value={formik.values.country}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.city && formik.errors.city)}
              fullWidth
              helperText={formik.touched.city && formik.errors.city}
              label="City"
              margin="normal"
              name="City"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="city"
              value={formik.values.city}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.tin && formik.errors.tin)}
              fullWidth
              helperText={formik.touched.tin && formik.errors.tin}
              label="Tin Number"
              margin="normal"
              name="tin"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="tin"
              value={formik.values.tin}
              variant="outlined"
            />
             <TextField
              error={Boolean(formik.touched.trading && formik.errors.trading)}
              fullWidth
              helperText={formik.touched.trading && formik.errors.trading}
              label="Trading License Number"
              margin="normal"
              name="trading"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="trading"
              value={formik.values.trading}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Exporter have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </Box>
          
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
