import { Card, Badge, TextStyles, FlexLayout, FlexChild, Avatar } from "@cedcommerce/ounce-ui";
import user from '../../assets/user.png'
import React from 'react'

const UserCard = () => {
    return (

        <Card>

            <FlexLayout direction="vertical" spacing="tight">

            <FlexLayout
                spacing="tight"
            >
                <FlexChild>
                    <Avatar image={user} />
                </FlexChild>

                <FlexChild>
                    <TextStyles
                        type="mediumText"
                    >
                        Welcome Admin!
                    </TextStyles>
                    <TextStyles
                        textcolor="light"
                        type="smallText"
                    >
                        Abrar-2932
                    </TextStyles>
                    <TextStyles
                        textcolor="light"
                        type="smallText"
                    >
                        Abrar-2932
                    </TextStyles>
                </FlexChild>
            </FlexLayout>

            <FlexLayout
                halign="fill"
            >
                <FlexChild>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="dark"
                        type="simpleText"
                        utility="none"
                    >
                        Plan Status
                    </TextStyles>
                </FlexChild>
                <FlexChild>
                    <Badge
                        badgeTextColor="light"
                        onClick={function noRefCheck() { }}
                        size="regular"
                        type="Positive-300"
                    >
                        Paid
                    </Badge>
                </FlexChild>

            </FlexLayout>

            <FlexLayout
                halign="fill"
            >
                <FlexChild>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="dark"
                        type="simpleText"
                        utility="none"
                    >
                        Product Limit
                    </TextStyles>
                </FlexChild>
                <FlexChild>

                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="light"
                        type="simpleText"
                        utility="none"
                    >
                        400/500
                    </TextStyles>

                </FlexChild>

            </FlexLayout>

            <FlexLayout
                halign="fill"
            >
                <FlexChild>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="dark"
                        type="simpleText"
                        utility="none"
                    >
                        Product Limit
                    </TextStyles>
                </FlexChild>
                <FlexChild>

                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="light"
                        type="simpleText"
                        utility="none"
                    >
                        400/500
                    </TextStyles>

                </FlexChild>

            </FlexLayout>

            <FlexLayout
                halign="fill"
                spacing="ectraLoose"
            >
                <FlexChild>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="dark"
                        type="simpleText"
                        utility="none"
                    >
                        Language
                    </TextStyles>
                </FlexChild>
                <FlexChild>

                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        textcolor="light"
                        type="simpleText"
                        utility="none"
                    >
                       English
                    </TextStyles>

                </FlexChild>

            </FlexLayout>

            </FlexLayout>
        </Card>

    )
}

export default UserCard