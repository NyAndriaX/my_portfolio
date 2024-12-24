import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';

import { effects, baseURL, style } from "./lib/config";

import { Background, Flex } from '@/once-ui/components'

import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';
import { person, home } from "./lib/data";

import { Header } from "@/components/Header";

export async function generateMetadata(
) {


    return {
        metadataBase: new URL(`https://${baseURL}/`),
        title: home.title,
        description: home.description,
        openGraph: {
            title: `${person.firstname}'s Portfolio`,
            description: 'Portfolio website showcasing my work.',
            url: baseURL,
            siteName: `${person.firstname}'s Portfolio`,
            locale: 'en-FR',
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
};

const primary = Inter({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap',
})

type FontConfig = {
    variable: string;
};


const code = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-secondary',
    fallback: ['Courier New', 'monospace'],
    preload: true,
    adjustFontFallback: false,
});


/*
    Replace with code for secondary and tertiary fonts
    from https://once-ui.com/customize
*/

const secondary: FontConfig = {
    variable: `${code.variable} ${code.variable}`,
};

const tertiary: FontConfig | undefined = undefined;
/*
*/

interface RootLayoutProps {
    children: React.ReactNode;
}



export default function RootLayout({
    children
}: RootLayoutProps) {
    return (
        <Flex
            as="html" lang="en"
            background="page"
            data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
            data-solid={style.solid} data-solid-style={style.solidStyle}
            data-theme={style.theme}
            data-border={style.border}
            data-surface={style.surface}
            data-transition={style.transition}
            className={classNames(
                primary.variable,
                secondary ? secondary.variable : '',
                tertiary ? tertiary.variable : '',
                code.variable)}>
            <Flex style={{ minHeight: '100vh' }}
                as="body"
                fillWidth margin="0" padding="0"
                direction="column">
                <Background
                    mask={effects.mask as any}
                    gradient={effects.gradient as any}
                    dots={effects.dots as any}
                    lines={effects.lines as any} />
                <Flex
                    fillWidth
                    minHeight="16">
                </Flex>
                <Header />
                <Flex
                    zIndex={0}
                    fillWidth paddingY="l" paddingX="l"
                    justifyContent="center" flex={1}>
                    <Flex
                        justifyContent="center"
                        fillWidth minHeight="0">
                        {/* <RouteGuard> */}
                        {children}
                        {/* </RouteGuard> */}
                    </Flex>
                </Flex>
                {/* <Footer/> */}
            </Flex>
        </Flex>
    );
}