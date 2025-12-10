"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NotificationButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const stayTunedSection = document.getElementById("stay-tuned");

    if (!stayTunedSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide button when StayTunedSection is visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    );

    observer.observe(stayTunedSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link href={"#stay-tuned"}>
      <button
        className={`fixed bottom-8 right-12 z-50 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-[32px] border-[0.5px] border-white/40 flex items-center justify-center transition-all hover:bg-white/30 active:scale-95 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Notifications"
      >
        <Image
          src="/icons/ic-notification.svg"
          alt="Notifications"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>
    </Link>
  );
}
