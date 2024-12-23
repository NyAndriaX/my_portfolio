"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { GoHome } from "react-icons/go";
import { RxViewGrid } from "react-icons/rx";
import { MdOutlineBook } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss';

import { routes, display } from "@/app/lib/config";

import { person } from "@/app/lib/data";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{ height: 'fit-content' }}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    {display.location && (
                        <Flex hide="s">
                            {person.location}
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            {routes['/'] && (
                                <ToggleButton
                                    href={`/`}
                                    selected={pathname === "/"} >
                                    <GoHome size={17} />
                                    <Flex paddingX="2" hide="s">Home</Flex>
                                </ToggleButton>
                            )}
                            {routes['/about'] && (
                                <ToggleButton
                                    href={`/about`}
                                    selected={pathname === "/about"}>
                                    <IoPersonOutline size={17} />
                                    <Flex paddingX="2" hide="s">About</Flex>
                                </ToggleButton>
                            )}
                            {routes['/work'] && (
                                <ToggleButton
                                    href={`/work`}
                                    selected={pathname.startsWith('/work')}>
                                    <RxViewGrid size={17} />
                                    <Flex paddingX="2" hide="s">Work</Flex>
                                </ToggleButton>
                            )}
                            {routes['/blog'] && (
                                <ToggleButton
                                    href={`/blog`}
                                    selected={pathname.startsWith('/blog')}>
                                    <MdOutlineBook size={17} />
                                    <Flex paddingX="2" hide="s">Blog</Flex>
                                </ToggleButton>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        <Flex hide="s">
                            {display.time && (
                                <TimeDisplay timeZone="Indian/Antananarivo" />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}