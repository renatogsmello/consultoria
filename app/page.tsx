import Navbar from "./navbar"
import Team from "./team"
import Home from "./home"
import Clients from "./clients"
import Blog from "./blog"
import Projects from "./projects"
import ExecutedProjects from "./executed-projects"

export default function HomePage() {
	return (
		<>
			<header className="absolute inset-x-0 top-0 z-50">
				<Navbar />
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<Home />
				<Team />
				<Projects />
				<Clients />
				<Blog />
			</main>
		</>
	)
}
