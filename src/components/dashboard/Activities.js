import { Card,Button, FlexLayout, Notification, FlexChild, TextStyles } from "@cedcommerce/ounce-ui";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import React from 'react'

const Activities = () => {
    return (
        <Card  action={<Button type="Plain">View All</Button>} title="Activities">
            <FlexLayout
                childWidth="fullWidth"
                spacing="tight"
            >

                <FlexChild
                >
                    <Notification
                        onClose={function noRefCheck() { alert("hello") }}
                        type="danger"
                        destroy={false}
                    >
                        Aliexpress product(s) upload completed. 21 products acknowledged. View Report
                    </Notification>
                </FlexChild>

                
                <FlexChild
                >
                    <Notification
                        onClose={function noRefCheck() { alert("hello") }}
                        type="danger"
                        destroy={false}
                    >
                        Product(s) validation successfull
                    </Notification>
                </FlexChild>

                <FlexChild
                >
                    <Notification
                        onClose={function noRefCheck() { alert("hello") }}
                        type="danger"
                        destroy={false}
                    >
                        Product(s) validation successfull
                    </Notification>
                </FlexChild>

                <FlexChild
                >
                    <Notification
                        onClose={function noRefCheck() { alert("hello") }}
                        type="danger"
                        destroy={false}
                    >
                        Aliexpress product(s) upload completed. 21 products acknowledged. View Report
                    </Notification>
                </FlexChild>

                <FlexChild
                >
                    <Notification
                        onClose={function noRefCheck() { alert("hello") }}
                        type="danger"
                        destroy={false}
                    >
                        Aliexpress product(s) upload completed. 21 products acknowledged. View Report
                    </Notification>
                </FlexChild>

            </FlexLayout>
        </Card>
    )
}

export default Activities