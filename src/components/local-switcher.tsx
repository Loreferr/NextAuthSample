"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label htmlFor="" className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        disabled={isPending}
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </select>
    </label>
  );
}
