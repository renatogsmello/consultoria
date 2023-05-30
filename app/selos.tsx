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

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
