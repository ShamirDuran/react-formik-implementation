import { FormInput } from './components/FormInput'

const App = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('saved')
    }

    return (
        <div className="main-container">
            <div className="container centered flex-column shadow-container">
                <h1 style={{ alignSelf: 'center' }}>Formik</h1>

                <form
                    style={{ marginTop: '1rem', gap: 12 }}
                    className="flex-column"
                    onChange={handleFormSubmit}
                    noValidate
                >
                    <FormInput name="username" placeholder="Username*" required />
                    <FormInput name="fullname" placeholder="Fullname" />
                    <FormInput
                        name="email"
                        placeholder="Email*"
                        type="email"
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

                    <button className="submit-button" style={{ marginTop: '2rem' }}>
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App
