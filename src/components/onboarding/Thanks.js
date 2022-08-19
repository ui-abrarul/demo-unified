import React from 'react'
import { Card, FlexChild, FlexLayout, TextStyles, Modal } from '@cedcommerce/ounce-ui'
import { successIcon } from './ChannelIcons'


const Thanks = () => {
  return (
    <FlexLayout childWidth='fullWidth' direction='vertical' spacing='tight' halign='center' valign='center'>
      {successIcon}
      <TextStyles
        alignment="center"
        fontweight="bold"
        textcolor="dark"
        type="Heading"
        utility="none"
      >
        Congratulations!
      </TextStyles>
      <TextStyles
        alignment="center"
        fontweight="normal"
        textcolor="dark"
        type="simpleText"
        utility="none"
      >
        Your App is Successfully Connected
      </TextStyles>
    </FlexLayout>
  )
}

export default Thanks