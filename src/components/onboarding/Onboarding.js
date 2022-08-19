import { BodyLayout, FlexLayout, PageHeader, TextStyles, Button, Modal } from '@cedcommerce/ounce-ui'
import React, { useState } from 'react'
import Channels from './Channels'
import { etsyIcon, fbIcon, googleIcon, walmartIcon, onboardingVideoIcon, onboardingFileIcon } from './ChannelIcons'


const Onboarding = () => {

    const [onboardingModal, setOnboardingModal] = useState(false)

    return (
        <BodyLayout>
            <PageHeader
                action={<FlexLayout valign='center' spacing='tight'>
                    <Button
                        halign="Center"
                        iconAlign="left"
                        length="none"
                        onAction={() => { }}
                        onClick={function noRefCheck() { }}
                        thickness="thin"
                        type="Plain"
                    >
                        <TextStyles content="Help" fontweight='normal' type='neutralText' />
                    </Button>

                    <Button type="Plain" onClick={() => setOnboardingModal(!onboardingModal)}>
                        {onboardingVideoIcon}
                    </Button>

                    <Button type="Plain">
                        {onboardingFileIcon}
                    </Button>
                </FlexLayout>}
                description=""
                title="Unified Sales Channels By CedCommerce"
            >
                <FlexLayout>
                    <TextStyles
                        fontweight="normal"
                        textcolor="light"
                        type="Paragraph"
                        content="Connect Today & Sell your products on Multiple Marketplace. Reach Shoppers while they are browsing trending posts in the"
                    />
                    <TextStyles
                        fontweight="normal"
                        textcolor="light"
                        type="Paragraph"
                        content="Unified Marketplace. Listed below are a few prerequisites before moving forward."
                    /></FlexLayout>


            </PageHeader>

            <FlexLayout desktopWidth='33' spacing='loose'>
                <Channels title="Etsy" icon={etsyIcon} />
                <Channels title="Walmart" icon={walmartIcon} />
                <Channels title="Facebook" icon={fbIcon} />
                <Channels title="Google" icon={googleIcon} />
            </FlexLayout>
            <Modal
                open={onboardingModal}
                close={function noRefCheck() { setOnboardingModal(!onboardingModal) }}
                heading="Onboarding Guide"
                modalSize="small"
                secondaryAction={{
                    content: 'Close',
                    loading: false,
                    onClick: function noRefCheck() { setOnboardingModal(!onboardingModal) }
                }}
            >
                This is small modal
            </Modal>
            </BodyLayout>
    )
}

export default Onboarding