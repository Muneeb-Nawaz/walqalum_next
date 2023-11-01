import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../Shared/Themes/theme";

export const metadata = {
  title: "Walqalum - IT Startup & Software Development",
  description:
    "We are a software agency of dedicated IT professionals who have a passion to build top-notch applications that can transform your business digitally.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout;
