"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
// import headerLogo from "/images/headerLogo.svg";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import Image from "next/image";
import classes from "./header.module.css";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className={classes.headerWrapper}>
      <div className={classes.headerTop}>
        <Group justify="space-between">
          <Group gap={68} visibleFrom="sm">
            <a href="#">
              <Group gap={10} visibleFrom="sm">
                <div className={classes.phone}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Text fw={500} fz="sm" color="#fff">
                  Help by a call: 919-614-6673
                </Text>
              </Group>
            </a>
            <a href="#">
              <Group gap={10} visibleFrom="sm">
                <div className={classes.phone}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                      fill="white"
                    />
                    <path
                      d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                      stroke="#04AFEB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <Text fw={500} fz="sm" color="#fff">
                  Drop us a line: service@walqalum.com
                </Text>
              </Group>
            </a>
          </Group>
          <Group gap={48} visibleFrom="sm">
            <a href="#">
              <div className={classes.phone}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <a href="#">
              <div className={classes.phone}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.93848 3.40625C9.90723 3.40625 11.5322 5.03125 11.5322 7C11.5322 9 9.90723 10.5938 7.93848 10.5938C5.93848 10.5938 4.34473 9 4.34473 7C4.34473 5.03125 5.93848 3.40625 7.93848 3.40625ZM7.93848 9.34375C9.21973 9.34375 10.251 8.3125 10.251 7C10.251 5.71875 9.21973 4.6875 7.93848 4.6875C6.62598 4.6875 5.59473 5.71875 5.59473 7C5.59473 8.3125 6.65723 9.34375 7.93848 9.34375ZM12.501 3.28125C12.501 3.75 12.126 4.125 11.6572 4.125C11.1885 4.125 10.8135 3.75 10.8135 3.28125C10.8135 2.8125 11.1885 2.4375 11.6572 2.4375C12.126 2.4375 12.501 2.8125 12.501 3.28125ZM14.876 4.125C14.9385 5.28125 14.9385 8.75 14.876 9.90625C14.8135 11.0312 14.5635 12 13.751 12.8438C12.9385 13.6562 11.9385 13.9062 10.8135 13.9688C9.65723 14.0312 6.18848 14.0312 5.03223 13.9688C3.90723 13.9062 2.93848 13.6562 2.09473 12.8438C1.28223 12 1.03223 11.0312 0.969727 9.90625C0.907227 8.75 0.907227 5.28125 0.969727 4.125C1.03223 3 1.28223 2 2.09473 1.1875C2.93848 0.375 3.90723 0.125 5.03223 0.0625C6.18848 0 9.65723 0 10.8135 0.0625C11.9385 0.125 12.9385 0.375 13.751 1.1875C14.5635 2 14.8135 3 14.876 4.125ZM13.376 11.125C13.751 10.2188 13.6572 8.03125 13.6572 7C13.6572 6 13.751 3.8125 13.376 2.875C13.126 2.28125 12.6572 1.78125 12.0635 1.5625C11.126 1.1875 8.93848 1.28125 7.93848 1.28125C6.90723 1.28125 4.71973 1.1875 3.81348 1.5625C3.18848 1.8125 2.71973 2.28125 2.46973 2.875C2.09473 3.8125 2.18848 6 2.18848 7C2.18848 8.03125 2.09473 10.2188 2.46973 11.125C2.71973 11.75 3.18848 12.2188 3.81348 12.4688C4.71973 12.8438 6.90723 12.75 7.93848 12.75C8.93848 12.75 11.126 12.8438 12.0635 12.4688C12.6572 12.2188 13.1572 11.75 13.376 11.125Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <a href="#">
              <div className={classes.phone}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                >
                  <path
                    d="M15.2197 3.75C15.2197 3.90625 15.2197 4.03125 15.2197 4.1875C15.2197 8.53125 11.9385 13.5 5.90723 13.5C4.03223 13.5 2.31348 12.9688 0.875977 12.0312C1.12598 12.0625 1.37598 12.0938 1.65723 12.0938C3.18848 12.0938 4.59473 11.5625 5.71973 10.6875C4.28223 10.6562 3.06348 9.71875 2.65723 8.40625C2.87598 8.4375 3.06348 8.46875 3.28223 8.46875C3.56348 8.46875 3.87598 8.40625 4.12598 8.34375C2.62598 8.03125 1.50098 6.71875 1.50098 5.125V5.09375C1.93848 5.34375 2.46973 5.46875 3.00098 5.5C2.09473 4.90625 1.53223 3.90625 1.53223 2.78125C1.53223 2.15625 1.68848 1.59375 1.96973 1.125C3.59473 3.09375 6.03223 4.40625 8.75098 4.5625C8.68848 4.3125 8.65723 4.0625 8.65723 3.8125C8.65723 2 10.126 0.53125 11.9385 0.53125C12.876 0.53125 13.7197 0.90625 14.3447 1.5625C15.0635 1.40625 15.7822 1.125 16.4072 0.75C16.1572 1.53125 15.6572 2.15625 14.9697 2.5625C15.626 2.5 16.2822 2.3125 16.8447 2.0625C16.4072 2.71875 15.8447 3.28125 15.2197 3.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <a href="#">
              <div className={classes.phone}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M3.93652 14H1.03027V4.65625H3.93652V14ZM2.46777 3.40625C1.56152 3.40625 0.811523 2.625 0.811523 1.6875C0.811523 0.78125 1.56152 0.03125 2.46777 0.03125C3.40527 0.03125 4.15527 0.78125 4.15527 1.6875C4.15527 2.625 3.40527 3.40625 2.46777 3.40625ZM14.7803 14H11.9053V9.46875C11.9053 8.375 11.874 7 10.374 7C8.87402 7 8.65527 8.15625 8.65527 9.375V14H5.74902V4.65625H8.53027V5.9375H8.56152C8.96777 5.21875 9.90527 4.4375 11.3115 4.4375C14.249 4.4375 14.8115 6.375 14.8115 8.875V14H14.7803Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </Group>
        </Group>
      </div>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image
            src="/images/headerLogo.svg"
            alt="logo"
            width={108}
            height={46}
          />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              About us
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Our Client
            </a>
            <a href="#" className={classes.link}>
              Blogs
            </a>
            <a href="#" className={classes.link}>
              Contact us
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button>Start Free Trial</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            About us
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Services
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Our Client
          </a>
          <a href="#" className={classes.link}>
            Blogs
          </a>
          <a href="#" className={classes.link}>
            Contact us
          </a>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
