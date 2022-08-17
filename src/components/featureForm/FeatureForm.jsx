import React from 'react';
import './featureForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {updateForm, postFeature} from "./helper";
import FormInput from "../formInput/FormInput";

function FeatureForm(props) {
    const statusList = {success: 'success', error: 'error', initial: null}
    const [submitStatus, setSubmitStatus] = useState(statusList.initial);
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
            setSubmitStatus(statusList.success)
        } else {
            setSubmitStatus(statusList.error)
        }

    }

    return (
        <Form onSubmit={submit}>
            {submitStatus && submitStatus == statusList.success &&
                <div className="alert alert-success">Feature Added Successfully.</div>
            }
            {submitStatus && submitStatus == statusList.error &&
                <div className="alert alert-danger">Could not add Feature.</div>
            }
            <FormInput
                name='name'
                label={'Name'}
                value={formData.name}
                type='text'
                error={errors.name}
                errorMessage="Name length must be between 1 and 20"
                onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
            />

            <FormInput
                name='code'
                label={'Code'}
                value={formData.code}
                type='text'
                error={errors.code}
                errorMessage="Code length must be between 1 and 10"
                onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
            />

            <FormInput
                name='unit_price'
                label='Price'
                value={formData.unit_price}
                type='number'
                error={errors.unit_price}
                errorMessage="Price must be a number greater than 0.01"
                onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
            />

            <FormInput
                name='max_unit_limit'
                label='Max Units'
                value={formData.max_unit_limit}
                type='number'
                error={errors.max_unit_limit}
                errorMessage="Max Units must be a positive integer"
                onChange={(e) => updateForm(e, formData, setFormData, errors, setErrors)}
            />

            <div className="text-center">
                <Button variant="primary" type="submit">
                    Add Feature
                </Button>
            </div>
        </Form>
    );
}

export default FeatureForm;