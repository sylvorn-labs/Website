import Image from "next/image";
import Link from "next/link";

export function NotificationButton() {
  return (
    <Link href={"#stay-tuned"}>
      <button
        className="fixed bottom-8 right-12 z-50 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-[32px] border-[0.5px] border-white/40 flex items-center justify-center transition-all hover:bg-white/30 active:scale-95"
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
