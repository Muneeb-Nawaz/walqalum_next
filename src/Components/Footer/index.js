"use client";

import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import classes from "./footer.module.css";

const copyRightData = new Date().getFullYear();

const data = [
  {
    title: "Link",
    links: [
      { label: "About us", link: "#" },
      { label: "Our Mission", link: "#" },
      { label: "Meet The Teams", link: "#" },
      { label: "Our Projects", link: "#" },
      { label: "Contact Us", link: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "What We Offer", link: "#" },
      { label: "Offer", link: "#" },
      { label: "Our Story", link: "#" },
      { label: "Latest Posts", link: "#" },
      { label: "Help Center", link: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "What We Offer", link: "#" },
      { label: "Offer", link: "#" },
      { label: "Our Story", link: "#" },
      { label: "Latest Posts", link: "#" },
      { label: "Help Center", link: "#" },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text c="#fff" size="xl">
            About Us
          </Text>
          <Text size="xs" className={classes.description}>
            Lorem ipsum dolor sit amet consectetur. Sapien euismod arcu mattis
            quam sed sem vitae quam. Maecenas tristique amet enim amet
            elementum. Risus tellus justo praesent sed lacus tortor varius neque
            nullam. In sit nec condimentum euismod erat nibh aliquam.
          </Text>
          <Group gap={20} className={classes.social} wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandFacebook
                style={{ width: rem(35), height: rem(35) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(35), height: rem(35) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(35), height: rem(35) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(35), height: rem(35) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="white" size="sm">
          {`Copyright © ${copyRightData}. All Rights Reserved.`}
        </Text>
      </Container>
    </footer>
  );
};
export default Footer;
