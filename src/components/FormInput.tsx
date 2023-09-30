import { ErrorMessage, useField } from 'formik'

interface Props {
    name: string
    type?: React.HTMLInputTypeAttribute
    required?: boolean
    [x: string]: any
}

export const FormInput = ({ required = false, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <div className="flex-column">
            <input
                className="form-input"
                autoComplete="off"
                aria-autocomplete="none"
                required={required}
                {...field}
                {...props}
            />
            <ErrorMessage
                name={props.name}
                component="small"
                className="error-text"
            />
        </div>
    )
}
