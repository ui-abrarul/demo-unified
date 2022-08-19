import React from 'react'
import { Card, Select, TextStyles, FlexLayout, FlexChild } from "@cedcommerce/ounce-ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Total', 'Paid', 'Failed', 'Completed'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [35, 10, 20, 35],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};




const TotalSalesChart = () => {
  return (
    <Card cardType='Subdued'>
      <FlexLayout childWidth='fullWidth'>
        <FlexChild
           desktopWidth="80"
           mobileWidth="80"
           tabWidth="80"
        >
          <TextStyles
            alignment="left"
            fontweight="normal"
            textcolor="dark"
            type="mediumText"
            utility="none"
          >
            Total Sales
          </TextStyles>
        </FlexChild>
        <FlexChild
           desktopWidth="20"
           mobileWidth="20"
           tabWidth="20"
        >
          <Select
            dropDownWidth={100}
            dropDownheight={250}
            onChange={function noRefCheck() { }}
            options={[
              {
                label: 'option1',
                value: '1'
              },
              {
                label: 'option2',
                value: '2'
              },
              {
                label: 'option3',
                value: '3'
              },
              {
                label: 'option4',
                value: '4'
              },
              {
                label: 'option5',
                value: '5'
              },
              {
                label: 'option6',
                value: '6'
              },
              {
                label: 'option7',
                value: '7'
              },
              {
                label: 'option8',
                value: '8'
              }
            ]}
            placeholder="Select"
            popoverContainer="body"
            position="top"
            selectHelp="write help text here"
            thickness="thin"
            value=""
          />
        </FlexChild>
      </FlexLayout>
      <Line options={options} data={data}
      />
    </Card>

  )
}

export default TotalSalesChart