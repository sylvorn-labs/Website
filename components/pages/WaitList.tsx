"use client";
import { FormEvent } from "react";

import { setLocalStorageItem } from "@/utils/localStorage";
import { Input } from "@/components/ui/Input";
import { supabase } from "@/utils/supabase";

export function WaitListForm() {
  const handleSubmit = async (event: FormEvent) => {
    const email = event.target.value;

    if (!email) return;

    const { error } = await supabase.from("waitlist_emails").insert({
      email: email,
    });

    setLocalStorageItem("waitlist_submitted", "true");
  };

  return (
    <Input
      placeholder="Stay Notified"
      showSubmitButton={true}
      onSubmit={handleSubmit}
    />
  );
}
