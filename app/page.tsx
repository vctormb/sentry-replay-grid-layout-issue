"use client";

import styles from "./styles.module.css";
import clsx, { ClassValue } from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className={cn("grid gap-2 px-6 text-black", styles.section)}>
        <div className={cn("bg-cyan-100 py-2 px-6 text-black", styles.slotOne)}>
          slot 1
        </div>
        <div className={cn("bg-cyan-100 py-2 px-6 text-black", styles.slotTwo)}>
          slot 2
        </div>
        <div
          className={cn("bg-cyan-100 py-2 px-6 text-black", styles.slotThree)}
        >
          slot 3
        </div>
        <div
          className={cn("bg-cyan-100 py-2 px-6 text-black", styles.slotFour)}
        >
          slot 4
        </div>
      </div>

      <Link
        className="mt-3 text-white hover:underline"
        href="/sentry-example-page"
      >
        Go to example page
      </Link>
    </main>
  );
}
