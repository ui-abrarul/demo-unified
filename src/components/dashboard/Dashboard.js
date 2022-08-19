import React from 'react'
import { Card, FlexLayout, FlexChild, PageHeader, Button, MainLayout, BodyLayout } from "@cedcommerce/ounce-ui";
import UserCard from '../dashboard/UserCard';
import UserAnalytics from '../dashboard/UserAnalytics';
import EtsyAnalytics from '../dashboard/EtsyAnalytics';
import Activities from '../dashboard/Activities';
import Support from '../dashboard/Support';

const Layout = () => {
  return (
    <BodyLayout>
      <PageHeader
        action={<Button onClick={function noRefCheck() { }}>Action</Button>}
        // description={<>This is the description{' '}<Button onClick={function noRefCheck(){}} type="Plain">Link</Button></>}
        onClick={function noRefCheck() { }}
        title="Dashboard"
      />

      <FlexLayout spacing='loose' childWidth='fullWidth'>

        <FlexLayout
          childWidth="fullWidth"
          spacing="loose"
        >
          <FlexChild
            desktopWidth="33"
            mobileWidth="100"
            tabWidth="33"
            
          >
            <UserCard />
          </FlexChild>

          <FlexChild
            desktopWidth="66"
            mobileWidth="100"
            tabWidth="66"
            
          >
          <UserAnalytics/>
          </FlexChild>

        
          
        </FlexLayout>

        <FlexLayout
          spacing='loose'
        >
          <FlexChild
            desktopWidth="66"
            mobileWidth="100"
            tabWidth="66"
          >
            <EtsyAnalytics />
          </FlexChild>

          <FlexChild
            desktopWidth="33"
            mobileWidth="100"
            tabWidth="33"
          >

            <FlexLayout spacing='loose'>

              <Activities />

              <Support />

            </FlexLayout>


          </FlexChild>
        </FlexLayout>

      </FlexLayout>
    </BodyLayout>

  )
}

export default Layout