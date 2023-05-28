import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import ExecutedProjects from "./executed-projects"
import Selos from "./selos"

const features = [
	{
		name: "Push to deploy",
		description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "SSL certificates",
		description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
		icon: LockClosedIcon,
	},
	{
		name: "Simple queues",
		description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
		icon: ArrowPathIcon,
	},
	{
		name: "Advanced security",
		description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
		icon: FingerPrintIcon,
	},
]

export default function Home() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl py-24 lg:px-8">
				<div className="mx-auto max-w-4xl mb-16 lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">Conheça nossa metodologia</h2>
					<p className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl text-justify">
						Nossa metodologia de onboarding é cuidadosamente elaborada para fornecer suporte abrangente aos novos funcionários com deficiências,
						garantindo que eles sejam recebidos com respeito, empatia e igualdade.
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Trabalhamos em estreita colaboração com sua empresa para personalizar cada etapa do processo de integração, levando em consideração as
						necessidades e habilidades específicas de cada indivíduo.
					</p>
				</div>
				<ExecutedProjects />
				<div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
					<ol className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
						<li className="flex">
							<svg className="h-11 w-11 flex-none overflow-visible" fill="none">
								<defs>
									<filter
										id="step-icon-0"
										x="-3"
										y="-1"
										width="50"
										height="50"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
										<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
										<feOffset dy="2"></feOffset>
										<feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
										<feComposite in2="hardAlpha" operator="out"></feComposite>
										<feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
										<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
										<feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
									</filter>
								</defs>
								<g filter="url(#step-icon-0)">
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										fill="#EEF2FF"
									></path>
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										stroke="#6366F1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</g>
								<path
									d="M11.75 8.75h12.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3h-12.5a3 3 0 0 1-3-3v-20.5a3 3 0 0 1 3-3Z"
									fill="#fff"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									opacity=".4"
									d="M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path d="M30.25 19.75v4.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
							<div className="ml-6">
								<h2 className="flex items-center text-sm font-semibold leading-6">
									<span className="text-indigo-500">Passo 1</span>
									<span className="ml-2 h-4 w-px bg-slate-300"></span>
									<span className="ml-2 text-slate-900">
										<span className="xl:hidden">Problem Framing</span>
										<span className="hidden xl:inline">Problem Framing</span>
									</span>
								</h2>
								<ul>
									<li className="mt-2 text-sm leading-7 text-slate-600">Entrevista com lideres e coleta de feedback</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">Adaptação da cultura da empresa sob a ótica inclusiva</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										Mapeamento de ONGs e Instituições especializadas em PCDs para treinamento in company
									</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">Melhoria do ambiente de trabalho Presencial / Online / Híbrido</li>
								</ul>
							</div>
						</li>
						<li className="flex">
							<svg className="h-11 w-11 flex-none overflow-visible" fill="none">
								<defs>
									<filter
										id="step-icon-1"
										x="-3"
										y="-1"
										width="50"
										height="50"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
										<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
										<feOffset dy="2"></feOffset>
										<feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
										<feComposite in2="hardAlpha" operator="out"></feComposite>
										<feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
										<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
										<feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
									</filter>
								</defs>
								<g filter="url(#step-icon-1)">
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										fill="#EEF2FF"
									></path>
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										stroke="#6366F1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</g>
								<path
									opacity=".4"
									d="M28.75 35.25h3.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path d="M8.75 24.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-11.5a3 3 0 0 1-3-3v-7.5Z" fill="#fff"></path>
								<path
									d="M10.75 23.5h12.5V22h-12.5v1.5Zm13.75 1.25v8.5H26v-8.5h-1.5Zm-1.25 9.75h-11.5V36h11.5v-1.5ZM9.5 32.25v-7.5H8v7.5h1.5Zm2.25 2.25a2.25 2.25 0 0 1-2.25-2.25H8A3.75 3.75 0 0 0 11.75 36v-1.5Zm12.75-1.25c0 .69-.56 1.25-1.25 1.25V36A2.75 2.75 0 0 0 26 33.25h-1.5Zm-1.25-9.75c.69 0 1.25.56 1.25 1.25H26A2.75 2.75 0 0 0 23.25 22v1.5ZM10.75 22A2.75 2.75 0 0 0 8 24.75h1.5c0-.69.56-1.25 1.25-1.25V22Z"
									fill="#6366F1"
								></path>
								<path
									d="M15.25 26.75 12.75 29l2.5 2.25M18.75 26.75l2.5 2.25-2.5 2.25"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									opacity=".4"
									d="M12.75 14.25h18.5"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
							<div className="ml-6">
								<h2 className="flex items-center text-sm font-semibold leading-6">
									<span className="text-indigo-500">Passo 2</span>
									<span className="ml-2 h-4 w-px bg-slate-300"></span>
									<span className="ml-2 text-slate-900">Nova metodologia acolhedora</span>
								</h2>
								<ul>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										Realização do processo de onboarding acolhedor pelo funcionários PCDs e lideres capacitados da empresa
									</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">Onboarding continuo através da metodologia buddy</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										Gameficação do processo de integração das equipes através de dinâmicas
									</li>
								</ul>
							</div>
						</li>
						<li className="flex">
							<svg className="h-11 w-11 flex-none overflow-visible" fill="none">
								<defs>
									<filter
										id="step-icon-2"
										x="-3"
										y="-1"
										width="50"
										height="50"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
										<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
										<feOffset dy="2"></feOffset>
										<feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
										<feComposite in2="hardAlpha" operator="out"></feComposite>
										<feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
										<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
										<feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
									</filter>
								</defs>
								<g filter="url(#step-icon-2)">
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										fill="#EEF2FF"
									></path>
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										stroke="#6366F1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</g>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 35.25c.69 0 1.25-.56 1.25-1.25A3.75 3.75 0 0 1 28 30.25a1.25 1.25 0 1 0 0-2.5A3.75 3.75 0 0 1 24.25 24a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 1 18 27.75a1.25 1.25 0 0 0 0 2.5A3.75 3.75 0 0 1 21.75 34c0 .69.56 1.25 1.25 1.25Z"
									fill="#fff"
								></path>
								<path
									d="M28 27a.75.75 0 0 0 0 1.5V27Zm-4.5 7a.5.5 0 0 1-.5.5V36a2 2 0 0 0 2-2h-1.5Zm5-5a.5.5 0 0 1-.5.5V31a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H30a2 2 0 0 0-2-2v1.5Zm-5-5a.5.5 0 0 1 .5.5H25a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V22a2 2 0 0 0-2 2h1.5Zm-5 5a.5.5 0 0 1 .5-.5V27a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H16a2 2 0 0 0 2 2v-1.5Zm5 5a.5.5 0 0 1-.5-.5H21a2 2 0 0 0 2 2v-1.5ZM18 31a3 3 0 0 1 3 3h1.5a4.5 4.5 0 0 0-4.5-4.5V31Zm3-7a3 3 0 0 1-3 3v1.5a4.5 4.5 0 0 0 4.5-4.5H21Zm7 3a3 3 0 0 1-3-3h-1.5a4.5 4.5 0 0 0 4.5 4.5V27Zm-3 7a3 3 0 0 1 3-3v-1.5a4.5 4.5 0 0 0-4.5 4.5H25Z"
									fill="#6366F1"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13 27.25c.69 0 1.25-.56 1.25-1.25 0-.966.784-1.75 1.75-1.75a1.25 1.25 0 1 0 0-2.5A1.75 1.75 0 0 1 14.25 20a1.25 1.25 0 1 0-2.5 0A1.75 1.75 0 0 1 10 21.75a1.25 1.25 0 0 0 0 2.5c.966 0 1.75.784 1.75 1.75 0 .69.56 1.25 1.25 1.25Z"
									fill="#fff"
								></path>
								<path
									d="M16 21a.75.75 0 0 0 0 1.5V21Zm-2.5 5a.5.5 0 0 1-.5.5V28a2 2 0 0 0 2-2h-1.5Zm3-3a.5.5 0 0 1-.5.5V25a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H18a2 2 0 0 0-2-2v1.5Zm-3-3a.5.5 0 0 1 .5.5H15a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V18a2 2 0 0 0-2 2h1.5Zm-3 3a.5.5 0 0 1 .5-.5V21a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H8a2 2 0 0 0 2 2v-1.5Zm3 3a.5.5 0 0 1-.5-.5H11a2 2 0 0 0 2 2v-1.5ZM10 25a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5V25Zm1-5a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5H11Zm5 1a1 1 0 0 1-1-1h-1.5a2.5 2.5 0 0 0 2.5 2.5V21Zm-1 5a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5H15Z"
									fill="#6366F1"
								></path>
								<path
									opacity=".4"
									d="M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v5.5M12.75 14.25h18.5"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
							<div className="ml-6">
								<h2 className="flex items-center text-sm font-semibold leading-6">
									<span className="text-indigo-500">Passo 3</span>
									<span className="ml-2 h-4 w-px bg-slate-300"></span>
									<span className="ml-2 text-slate-900">Acompanhamento</span>
								</h2>
								<ul>
									<li className="mt-2 text-sm leading-7 text-slate-600">Planos de benefícios e compensação para funcionários destaque</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">Avaliação 360 periódica</li>
								</ul>
							</div>
						</li>
						<li className="flex">
							<svg className="h-11 w-11 flex-none overflow-visible" fill="none">
								<defs>
									<filter
										id="step-icon-2"
										x="-3"
										y="-1"
										width="50"
										height="50"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
										<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
										<feOffset dy="2"></feOffset>
										<feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
										<feComposite in2="hardAlpha" operator="out"></feComposite>
										<feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
										<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
										<feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
									</filter>
								</defs>
								<g filter="url(#step-icon-2)">
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										fill="#EEF2FF"
									></path>
									<path
										d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z"
										stroke="#6366F1"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</g>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 35.25c.69 0 1.25-.56 1.25-1.25A3.75 3.75 0 0 1 28 30.25a1.25 1.25 0 1 0 0-2.5A3.75 3.75 0 0 1 24.25 24a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 1 18 27.75a1.25 1.25 0 0 0 0 2.5A3.75 3.75 0 0 1 21.75 34c0 .69.56 1.25 1.25 1.25Z"
									fill="#fff"
								></path>
								<path
									d="M28 27a.75.75 0 0 0 0 1.5V27Zm-4.5 7a.5.5 0 0 1-.5.5V36a2 2 0 0 0 2-2h-1.5Zm5-5a.5.5 0 0 1-.5.5V31a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H30a2 2 0 0 0-2-2v1.5Zm-5-5a.5.5 0 0 1 .5.5H25a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V22a2 2 0 0 0-2 2h1.5Zm-5 5a.5.5 0 0 1 .5-.5V27a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H16a2 2 0 0 0 2 2v-1.5Zm5 5a.5.5 0 0 1-.5-.5H21a2 2 0 0 0 2 2v-1.5ZM18 31a3 3 0 0 1 3 3h1.5a4.5 4.5 0 0 0-4.5-4.5V31Zm3-7a3 3 0 0 1-3 3v1.5a4.5 4.5 0 0 0 4.5-4.5H21Zm7 3a3 3 0 0 1-3-3h-1.5a4.5 4.5 0 0 0 4.5 4.5V27Zm-3 7a3 3 0 0 1 3-3v-1.5a4.5 4.5 0 0 0-4.5 4.5H25Z"
									fill="#6366F1"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13 27.25c.69 0 1.25-.56 1.25-1.25 0-.966.784-1.75 1.75-1.75a1.25 1.25 0 1 0 0-2.5A1.75 1.75 0 0 1 14.25 20a1.25 1.25 0 1 0-2.5 0A1.75 1.75 0 0 1 10 21.75a1.25 1.25 0 0 0 0 2.5c.966 0 1.75.784 1.75 1.75 0 .69.56 1.25 1.25 1.25Z"
									fill="#fff"
								></path>
								<path
									d="M16 21a.75.75 0 0 0 0 1.5V21Zm-2.5 5a.5.5 0 0 1-.5.5V28a2 2 0 0 0 2-2h-1.5Zm3-3a.5.5 0 0 1-.5.5V25a2 2 0 0 0 2-2h-1.5Zm-.5-.5a.5.5 0 0 1 .5.5H18a2 2 0 0 0-2-2v1.5Zm-3-3a.5.5 0 0 1 .5.5H15a2 2 0 0 0-2-2v1.5Zm-.5.5a.5.5 0 0 1 .5-.5V18a2 2 0 0 0-2 2h1.5Zm-3 3a.5.5 0 0 1 .5-.5V21a2 2 0 0 0-2 2h1.5Zm.5.5a.5.5 0 0 1-.5-.5H8a2 2 0 0 0 2 2v-1.5Zm3 3a.5.5 0 0 1-.5-.5H11a2 2 0 0 0 2 2v-1.5ZM10 25a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5V25Zm1-5a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5H11Zm5 1a1 1 0 0 1-1-1h-1.5a2.5 2.5 0 0 0 2.5 2.5V21Zm-1 5a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5H15Z"
									fill="#6366F1"
								></path>
								<path
									opacity=".4"
									d="M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v5.5M12.75 14.25h18.5"
									stroke="#6366F1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
							<div className="ml-6">
								<h2 className="flex items-center text-sm font-semibold leading-6">
									<span className="text-indigo-500">Passo 4</span>
									<span className="ml-2 h-4 w-px bg-slate-300"></span>
									<span className="ml-2 text-slate-900">Identificação no Ranking</span>
								</h2>
								<ul>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										<strong>Selo 1:</strong> Na Trilha Inclusiva
									</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										<strong>Selo 2:</strong> Real Conexão Humana
									</li>
									<li className="mt-2 text-sm leading-7 text-slate-600">
										<strong>Selo 3:</strong> Jornada Inclusiva
									</li>
								</ul>
							</div>
						</li>
					</ol>
				</div>
				<p className="mt-16 font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Benefícios de possuir os selos de Inclusão 360</p>
				<p className="mt-6 text-lg leading-8 text-gray-600">
					Promover um ambiente de trabalho diverso e acolhedor, os selos fortalecem a reputação e sucesso da empresa. A divulgação do selo 360
					demonstra compromisso com a igualdade e a diversidade, despertando o interesse e a admiração de potenciais clientes, parceiros de negócios e
					talentos qualificados.
				</p>
				<Selos />
			</div>
		</div>
	)
}
