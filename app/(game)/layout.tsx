import { Navbar } from "./components/navbar";
import { useUserStore } from "@/lib/useLogin"

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
}
