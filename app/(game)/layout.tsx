import { Navbar } from "./components/navbar.tsx";
import useUserStore

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useUserStore();

	useEffect(() => )

	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
}
