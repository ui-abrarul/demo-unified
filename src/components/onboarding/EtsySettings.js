import React from 'react'
import { TextStyles, Select, CheckBox, FlexLayout } from '@cedcommerce/ounce-ui'


const EtsySettings = () => {
  return (
    <>
      <FlexLayout direction='vertical' spacing='loose'>
        <TextStyles content="Kindly choose your nominal settings" fontweight='normal' type='SubHeading' />
        <FlexLayout childWidth='fullWidth' spacing='loose'>
          <Select
            dropDownheight={250}
            name="Default Category"
            onChange={() => { }}
            options={[
              {
                label: 'Custom Value',
                value: '1'
              },
              {
                label: 'Price',
                value: '2'
              },
              {
                label: 'Quantity',
                value: '3'
              },
              {
                label: 'SKU',
                value: '4'
              }
            ]}
            position="top"
            selectHelp="write help text here"
            thickness="thin"
            value=""
          />
          <Select
            dropDownheight={250}
            name="Shipping Profile ID"
            onChange={() => { }}
            options={[
              {
                label: 'Custom Value',
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
            position="top"
            selectHelp="write help text here"
            thickness="thin"
            value=""
          />
        </FlexLayout>
        <FlexLayout childWidth='fullWidth'>
          <Select
            dropDownheight={250}
            name="Etsy Language"
            onChange={() => { }}
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
            position="top"
            selectHelp="write help text here"
            thickness="thin"
            value=""
          />
        </FlexLayout>
        <FlexLayout childWidth='fullWidth' desktopWidth='100' spacing='loose'>
          <CheckBox
            id=""
            labelVal="Enable Order Sync"
            name="Name"
            onClick={() => { }}
          />
          <CheckBox
            id=""
            labelVal="Enable Inventory Sync"
            name="Name"
            onClick={() => { }}
          />
        </FlexLayout>
      </FlexLayout>


    </>
  )
}

export default EtsySettings