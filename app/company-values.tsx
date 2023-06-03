const stats = [
	{ id: 1, name: "Nossa missão é tornar o processo de onboarding mais inclusivo e acessível para pessoas com deficiência (PcD).", value: "Missão" },
	{
		id: 2,
		name: "Nossa visão é ser referência global em  tecnologia de gamificação como uma ferramenta poderosa para promover a igualdade de oportunidades e a participação plena de todos os colaboradores no ambiente de trabalho. ",
		value: "Visão",
	},
	{
		id: 3,
		name: "Acreditamos na igualdade de oportunidades e na valorização da diversidade. Nossos valores baseiam-se  na ética, inclusão, respeito, inovação, colaboração e impacto social.",
		value: "Valores",
	},
]

export default function CompanyValues() {
	return (
		<div className="bg-white py-24 sm:py-24">
			<div className="mx-auto max-w-7xl">
				<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
					{stats.map((stat) => (
						<div key={stat.id} className="mx-auto flex flex-col gap-y-4">
							<dt className="text-base leading-7 text-gray-600 border-t border-gray-200 pt-4">{stat.name}</dt>
							<dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl ">{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}
