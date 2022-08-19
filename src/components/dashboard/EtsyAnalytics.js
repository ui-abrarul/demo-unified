import { Card, FlexLayout, FlexChild, TextStyles } from "@cedcommerce/ounce-ui";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import ListingDetailsChart from "./ListingDetailsChart";
import ListingDetailsOrder from "./ListingDetailsOrder";
import TotalSalesChart from "./TotalSalesChart";

const EtsyAnalytics = () => {
  return (

    <Card title="Etsy Marketplace Analytics">

      <FlexLayout
        spacing="loose"
        childWidth="fullWidth"
      >

        <FlexLayout
          desktopWidth="33"
          mobileWidth="100"
          tabWidth="33"
          spacing="tight"
        >

          <FlexChild
          >
            <Card cardType="Subdued" extraClass="icon-color">
              <FlexLayout
                spacing="tight"
              >
                <FlexChild>
                  <RiMoneyDollarBoxFill />
                </FlexChild>
                <FlexChild>
                  <TextStyles
                    alignment="left"
                    fontweight="bold"
                  >
                    230K
                  </TextStyles>

                  <TextStyles
                    ignment="left"
                    fontweight="normal"
                    textcolor="light"
                    type="smallText"
                  >
                    Space Sales
                  </TextStyles>
                </FlexChild>
              </FlexLayout>
            </Card>
          </FlexChild>


          <FlexChild
          >
            <Card cardType="Subdued" extraClass="icon-color">
              <FlexLayout
                spacing="tight"
              >
                <FlexChild>
                  <RiMoneyDollarBoxFill />
                </FlexChild>
                <FlexChild>
                  <TextStyles
                    alignment="left"
                    fontweight="bold"
                  >
                    230K
                  </TextStyles>

                  <TextStyles
                    ignment="left"
                    fontweight="normal"
                    textcolor="light"
                    type="smallText"
                  >
                    Space Sales
                  </TextStyles>
                </FlexChild>
              </FlexLayout>
            </Card>
          </FlexChild>


          <FlexChild
          >
            <Card cardType="Subdued" extraClass="icon-color">
              <FlexLayout
                spacing="tight"
              >
                <FlexChild>
                  <RiMoneyDollarBoxFill />
                </FlexChild>
                <FlexChild>
                  <TextStyles
                    alignment="left"
                    fontweight="bold"
                  >
                    230K
                  </TextStyles>

                  <TextStyles
                    alignment="left"
                    fontweight="normal"
                    textcolor="light"
                    type="smallText"
                  >
                    Space Sales
                  </TextStyles>
                </FlexChild>
              </FlexLayout>
            </Card>
          </FlexChild>

        </FlexLayout>

        <FlexLayout
          desktopWidth="50"
          mobileWidth="100"
          tabWidth="50"
          spacing="loose"
        >

          <FlexChild>
            <ListingDetailsChart />
          </FlexChild>


          <FlexChild>
            <ListingDetailsOrder />
          </FlexChild>


        </FlexLayout>

        <FlexLayout
          childWidth="fullWidth"
        >
          <TotalSalesChart />
        </FlexLayout>

      </FlexLayout>

    </Card>
  )
}

export default EtsyAnalytics