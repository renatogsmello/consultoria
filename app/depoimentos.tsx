import Testimonial from "./testimonials"

const features = [
	{ name: "Origin", description: "Designed by Good Goods, Inc." },
	{ name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
	{ name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
	{ name: "Finish", description: "Hand sanded and finished with natural oil" },
	{ name: "Includes", description: "Wood card tray and 3 refill packs" },
	{ name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." },
]

const products = [
	{
		id: 1,
		name: "Teoria U em 5 minutos",
		price: "Google",
		videoSrc: "https://www.youtube.com/embed/sgPoWtM10CY",
		imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 2,
		name: "Nomad Tumbler",
		price: "$35",
		videoSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
		imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	// {
	// 	id: 3,
	// 	name: "Focus Paper Refill",
	// 	price: "$89",
	// 	videoSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
	// 	imageAlt: "Person using a pen to cross a task off a productivity paper card.",
	// },
	// {
	// 	id: 4,
	// 	name: "Machined Mechanical Pencil",
	// 	price: "$35",
	// 	videoSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
	// 	imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	// },
	// More products...
]

export default function Projects() {
	return (
		<div className="bg-white">
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-24 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div className="col-span-2">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Depoimentos</h2>
					<p className="mt-4 text-gray-500">
						Acreditamos que a inclusão é um processo contínuo e estamos comprometidos em ajudá-lo a construir uma organização verdadeiramente
						inclusiva.
					</p>
					<p className="text-gray-500">Confira os depoimentos de quem já participou do nosso programa:</p>
				</div>

				{products.map((product) => (
					<div key={product.id} className="group">
						<div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
							<iframe
								className="h-full w-full object-cover object-center group-hover:opacity-75"
								width="560"
								height="315"
								src={product.videoSrc}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								style={{ border: "none" }}
							></iframe>
						</div>
						<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
						<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
					</div>
				))}

				<Testimonial
					title="Lider Inclusão 360"
					text="A Consultoria Inclusão 360 ofereceu uma solução inovadora e personalizada para a minha empresa. Recomendo a todos que desejam garantir um processo de onboarding inclusivo e eficiente para funcionários com deficiência."
					img="tim_cook.jpeg"
					name="Tim Cook"
					company="Apple"
				/>
				<Testimonial
					title="Embaixador 360"
					text="A Gameficação das atividades de toda a equipe no acompanhamento pós onboarding, promoveram uma integração bem-sucedidas e contribuíram para um ambiente de trabalho diversificado e realmente inclusivo."
					img="/antonio_guterres.jpeg"
					name="António Guterres"
					company="Google"
				/>
			</div>
		</div>
	)
}
