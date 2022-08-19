import { Card,Badge,Button, FlexLayout, FlexChild, TextStyles } from "@cedcommerce/ounce-ui";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import React from 'react'


ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Total', 'Paid', 'Failed', 'Completed'],
  datasets: [
    {
      label: '# of Votes',
      data: [3, 2, 3, 2],
      backgroundColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(0, 140, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(0, 140, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      boxWidth: 100,
      boxHeight: 100,	
      position: "left"
    },
  },
};

const ListingDetailsChart = () => {
  return (

    <Card cardType="Subdued" title="Listing Details" action={<Button type="Plain">View All</Button>}>
    <FlexLayout
      desktopWidth="50"
      mobileWidth="100"
      tabWidth="50"
      spacing="loose"
      valign="center"
    >
      <FlexChild>
        <FlexLayout direction="vertical" spacing="tight">

          <FlexLayout spacing="tight">
            <Badge
              customBgColor="#d5ba50"
              badgeTextColor="light"
              onClick={function noRefCheck() { }}
              size="small"
              type="Positive-300"
            >
              35
            </Badge>
            <TextStyles
              alignment="left"
              fontweight="normal"
              textcolor="dark"
              type="simpleText"
              utility="none"
            >
              Total
            </TextStyles>
          </FlexLayout>

          <FlexLayout spacing="tight">
            <Badge
              customBgColor="#007eec"
              badgeTextColor="light"
              onClick={function noRefCheck() { }}
              size="small"
              type="Positive-300"
            >
              35
            </Badge>
            <TextStyles
              alignment="left"
              fontweight="normal"
              textcolor="dark"
              type="simpleText"
              utility="none"
            >
              Paid
            </TextStyles>
          </FlexLayout>


          <FlexLayout spacing="tight">
            <Badge
              customBgColor="#d58f3b"
              badgeTextColor="light"
              onClick={function noRefCheck() { }}
              size="small"
              type="Positive-300"
            >
              35
            </Badge>
            <TextStyles
              alignment="left"
              fontweight="normal"
              textcolor="dark"
              type="simpleText"
              utility="none"
            >
              Failed
            </TextStyles>
          </FlexLayout>


          <FlexLayout spacing="tight">
            <Badge
              customBgColor="#3facb2"
              badgeTextColor="light"
              onClick={function noRefCheck() { }}
              size="small"
              type="Positive-300"
            >
              35
            </Badge>
            <TextStyles
              alignment="left"
              fontweight="normal"
              textcolor="dark"
              type="simpleText"
              utility="none"
            >
             Completed
            </TextStyles>
          </FlexLayout>

        </FlexLayout>

      </FlexChild>

      <FlexChild>
        <Doughnut data={data} options={options} />
      </FlexChild>
    </FlexLayout>
  </Card>

  )
}

export default ListingDetailsChart