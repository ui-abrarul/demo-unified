import { Card, FlexLayout, FlexChild, TextStyles } from "@cedcommerce/ounce-ui";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

import React from 'react'

const UserAnalytics = () => {
    return (

        <Card title="Overall App Analytics">
            <FlexLayout
                desktopWidth="25"
                mobileWidth="100"
                tabWidth="25"
                childWidth="fullWidth"
                spacing="tight"
                
            >

              
                    <Card cardType="Subdued" extraClass="icon-color">
                        <FlexLayout direction="vertical" valign="center">

                            <RiMoneyDollarBoxFill />


                            <TextStyles
                                fontweight="bold"
                            >
                                230K
                            </TextStyles>
                            <TextStyles
                                fontweight="normal"
                                textcolor="light"
                                type="smallText"
                            >
                                Space Sales
                            </TextStyles>

                        </FlexLayout>
                    </Card>
             

               
                    <Card cardType="Subdued" extraClass="icon-color">
                        <FlexLayout direction="vertical" valign="center">

                            <RiMoneyDollarBoxFill />


                            <TextStyles
                                fontweight="bold"
                            >
                                230K
                            </TextStyles>
                            <TextStyles
                                fontweight="normal"
                                textcolor="light"
                                type="smallText"
                            >
                                Space Sales
                            </TextStyles>

                        </FlexLayout>
                    </Card>
                

                
                    <Card cardType="Subdued" extraClass="icon-color">
                        <FlexLayout direction="vertical" valign="center">

                            <RiMoneyDollarBoxFill />


                            <TextStyles
                                fontweight="bold"
                            >
                                230K
                            </TextStyles>
                            <TextStyles
                                fontweight="normal"
                                textcolor="light"
                                type="smallText"
                            >
                                Space Sales
                            </TextStyles>

                        </FlexLayout>
                    </Card>
              
                    <Card cardType="Subdued" extraClass="icon-color">

                        <FlexLayout direction="vertical" valign="center">

                            <RiMoneyDollarBoxFill />


                            <TextStyles
                                fontweight="bold"
                            >
                                230K
                            </TextStyles>
                            <TextStyles
                                fontweight="normal"
                                textcolor="light"
                                type="smallText"
                            >
                                Space Sales
                            </TextStyles>

                        </FlexLayout>
                    </Card>
              

            </FlexLayout>
        </Card>

    )
}

export default UserAnalytics