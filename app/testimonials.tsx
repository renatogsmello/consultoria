interface TestimonialProps {
	title: string
	text: string
	img: string
	name: string
	company: string
}

export default function Testimonial({ title, text, img, name, company }: TestimonialProps) {
	return (
		<section className="p-6 mb-8 relative isolate overflow-hidden bg-white ">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
			<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
			<div className="mx-auto max-w-2xl lg:max-w-4xl">
				<p className="text-center text-indigo-700 font-bold text-lg">{title}</p>
				<figure className="mt-10">
					<blockquote className="text-justify text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
						<p>“{text}”</p>
					</blockquote>
					<figcaption className="mt-10">
						<img className="mx-auto h-10 w-10 rounded-full" src={img} alt="" />
						<div className="mt-4 flex items-center justify-center space-x-3 text-base">
							<div className="font-semibold text-gray-900">{name}</div>
							<svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
								<circle cx={1} cy={1} r={1} />
							</svg>
							<div className="text-gray-600">{company}</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	)
}
