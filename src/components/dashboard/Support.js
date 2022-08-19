import { Card, FlexLayout, FlexChild, TextStyles } from "@cedcommerce/ounce-ui";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import React from 'react'

const Support = () => {
    return (
        <Card title="Support" extraClass="icon-color">

            <FlexLayout spacing="tight" direction="vertical">

                <FlexLayout
                    childWidth="fullWidth"
                    spacing="tight"
                >

                    <FlexChild
                    >
                        <FlexLayout
                            spacing="tight"
                            valign="center"
                        >
                            <FlexChild>
                                <RiMoneyDollarBoxFill />
                            </FlexChild>

                            <FlexChild>
                                <TextStyles
                                    fontweight="normal"
                                    textcolor="light"
                                    type="smallText"
                                >
                                    abrarul@cedcommerce.com
                                </TextStyles>
                            </FlexChild>

                        </FlexLayout>
                    </FlexChild>

                    <FlexChild

                    >
                        <FlexLayout
                            spacing="tight"
                            valign="center"
                        >
                            <FlexChild>
                                <RiMoneyDollarBoxFill />
                            </FlexChild>

                            <FlexChild>
                                <TextStyles
                                    fontweight="normal"
                                    textcolor="light"
                                    type="smallText"
                                >
                                    abrarul@cedcommerce.com
                                </TextStyles>
                            </FlexChild>

                        </FlexLayout>
                    </FlexChild>

                    <FlexChild
                    >
                        <FlexLayout
                            spacing="tight"
                            valign="center"
                        >
                            <FlexChild>
                                <RiMoneyDollarBoxFill />
                            </FlexChild>

                            <FlexChild>
                                <TextStyles
                                    fontweight="normal"
                                    textcolor="light"
                                    type="smallText"
                                >
                                    abrarul@cedcommerce.com
                                </TextStyles>
                            </FlexChild>

                        </FlexLayout>
                    </FlexChild>
                </FlexLayout>

                <FlexLayout
                    spacing="loose"
                >
                    <FlexChild>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            textcolor="dark"
                            type="mediumText"
                            utility="none"
                        >
                            Follow on Social Media
                        </TextStyles>
                    </FlexChild>
                    
                </FlexLayout>

                <FlexLayout>
                <RiMoneyDollarBoxFill />
                <RiMoneyDollarBoxFill />
                <RiMoneyDollarBoxFill />
                <RiMoneyDollarBoxFill />
                </FlexLayout>

            </FlexLayout>
        </Card>
    )
}

export default Support