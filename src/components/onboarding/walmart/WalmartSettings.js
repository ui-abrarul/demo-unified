import React, { useState } from 'react'
import { TextStyles, Select, CheckBox, FlexLayout } from '@cedcommerce/ounce-ui'


const WalmartSettings = () => {


  const [formData, setFormData] = useState({
    defaultCategory: "",
    shippingProfileId: "",
    etsyLanguage: "",
    enableOrderSync: false,
    enableInventorySync: false
  })

  const handleChange = (e, name) => {
    if (name === "defaultCategory") {
      setFormData({ ...formData, defaultCategory: e })
    }
    if (name === "shippingProfileId") {
      setFormData({ ...formData, shippingProfileId: e })
    }
    if (name === "etsyLanguage") {
      setFormData({ ...formData, etsyLanguage: e })
    }

  }

  return (
    <FlexLayout direction='vertical' spacing='loose'>
      <TextStyles content="Kindly choose your nominal settings" fontweight='normal' type='SubHeading' />
      <FlexLayout childWidth='fullWidth' spacing='loose'>
        <Select
          dropDownheight={250}
          name="Default Category"
          onChange={(e) => handleChange(e, 'defaultCategory')}
          options={[
            {
              label: 'Custom Value',
              value: 'Custom Value'
            },
            {
              label: 'Price',
              value: 'Price'
            },
            {
              label: 'Quantity',
              value: 'Quantity'
            },
            {
              label: 'SKU',
              value: 'SKU'
            }
          ]}
          position="top"
          selectHelp="write help text here"
          thickness="thin"
          value={formData.defaultCategory}
        />
        <Select
          dropDownheight={250}
          name="Shipping Profile ID"
          onChange={(e) => handleChange(e, 'shippingProfileId')}
          options={[
            {
              label: '111',
              value: '111'
            },
            {
              label: '222',
              value: '222'
            }
          ]}
          position="top"
          selectHelp="write help text here"
          thickness="thin"
          value={formData.shippingProfileId}
        />
      </FlexLayout>
      <FlexLayout childWidth='fullWidth'>
        <Select
          dropDownheight={250}
          name="Etsy Language"
          onChange={(e) => handleChange(e, 'etsyLanguage')}
          options={[
            {
              label: 'French',
              value: 'French'
            },
            {
              label: 'German',
              value: 'German'
            }
          ]}
          position="top"
          selectHelp="write help text here"
          thickness="thin"
          value={formData.etsyLanguage}
        />
      </FlexLayout>
      <FlexLayout childWidth='fullWidth' desktopWidth='100' spacing='loose'>
        <CheckBox
          id="enableOrderSync"
          labelVal="Enable Order Sync"
          name="enableOrderSync"
          onClick={() => setFormData({ ...formData, enableOrderSync: !formData.enableOrderSync }) }
          checked={formData.enableOrderSync}
        />
        <CheckBox
          id="Enable Inventory Sync"
          labelVal="Enable Inventory Sync"
          name="Enable Inventory Sync"
          onClick={() => setFormData({ ...formData, enableInventorySync: !formData.enableInventorySync }) }
          checked={formData.enableInventorySync}
        />
      </FlexLayout>
    </FlexLayout>
   
  )
}

export default WalmartSettings