import { FlexLayout, PageHeader, TextStyles, Button } from '@cedcommerce/ounce-ui'
import React from 'react'
import Channels from './Channels'
import { etsyIcon, fbIcon, googleIcon, walmartIcon } from './ChannelIcons'


const Onboarding = () => {
    return (
        <>
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

                    <Button type="Plain">
                        <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="49" height="33" rx="7.5" fill="white" />
                            <path d="M25 26C29.9706 26 34 21.9706 34 17C34 12.0294 29.9706 8 25 8C20.0294 8 16 12.0294 16 17C16 21.9706 20.0294 26 25 26Z" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.1348 13.719L28.4858 17.287L23.1348 20.854V13.719Z" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="0.5" y="0.5" width="49" height="33" rx="7.5" stroke="#EAEAEA" />
                        </svg>
                    </Button>
                    <Button type="Plain">
                        <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="49" height="33" rx="7.5" fill="white" />
                            <path d="M26.5 9.5H20.5C20.1022 9.5 19.7206 9.65804 19.4393 9.93934C19.158 10.2206 19 10.6022 19 11V23C19 23.3978 19.158 23.7794 19.4393 24.0607C19.7206 24.342 20.1022 24.5 20.5 24.5H29.5C29.8978 24.5 30.2794 24.342 30.5607 24.0607C30.842 23.7794 31 23.3978 31 23V14L26.5 9.5Z" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.5 9.5V14H31" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 17.75H22" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 20.75H22" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.5 14.75H22.75H22" stroke="#888791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="0.5" y="0.5" width="49" height="33" rx="7.5" stroke="#EAEAEA" />
                        </svg>
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
                <Channels title="Walmart" icon={walmartIcon}/>
                <Channels title="Facebook" icon={fbIcon}/>
                <Channels title="Google" icon={googleIcon}/>
            </FlexLayout>

        </>
    )
}

export default Onboarding