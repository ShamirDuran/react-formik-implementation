interface Props {
    name: string
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
    value?: string
    required?: boolean
}

export const FormInput = ({
    name,
    placeholder = '',
    type = 'text',
    value = '',
    required = false,
}: Props) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            className="form-input"
        />
    )
}
