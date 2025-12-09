"use client";

import { useUserStore } from "@/lib/useLogin";
import { Button } from "./button";
import Link from "next/link"

export default function BattleButton() {
  const user = useUserStore();

  return (
    <Link href={user.id ? "/battle" : "/login"}>
    <Button className="uppercase">{user ? "BET NOW" : "Login to BET"} </Button>
    </Link>
  );
}
