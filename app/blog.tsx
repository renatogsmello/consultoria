const posts = [
	{
		id: 1,
		title: "O Termo PcD",
		href: "#",
		description: "Neste episódio do nosso podcast você descobrirá mais sobre terminologias e vocabulário.",
		date: "20 Mar, 2023",
		datetime: "2020-03-16",
		category: { title: "Treinamento", href: "#" },
		file: "/podcast.ogg",
		author: {
			name: "Eduardo Garcia",
			role: "Co-Founder / CEO",
			href: "#",
			imageUrl: "/eduardo_garcia.jpeg",
		},
	},
	{
		id: 2,
		title: "PcD no mercado de trabalho",
		href: "#",
		description:
			"Em 2019, um levantamento feito pela Catho, empresa especializada em mercado de trabalho, em parceria com a consultoria Santo Caos, aponta outros aspectos da presença de PcD no mercado de trabalho brasileiro. A pesquisa, feita com cerca de mil participantes e divulgada em 2019, indica que menos de 10% dos profissionais que têm algum tipo de deficiência ocupam postos de liderança no país.",
		date: "12 Abr, 2023",
		datetime: "2020-03-10",
		category: { title: "Mercado", href: "#" },
		author: {
			name: "Daniela Rosa",
			role: "Co-Founder / CEO",
			href: "#",
			imageUrl: "/daniela_rosa.jpeg",
		},
	},
	{
		id: 3,
		title: "Ter uma deficiência não é o final, é apenas o início de uma luta desigual",
		href: "#",
		description:
			"Com o objetivo de promover a contratação e criar um ambiente corporativo mais inclusivo e adaptado para pessoas com deficiência, a Consultoria 360  desenvolve  ações de conscientização sobre o tema, como o teste de Viés Inconsciente, divulgado interna e externamente, e palestras educativas.",
		date: "3 Mai, 2023",
		datetime: "2020-03-10",
		category: { title: "Avaliação", href: "#" },
		author: {
			name: "Camila Oliveira",
			role: "Co-Founder / CEO",
			href: "#",
			imageUrl: "/camila_oliveira.jpeg",
		},
	},
]

export default function Blog() {
	return (
		<div id="blog" className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vamos falar de inclusão?</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Aprenda mais sobre a importância do onboarding e o panorama do Brasil sobre a discriminação de pessoas com deficiências nas nossas redes
						sociais.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
							<div className="flex items-center gap-x-4 text-xs">
								<time dateTime={post.datetime} className="text-gray-500">
									{post.date}
								</time>
								<a
									href={post.category.href}
									className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>
									{post.category.title}
								</a>
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 mb-8">{post.description}</p>
								{post.file ? (
									<audio controls>
										<source src={post.file} type="audio/ogg" />
										Your browser does not support the audio element.
									</audio>
								) : (
									""
								)}
							</div>
							<div className="relative mt-8 flex items-center gap-x-4">
								<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href={post.author.href}>
											<span className="absolute inset-0" />
											{post.author.name}
										</a>
									</p>
									<p className="text-gray-600">{post.author.role}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}
