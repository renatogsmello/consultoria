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
	{
		id: 3,
		name: "Focus Paper Refill",
		price: "$89",
		videoSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
		imageAlt: "Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "Machined Mechanical Pencil",
		price: "$35",
		videoSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	// More products...
]

export default function Projects() {
	return (
		<div className="bg-white">
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projetos</h2>
					<p className="mt-4 text-gray-500">
						The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active
						cards from new ones, or can be used to archive important task lists.
					</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-gray-900">{feature.name}</dt>
								<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					{products.map((product) => (
						<div key={product.id} className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<iframe
									className="h-full w-full object-cover object-center group-hover:opacity-75"
									width="560"
									height="315"
									src={product.videoSrc}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
