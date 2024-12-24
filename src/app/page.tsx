import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
// import { Projects } from '@/components/work/Projects';

import { home, person, about } from './lib/data';
import { baseURL } from './lib/config';
// import { baseURL, routes, renderContent } from '@/app/resources'; 
// import { Mailchimp } from '@/components';
// import { Posts } from '@/components/blog/Posts';

export async function generateMetadata(
) {
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
    };
}

export default function Home() {
    return (
        <Flex
            maxWidth="m" fillWidth gap="xl"
            direction="column" alignItems="center">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title,
                        description: home.description,
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />
            <Flex
                fillWidth
                direction="column"
                paddingY="l" gap="m">
                <Flex
                    direction="column"
                    fillWidth maxWidth="s">
                    <RevealFx
                        translateY="4"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            paddingBottom: '1rem',
                            width: '100%',
                        }}>
                        <Heading
                            wrap="balance"
                            variant="display-strong-l" >
                            {home.headline}
                        </Heading>
                    </RevealFx>
                    <RevealFx
                        translateY="8" delay={0.2}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            paddingBottom: '1rem',
                            width: '100%',
                        }} >
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="heading-default-xl">
                            {home.subline}
                        </Text>
                    </RevealFx>
                    <RevealFx translateY="12" delay={0.4}>
                        <Flex fillWidth>
                            <Button
                                id="about"
                                data-border="rounded"
                                href={`//about`}
                                variant="tertiary"
                                size="m">
                                <Flex
                                    gap="8"
                                    alignItems="center">
                                    {about.avatar.display && (
                                        <Avatar
                                            style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
                                            src={person.avatar}
                                            size="m" />
                                    )}
                                    {about.title}
                                    <Arrow trigger="#about" />
                                </Flex>
                            </Button>
                        </Flex>
                    </RevealFx>
                </Flex>
            </Flex>
        </Flex>
    )
}