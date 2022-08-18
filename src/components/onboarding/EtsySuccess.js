import React from 'react'
import { Button, Notification} from '@cedcommerce/ounce-ui'


const EtsySuccess = () => {
    return (
        <>
            <Notification
                onClose={() => { }}
                type="success"
            >
                sdsa is Successfully Connected
            </Notification>
            <Button
                halign="End"
                iconAlign="left"
                length="fullBtn"
                onAction={() => { }}
                onClick={() => { }}
                thickness="thin"
                type="Plain"
            >
                + Connect Other Account
            </Button>
        </>
    )
}

export default EtsySuccess