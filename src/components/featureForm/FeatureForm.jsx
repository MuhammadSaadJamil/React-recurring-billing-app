import React from 'react';
import './featureForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {updateForm, postFeature} from "./helper";

function FeatureForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        unit_price: null,
        max_unit_limit: null
    });

    const [errors, setErrors] = useState({
        name: false,
        code: false,
        unit_price: false,
        max_unit_limit: false
    });

    const submit = (e) => {
        e.preventDefault();
        setErrors({
            name: !formData.name || errors.name,
            code: !formData.code || errors.code,
            unit_price: !formData.unit_price || errors.unit_price,
            max_unit_limit: !formData.max_unit_limit || errors.max_unit_limit
        })
        const err = !formData.name || !formData.code || !formData.unit_price || !formData.max_unit_limit
        if (!(errors.name || errors.unit_price || errors.max_unit_limit || errors.code || err)) {
            postFeature('http://localhost:8000/api/features/', formData, setFormData)
        } else {
            console.log('Nope')
        }

    }

    return (
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Feature Name"
                    name='name'
                    value={formData.name}
                    onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
                    className={errors.name ? 'is-invalid' : null}
                />
                {errors.name &&
                    <Form.Text className="text-danger">
                        Name length must be between 1 and 20
                    </Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="code">
                <Form.Label>Code</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Feature Code"
                    name='code'
                    value={formData.code}
                    onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
                    className={errors.code ? 'is-invalid' : null}
                />
                {errors.code &&
                    <Form.Text className="text-danger">
                        Code length must be between 1 and 10
                    </Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="unit_price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Feature Price"
                    name='unit_price'
                    value={formData.unit_price}
                    onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
                    className={errors.unit_price ? 'is-invalid' : null}
                />
                {errors.unit_price &&
                    <Form.Text className="text-danger">
                        Price must be a number greater than 0.01
                    </Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="max-units">
                <Form.Label>Max Units</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Feature Max Units"
                    name='max_unit_limit'
                    value={formData.max_unit_limit}
                    onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
                    className={errors.max_unit_limit ? 'is-invalid' : null}
                />
                {errors.max_unit_limit &&
                    <Form.Text className="text-danger">
                        Max Units must be a positive integer
                    </Form.Text>
                }
            </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit">
                    Add Feature
                </Button>
            </div>
        </Form>
    );
}

export default FeatureForm;