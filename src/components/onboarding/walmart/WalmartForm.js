import React, { useState } from 'react'
import { TextStyles, FormElement, TextField, FlexLayout, Button } from '@cedcommerce/ounce-ui'


const WalmartForm = () => {

    const [formData, setFormData] = useState([{
        sellerId: "",
        clientId: "",
        secretKey: ""
    }])


    const handleChange = (e, i, name) => {
        if (name === "sellerId") {
            const list = [...formData]
            list[i][name] = e
            setFormData(list)
        }
        if (name === "clientId") {
            const list = [...formData]
            list[i][name] = e
            setFormData(list)
        }
        if (name === "secretKey") {
            const list = [...formData]
            list[i][name] = e
            setFormData(list)
        }
    }

    const addMoreFields = () => {
        setFormData([...formData, {
            sellerId: "",
            clientId: "",
            secretKey: ""
        }])
    }

    const removefields = (i) => {
        const newFormValues = [...formData]
        newFormValues.splice(i, 1)
        setFormData(newFormValues)
    }


    return (
        <>
            <FlexLayout direction='vertical' childWidth='fullWidth' spacing='loose'>
                <FlexLayout>
                    <TextStyles content="Enter Account Details" fontweight='normal' type='SubHeading' />
                </FlexLayout>
                <FlexLayout childWidth='fullWidth'>
                    {formData.map((element, i) => {
                        return (
                            <React.Fragment key={i}>
                                <FormElement
                                >
                                    <FlexLayout childWidth='fullWidth' spacing='loose'>
                                        <TextField name='Seller Id' onChange={(e) => handleChange(e, i, 'sellerId')} value={element.sellerId} />
                                        <TextField name='Client Id' onChange={(e) => handleChange(e, i, 'clientId')} value={element.clientId} />
                                    </FlexLayout>
                                    <FlexLayout childWidth='fullWidth'>
                                        <TextField name='Secret Key' onChange={(e) => handleChange(e, i, 'secretKey')} value={element.secretKey} />
                                    </FlexLayout>
                                </FormElement>
                                {formData.length !== 1 && <Button
                                    halign="End"
                                    iconAlign="left"
                                    length="fullBtn"
                                    onAction={() => { }}
                                    onClick={(i) => removefields(i)}
                                    thickness="thin"
                                    type="DangerPlain"
                                >
                                    Delete
                                </Button>}
                            </React.Fragment>
                        )
                    })

                    }
                    <Button
                        halign="End"
                        iconAlign="left"
                        length="fullBtn"
                        onAction={() => { }}
                        onClick={addMoreFields}
                        thickness="thin"
                        type="Plain"
                    >
                        + Connect Other Account
                    </Button>

                </FlexLayout>
                {JSON.stringify(formData)}
            </FlexLayout>
        </>
    )
}

export default WalmartForm