"use client"
import { useState } from "react"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"
import ExecutedProjects from "./executed-projects"
import { Tabs } from "./selos"
import Modal from "./modal"
import { Modal2, Modal3 } from "./modal"
import Team from "./team"
import CompanyValues from "./company-values"

export default function Home() {
	const [open, setOpen] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)

	return (
		<div className="relative px-6 pt-14 w-screen lg:px-8">
			<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto lg:max-w-7xl py-24 lg:px-8">
				<div className="mx-auto sm:w-full lg:max-w-4xl mb-16 lg:text-center">
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
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/sgPoWtM10CY"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					style={{ margin: "4rem auto" }}
					className="w-full"
				></iframe>

				<div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
					<p className="mt-8 font-bold tracking-tight text-gray-900 sm:text-4xl text-2xl text-center">Conheça as etapas da nossa metodologia</p>
					<div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
						<div className="w-full px-4 pt-8">
							<div className="mx-auto w-full max-w-md rounded-2xl bg-white">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
												<span>Passo 1</span>
												<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
											</Disclosure.Button>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												<ul className="list-disc">
													<li className="mb-2">Entrevista com líderes e coleta de feedback</li>
													<li className="mb-2">Adaptação da cultura da empresa sob a ótica inclusiva</li>
													<li className="mb-2">
														Mapeamento de ONGs e Instituições especializadas em PcDs para treinamento in company
													</li>
													<li className="mb-2">Melhoria do ambiente de trabalho Presencial / Online / Híbrido</li>
													<li className="mb-2">
														Levantamento de requisitos para modulação do app de
														<button
															className="font-bold text-indigo-600 decoration-indigo-600 underline"
															onClick={() => setOpen2(true)}
														>
															inclusão 360
														</button>
													</li>
												</ul>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						</div>

						<div className="w-full px-4 pt-8">
							<div className="mx-auto w-full max-w-md rounded-2xl bg-white">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
												<span>Passo 2</span>
												<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
											</Disclosure.Button>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												<ul className="list-disc">
													<li className="mb-2">Realização do processo de onboarding acolhedor pelo funcionários PcDs treinados</li>
													<li className="mb-2">
														Apresentação dos lideres capacitados através do onboarding continuo e da metodologia buddy
													</li>
													<li className="mb-2">
														<button
															className="font-bold text-indigo-600 decoration-indigo-600 underline mr-2"
															onClick={(e) => setOpen3(true)}
														>
															Gamificação
														</button>
														do processo de integração das equipes através de dinâmicas
													</li>
												</ul>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						</div>

						<div className="w-full px-4 pt-8">
							<div className="mx-auto w-full max-w-md rounded-2xl bg-white">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
												<span>Passo 3</span>
												<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
											</Disclosure.Button>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												<ul className="list-disc">
													<li className="mb-2">Acompanhamento dos líderes de acolhimento da empresa</li>
													<li className="mb-2">
														Planos de benefícios e compensação para funcionários e equipes que se destacarem nas dinâmicas
														inclusivas
													</li>
													<li className="mb-2">
														<button
															className="font-bold text-indigo-600 decoration-indigo-600 underline mr-2"
															onClick={() => setOpen(true)}
														>
															Avaliação 360
														</button>
														periódica dos líderes
													</li>
												</ul>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						</div>
						<div className="w-full px-4 pt-8">
							<div className="mx-auto w-full max-w-md rounded-2xl bg-white">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
												<span>Passo 4</span>
												<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
											</Disclosure.Button>
											<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												<ul className="list-disc">
													<li className="mb-2">
														A qualidade e comprometimento das empresas que aplicaram a metodologia serão divulgados através de selos
													</li>
													<li className="mb-2">Selo 1: Líder Inclusivo</li>
													<li className="mb-2">Selo 2: Líder Inovador</li>
													<li className="mb-2">Selo 3: Líder Defensor</li>
												</ul>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						</div>
					</div>
				</div>
				<p className="mt-40 font-bold tracking-tight text-gray-900 text-2xl sm:text-4xl text-center">Benefícios de possuir os selos de Inclusão 360</p>
				<p className="mt-6 text-lg leading-8 text-gray-600">
					Ao promover um ambiente de trabalho diverso e acolhedor, os selos fortalecem a reputação e sucesso da empresa. Com a divulgação dos selos
					inclusão 360, a empresa demonstra compromisso com a igualdade e a diversidade, despertando o interesse e a admiração de potenciais clientes,
					parceiros de negócios e talentos qualificados.
				</p>
				{/* <Selos /> */}
				<Tabs />
				<Team />
				<CompanyValues />
				<Modal isOpen={open} toggle={setOpen} />
				<Modal2 isOpen={open2} toggle={setOpen2} />
				<Modal3 isOpen={open3} toggle={setOpen3} />
			</div>
			<ExecutedProjects />
		</div>
	)
}
