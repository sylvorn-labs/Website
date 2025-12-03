"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { useIsAlreadySignedUp, useIsError } from "@/store/zustand";
import { Input } from "@/components/ui/Input";
import { supabase } from "@/utils/supabase";

export function WaitListForm() {
  const setError = useIsError((state) => state.setIsError);
  const setIsSignedUp = useIsAlreadySignedUp((state) => state.setIsSignedUp);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsSignedUp(getLocalStorageItem("waitlist_submitted") === "true");
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOnSubmit = async (event: FormEvent) => {
    try {
      setIsLoading(true);
      setError(false);
      event.preventDefault();

      const { error } = await supabase.from("waitlist_emails").insert({
        email: email,
      });

      if (error) {
        setError(true);
        return;
      }

      setLocalStorageItem("waitlist_submitted", "true");
      setIsSignedUp(true);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        placeholder="Stay Notified"
        showSubmitButton={true}
        onChange={handleOnChange}
        value={email}
        disabled={isLoading}
      />
    </form>
  );
}
