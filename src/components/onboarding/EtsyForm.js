import React,{useState} from 'react'
import { TextStyles, FormElement, TextField } from '@cedcommerce/ounce-ui'

const EtsyForm = () => {
    const [formData, setFormData] = useState({
        shopName: "",
    })

    const handleChange = (e, name) => {
        if (name === "shopName") {
            setFormData({ ...formData, shopName: e })
        }
    }

    return (
        <>
            <TextStyles content="Enter Account Details" fontweight='normal' type='SubHeading' />
            <FormElement
            >
                <TextField name='Shop Name' onChange={(e) => handleChange(e, 'shopName')} value={formData.shopName}  />

            </FormElement>
        </>
    )
}

export default EtsyForm