"use client";

import { useUserStore } from "@/lib/useLogin";
import { Button } from "./button";

export default function BattleButton() {
  const user = useUserStore();

  return (
    <Button className="uppercase">{user ? "BET NOW" : "Login to BET"} </Button>
  );
}
