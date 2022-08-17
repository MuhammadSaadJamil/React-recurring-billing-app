import React from 'react';
import Form from "react-bootstrap/Form";

function FormInput({type, name, value, onChange, error, errorMessage, label}) {
    return (
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={`Enter Feature ${label}`}
                name={name}
                value={value}
                onChange={onChange}
                className={error ? 'is-invalid' : null}
            />
            {error &&
                <Form.Text className="text-danger">
                    {errorMessage}
                </Form.Text>
            }
        </Form.Group>
    );
}

export default FormInput;