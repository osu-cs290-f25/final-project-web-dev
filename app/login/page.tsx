'use client'

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "@/lib/useLogin"
import { toast } from "sonner";

export default function Page() {
	const user = useUserStore();

	
	return (
		<form className="login" onSubmit={(e) => {
			const form = new FormData(e.currentTarget)
			const id = form.get("scid")
			if (!id) {
				toast("You must enter an ID!");
				return;
			}
		}}>
		<div>
			<label htmlFor="scid">Enter your Supercell ID: </label>
			<input type='text' name="scid" className="rounded-full border"></input>
			<button type="submit">Login!</button>
		</div>
		</form>
	)
}