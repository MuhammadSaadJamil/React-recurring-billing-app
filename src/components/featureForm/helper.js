import axios from "axios";

export const updateForm = (e, formData, setFormData, error, setErrors) => {
    switch (e.target.name) {
        case 'unit_price':
            setFormData({
                ...formData,
                [e.target.name]: Math.round(e.target.value * 100) / 100
            })
            break
        case 'max_unit_limit':
            setFormData({
                ...formData,
                [e.target.name]: Math.round(e.target.value)
            })
            break
        default:
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
    }


    validateData(e, formData, error, setErrors)
}

const validateData = (e, formData, error, setErrors) => {
    let name = error.name
    let unit_price = error.unit_price
    let code = error.code
    let max_unit_limit = error.max_unit_limit
    switch (e.target.name) {
        case 'name':
            name = e.target.value.length <= 0 || e.target.value.length > 20
            break
        case 'unit_price':
            unit_price = e.target.value < 0.01
            break
        case 'max_unit_limit':
            max_unit_limit = e.target.value < 1
            break
        case 'code':
            code = e.target.value.length <= 0 || e.target.value.length > 10
            break
    }
    setErrors({
        name,
        code,
        unit_price,
        max_unit_limit
    })

}

export const postFeature = (url, formData, setFormData) => {
    axios.post(url, formData)
        .then(function (response) {
            console.log(response);
            setFormData({
                name: '',
                code: '',
                unit_price: 0,
                max_unit_limit: 0
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}