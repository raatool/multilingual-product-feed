import { Modal, Stack, TextContainer, Grid, MediaCard } from '@shopify/polaris';
import { MobilePlusMajor } from '@shopify/polaris-icons';
import { facebook, google, bing, tiktok, snapchat, pinterest } from '../../assets';


export function SocialModal(props) {

  return (
    <div style={{ height: 'auto' }}>
      <Modal large
        open={props.show}
        onClose= {props.close}
        title="Create Product Feed Template"
      >

        <Modal.Section>
          <Stack vertical>
            <Stack.Item>
              <TextContainer>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="Facebook & Instagram Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                     
                    >
                      <img
                        alt="facebook"
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src={ facebook }
                      />
                    </MediaCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="Google Shopping Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                      popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                      <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src={google}
                      />
                    </MediaCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="Bing Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                      popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                      <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src={bing}
                      />
                    </MediaCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="TikTok Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                      popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                      <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/800px-TikTok_logo.svg.png"
                      />
                    </MediaCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="Snapchat Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                      popoverActions={[{ content: 'Tutorial', onAction: () => { } }]}
                    >
                      <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src="https://pngshare.com/wp-content/uploads/2021/05/Print-Snapchat-Logo-16.png"
                      />
                    </MediaCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <MediaCard
                      title="Pinterest Feed"
                      primaryAction={{
                        icon: MobilePlusMajor,
                        content: 'Add New',
                        onAction: () => { },
                      }}
                      description="Discover how Shopify can power up your entrepreneurial journey."
                      popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                      <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          padding: '16px',
                        }}
                        src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png"
                      />
                    </MediaCard>
                  </Grid.Cell>
                </Grid>
              </TextContainer>
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
}