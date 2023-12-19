import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string;
}) => {
  return (
    <div>
      <Avatar className={cn("bg-white text-black", className)}>
        {image && (
          <Image
            src={image}
            alt={name || "User Name"}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback
          delayMs={1000}
          className="dark:bg-white dark:text-black text-lg"
        >
          {name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
