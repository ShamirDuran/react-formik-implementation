interface Props {
    id: string
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
    value?: string
    required?: boolean
}

export const FormInput = ({
    id,
    placeholder = '',
    type = 'text',
    value = '',
    required = false,
}: Props) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className="form-input"
        />
    )
}
