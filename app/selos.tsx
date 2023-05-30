/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
	{
		id: 1,
		name: "Selo 1",
		href: "#",
		price: "Líder Inclusivo",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
		description:
			"Nivel inicial, na trilha determina empresas que já introduziram reais mudanças no seu processo de onboarding. Ao concluir o processo de avaliação 360 é notável as mudanças nos processos de inclusão e acolhimento dos funcionários PCDs.",
	},
	{
		id: 2,
		name: "Selo 2",
		href: "#",
		price: "Líder Inovador",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
		imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
		description:
			"Nivel intermediário, aplicado as empresas que na avaliação 360 apresentam profundos conhecimentos sobre as necessidades dos seus funcionários PCDs, não só no processo de onboarding contínuo. Supera desafios relacionados a conscientização e empatia, apresenta um ambiente acolhedor que permite compartilhamento de histórias e envolvimento em discussões que evoluem o tema.",
	},
	{
		id: 3,
		name: "Selo 3",
		href: "#",
		price: "Líder Defensor",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
		imageAlt: "Person using a pen to cross a task off a productivity paper card.",
		description:
			"Nivel avançado, somente cedido a empresas que evidenciam na avaliação 360 o desenvolvimento de ações práticas nos processos prévios, durante e após o onboarding. São empresas que contribuem ativamente não só para a sua cultura organizacional, mas em grupos de trabalho e instituições voltadas para a capacitação e melhores oportunidades de emprego para PCDs.",
	},
]

export default function Selos() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} href={product.href} className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
							<p>{product.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

import { useState } from "react"
import { Tab } from "@headlessui/react"

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

export function Tabs() {
	let [categories] = useState({
		Selo1: {
			id: 1,
			name: "Selo 1",
			title: "Líder Inclusivo",
			description:
				"Nivel inicial, na trilha determina empresas que já introduziram reais mudanças no seu processo de onboarding. Ao concluir o processo de avaliação 360 é notável as mudanças nos processos de inclusão e acolhimento dos funcionários PCDs.",
			img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		},
		Selo2: {
			id: 2,
			name: "Selo 2",
			title: "Líder Inovador",
			img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
			description:
				"Nivel intermediário, aplicado as empresas que na avaliação 360 apresentam profundos conhecimentos sobre as necessidades dos seus funcionários PCDs, não só no processo de onboarding contínuo. Supera desafios relacionados a conscientização e empatia, apresenta um ambiente acolhedor que permite compartilhamento de histórias e envolvimento em discussões que evoluem o tema.",
		},
		Selo3: {
			id: 3,
			name: "Selo 3",
			title: "Líder Defensor",
			img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
			description:
				"Nivel avançado, somente cedido a empresas que evidenciam na avaliação 360 o desenvolvimento de ações práticas nos processos prévios, durante e após o onboarding. São empresas que contribuem ativamente não só para a sua cultura organizacional, mas em grupos de trabalho e instituições voltadas para a capacitação e melhores oportunidades de emprego para PCDs.",
		},
	})

	return (
		<div className="w-full max-w-3xl px-2 py-16 sm:px-0 mx-auto">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					{Object.values(categories).map((category) => (
						<Tab
							key={category.id}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5",
									"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
									selected ? "bg-white shadow" : "hover:bg-white/[0.12]"
								)
							}
						>
							<img className="w-60 max-w-xs" src={category.img} alt="" />
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(categories).map((category) => (
						<Tab.Panel
							key={category.id}
							className={classNames(
								"rounded-xl bg-white p-3",
								"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
							)}
						>
							<h3 className="mt-4 text-sm text-gray-700">{category.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">{category.title}</p>
							<p>{category.description}</p>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
