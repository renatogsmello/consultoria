import Testimonial from "./testimonials"

export default function Projects() {
	return (
		<div id="testimonials" className="bg-white">
			<div className="mx-auto flex flex-col max-w-2xl gap-x-16 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div className="">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Depoimentos</h2>
					<p className="mt-4 text-gray-500">
						Acreditamos que a inclusão é um processo contínuo e estamos comprometidos em ajudá-lo a construir uma organização verdadeiramente
						inclusiva.
					</p>
					<p className="text-gray-500">Confira os depoimentos de quem já participou do nosso programa:</p>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row px-8 max-w-2xl lg:max-w-7xl">
				<Testimonial
					title="Lider Inclusão 360"
					text="A Consultoria Inclusão 360 ofereceu uma solução inovadora e personalizada para a minha empresa. Recomendo a todos que desejam garantir um processo de onboarding inclusivo e eficiente para funcionários com deficiência."
					img="tim_cook.jpeg"
					name="Tim Cook"
					company="CEO da Apple"
				/>
				<Testimonial
					title="Embaixador 360"
					text="A Gamificação das atividades de toda a equipe no acompanhamento pós onboarding, promoveram uma integração bem-sucedidas e contribuíram para um ambiente de trabalho diversificado e realmente inclusivo."
					img="/antonio_guterres.jpeg"
					name="António Guterres"
					company="9º secretário-geral da ONU"
				/>
			</div>
		</div>
	)
}
