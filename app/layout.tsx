import type { Metadata } from “next”;
import “./globals.css”;
import ThemeProvider from “./ThemeProvider”;

export const metadata: Metadata = {
title: “Mentea - Salud Mental”,
description: “Plataforma de soporte emocional.”,
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
{children}
);
}
