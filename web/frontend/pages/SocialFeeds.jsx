import { useState, useCallback } from "react";

import { Card, Page, Stack, Layout, TextContainer, Heading, Image, Button, Icon } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { EmptyFeeds } from "../components";
import { FeedItems } from "../components";


export default function SocialFeeds() {
  const [data, setData] = useState(false);


  return (

    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TitleBar
              title="Feeds"
              primaryAction={{
                content: "Contact Support",
                onAction: () => console.log("Primary action"),
              }}
            />
            <Heading>Nice work on building a Shopify app 🎉</Heading>

            <div style={{ padding: "0 40px", display: 'flex', justifyContent: 'center' }}>
              {!data ? <EmptyFeeds /> : <FeedItems /> }
            </div>

   
          </Card>
        </Layout.Section>
      </Layout>
     
    </Page>
  );
}
