import { db } from "@/lib/drizzle"
import { winsTable } from "@/lib/schema"

export async function Page() {
	db.insert(winsTable).values({
		losingPlayer: "",
		winningPlayer: "",
		time: "1213"
	})

	return (
		<div className=""></div>
	)
}