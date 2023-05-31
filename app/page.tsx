import Navbar from "./navbar"
import Home from "./home"
import Clients from "./clients"
import Blog from "./blog"
import Projects from "./depoimentos"

export default function HomePage() {
	return (
		<>
			<header className="absolute inset-x-0 top-0 z-50">
				<Navbar />
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<Home />
				<Projects />
				<Clients />
				<Blog />
			</main>
		</>
	)
}
