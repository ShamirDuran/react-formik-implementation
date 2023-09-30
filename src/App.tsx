import { Form, Formik } from 'formik'
import { FormInput } from './components/FormInput'
import * as Yup from 'yup'

const App = () => {
    return (
        <div className="main-container">
            <div className="container centered flex-column shadow-container">
                <h1 style={{ alignSelf: 'center' }}>Formik</h1>

                <Formik
                    initialValues={{
                        username: '',
                        fullname: '',
                        email: '',
                        password: '',
                        repassword: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        fullname: Yup.string().max(
                            60,
                            'Must be 60 characters or less'
                        ),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        repassword: Yup.string()
                            .oneOf([Yup.ref('password')], 'Passwords must match')
                            .required('Required'),
                    })}
                >
                    {(formik) => (
                        <Form
                            style={{ marginTop: '1rem', gap: 12 }}
                            className="flex-column"
                            noValidate
                        >
                            <FormInput
                                name="username"
                                type="text"
                                placeholder="Username*"
                                required
                            />
                            <FormInput
                                name="fullname"
                                type="text"
                                placeholder="Fullname"
                            />
                            <FormInput
                                name="email"
                                type="email"
                                placeholder="Email*"
                                required
                            />
                            <FormInput
                                name="password"
                                type="password"
                                placeholder="Password*"
                                required
                            />
                            <FormInput
                                name="repassword"
                                type="password"
                                placeholder="Confirm password*"
                                required
                            />

                            <button
                                type="submit"
                                className="submit-button"
                                style={{ marginTop: '2rem' }}
                            >
                                Registrar
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default App
