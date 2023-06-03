"use client"
const people = [
	{
		name: "Camila Oliveira",
		role: "Co-Founder",
		imageUrl: "/camila_oliveira.jpeg",
	},
	{
		name: "Christian Velasco",
		role: "Co-Founder",
		imageUrl: "/cristian_velasco.jpeg",
	},
	{
		name: "Daniela Rosa",
		role: "Co-Founder",
		imageUrl: "/daniela_rosa.jpeg",
	},
	{
		name: "Eduardo Garcia",
		role: "Co-Founder",
		imageUrl: "/eduardo_garcia.jpeg",
	},
	{
		name: "Jorge Gomes",
		role: "Co-Founder",
		imageUrl: "/jorge_gomes.jpeg",
	},
	{
		name: "Maria Saraiva",
		role: "Co-Founder",
		imageUrl: "/maria_saraiva.jpeg",
	},
]

export default function Team() {
	return (
		<div id="team" className="py-24 sm:py-32">
			<div className="mx-auto flex flex-col lg:flex-row justify-between max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-lg">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça nossos consultores</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Nossa equipe de consultores altamente qualificados está pronta para auxiliá-lo a transformar seu ambiente de trabalho e colher os
						benefícios de uma equipe diversa e talentosa
					</p>
				</div>
				<ul role="list" className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
					{people.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
								<div>
									<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
									<p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
