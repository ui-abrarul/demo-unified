import React, { useState } from 'react'
import { Card, FlexChild, FlexLayout, TextStyles, Modal } from '@cedcommerce/ounce-ui'
import EtsyForm from './EtsyForm'
import EtsySuccess from './EtsySuccess'
import EtsySettings from './EtsySettings'
import Thanks from './Thanks'
import WalmartForm from './walmart/WalmartForm'
import WalmartSettings from './walmart/WalmartSettings'
import Walmart from './walmart/Walmart'


const Channels = (props) => {

    const [connectModal, setConnectModal] = useState(false)
    const [page,setPage] = useState(0)

    const [stepOne, setStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)


    return (
        <>
            <Card
                primaryAction={{
                    content: 'Connect',
                    type: 'Primary',
                    onClick: () => setConnectModal(!connectModal)
                }}
                extraClass="channel"
            >
                <FlexLayout direction='vertical' spacing='tight'>
                    <FlexLayout halign='fill' valign='center'>
                        <FlexChild>
                            <FlexLayout valign='center' spacing='extraTight'>

                                {props.icon}

                                <TextStyles
                                    fontweight="normal"
                                    type="SubHeading"
                                >
                                    {props.title}
                                </TextStyles>

                            </FlexLayout>
                        </FlexChild>
                        <FlexChild>
                            <FlexLayout valign='center' spacing='extraTight'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_849_34158)">
                                        <path d="M10.0682 0.869951C9.79898 0.594492 9.47747 0.375612 9.1225 0.226174C8.76754 0.0767365 8.38629 -0.000244141 8.00115 -0.000244141C7.61601 -0.000244141 7.23476 0.0767365 6.8798 0.226174C6.52483 0.375612 6.20332 0.594492 5.93415 0.869951L5.31215 1.50795L4.42215 1.49695C4.0369 1.49239 3.65463 1.56491 3.29781 1.71024C2.941 1.85557 2.61684 2.07078 2.34441 2.34321C2.07198 2.61564 1.85677 2.9398 1.71144 3.29661C1.56611 3.65343 1.49359 4.0357 1.49815 4.42095L1.50815 5.31095L0.872149 5.93295C0.596689 6.20212 0.377809 6.52364 0.228371 6.8786C0.0789338 7.23356 0.00195313 7.61482 0.00195312 7.99995C0.00195313 8.38509 0.0789338 8.76634 0.228371 9.12131C0.377809 9.47627 0.596689 9.79778 0.872149 10.067L1.50915 10.689L1.49815 11.579C1.49359 11.9642 1.56611 12.3465 1.71144 12.7033C1.85677 13.0601 2.07198 13.3843 2.34441 13.6567C2.61684 13.9291 2.941 14.1443 3.29781 14.2897C3.65463 14.435 4.0369 14.5075 4.42215 14.503L5.31215 14.493L5.93415 15.129C6.20332 15.4044 6.52483 15.6233 6.8798 15.7727C7.23476 15.9222 7.61601 15.9991 8.00115 15.9991C8.38629 15.9991 8.76754 15.9222 9.1225 15.7727C9.47747 15.6233 9.79898 15.4044 10.0682 15.129L10.6902 14.492L11.5802 14.503C11.9654 14.5075 12.3477 14.435 12.7045 14.2897C13.0613 14.1443 13.3855 13.9291 13.6579 13.6567C13.9303 13.3843 14.1455 13.0601 14.2909 12.7033C14.4362 12.3465 14.5087 11.9642 14.5042 11.579L14.4942 10.689L15.1302 10.067C15.4056 9.79778 15.6245 9.47627 15.7739 9.12131C15.9234 8.76634 16.0003 8.38509 16.0003 7.99995C16.0003 7.61482 15.9234 7.23356 15.7739 6.8786C15.6245 6.52364 15.4056 6.20212 15.1302 5.93295L14.4932 5.31095L14.5042 4.42095C14.5087 4.0357 14.4362 3.65343 14.2909 3.29661C14.1455 2.9398 13.9303 2.61564 13.6579 2.34321C13.3855 2.07078 13.0613 1.85557 12.7045 1.71024C12.3477 1.56491 11.9654 1.49239 11.5802 1.49695L10.6902 1.50695L10.0682 0.870951V0.869951ZM10.3552 6.85395L7.35515 9.85395C7.3087 9.90052 7.25353 9.93746 7.19278 9.96266C7.13204 9.98787 7.06692 10.0008 7.00115 10.0008C6.93538 10.0008 6.87026 9.98787 6.80952 9.96266C6.74877 9.93746 6.6936 9.90052 6.64715 9.85395L5.14715 8.35395C5.10066 8.30746 5.06379 8.25228 5.03863 8.19154C5.01347 8.1308 5.00052 8.0657 5.00052 7.99995C5.00052 7.93421 5.01347 7.86911 5.03863 7.80837C5.06379 7.74763 5.10066 7.69244 5.14715 7.64595C5.19364 7.59946 5.24883 7.56259 5.30957 7.53743C5.37031 7.51227 5.43541 7.49932 5.50115 7.49932C5.56689 7.49932 5.63199 7.51227 5.69273 7.53743C5.75347 7.56259 5.80866 7.59946 5.85515 7.64595L7.00115 8.79295L9.64715 6.14595C9.74104 6.05207 9.86837 5.99932 10.0012 5.99932C10.1339 5.99932 10.2613 6.05207 10.3552 6.14595C10.449 6.23984 10.5018 6.36718 10.5018 6.49995C10.5018 6.63273 10.449 6.76007 10.3552 6.85395Z" fill="#A5A5A6" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_849_34158">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <TextStyles
                                    fontweight="bold"
                                    textcolor="light"
                                    type="simpleText"
                                >
                                    Not Connected
                                </TextStyles>
                            </FlexLayout>
                        </FlexChild>
                    </FlexLayout>
                    <FlexLayout>
                        <TextStyles
                            fontweight="normal"
                            textcolor="light"
                            type="simpleText"
                        >
                            Walmart’s marketplace surfaces your products to millions of shoppers, boosting your brand’s growth and optimizing your sales.
                        </TextStyles>
                    </FlexLayout>
                    <hr style={{ borderWidth: 0, height: "1px", color: "#F0EFFB", backgroundColor: "#F0EFFB", marginBottom: 0 }} />
                    <TextStyles content="No Account Connected" fontweight='normal' type='neutralText' textcolor='light' />
                </FlexLayout>
            </Card>

            <Modal
                open={connectModal}
                close={function noRefCheck() { setConnectModal(!connectModal) }}
                heading="Step 1/3"
                modalSize="small"
                primaryAction={{
                    content: props.title === 'Etsy' ? "Validate" : "Validate And Next",
                    loading: false,
                    onClick: () => { }
                }}
                secondaryAction={{
                    content: 'Cancel',
                    loading: false,
                    onClick: function noRefCheck() { setConnectModal(!connectModal) }
                }}
            >

                {/* {stepOne && <EtsyForm />}
                {stepTwo && <EtsySuccess />}
                {stepThree && <EtsySettings />} */}

                {props.title === 'Etsy' && <EtsyForm />}

                {props.title === 'Walmart' && <Walmart/>}
               
                {props.title === 'Facebook' && <WalmartForm />}
               
                {props.title === 'Google' && <WalmartForm />}

            </Modal>

        </>
    )
}

export default Channels