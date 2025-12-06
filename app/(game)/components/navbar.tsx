"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import getNameFromId from "@/lib/getUser";
import { useUserStore } from "@/lib/useLogin";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/button";
import { useRouter } from "next/navigation";

export const Navbar =  () => {
	const [userName, setUserName] = useState<string>();
	const user = useUserStore()
	const router = useRouter()

	useEffect(() => {
		(async () => {
			if (user.id) {
				const name = await getNameFromId(user.id)
				setUserName(name);
			}
		})();
	}, [user.id])

	return (
		<nav className="fixed bg-blue-600/40 h-14 text-white backdrop-blur-lg rounded-full inset-x-4 top-4 flex items-center px-4 justify-between">
			<Link href="/">
				<img src="/logo.png" className="h-10" />
			</Link>

			<Menu>
				<MenuButton className="flex rounded-full bg-blue-500/20 px-3 py-1.5 focus:outline-none">
					{userName ?? "Loading..."}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 ml-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
						/>
					</svg>
				</MenuButton>
				<MenuItems anchor="bottom" className="text-white shadow-lg rounded-2xl flex flex-col gap-2 [--anchor-gap:4px] p-4 bg-blue-500/20 backdrop-blur-lg focus:outline-none">
					<MenuItem as={Button}>
						<Link href="/profile">
							Profile
						</Link>
					</MenuItem>
					<MenuItem as={Button} onClick={() => {
							user.setId(undefined)
							router.push("/")
						}}>
							Log Out
					</MenuItem>
				</MenuItems>
			</Menu>
		</nav>
	);
};
