import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/app/theme-provider";

const roboto = Roboto({subsets: ["latin"], weight: ["500"]});

export const metadata: Metadata = {
    title: "S shop",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>S shop</title>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link
                rel="apple-touch-icon"
                href="/apple-touch-icon.png?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
        </head>
        <body className={roboto.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
