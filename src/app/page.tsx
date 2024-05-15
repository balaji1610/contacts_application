"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/app/container/homePage";
import { ApplicationProvider } from "@/app/context/communityContext";
export default function Home() {
  return (
    <ApplicationProvider>
      <HomePage />
    </ApplicationProvider>
  );
}
