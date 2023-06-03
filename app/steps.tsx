import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"

interface StepsProps {
	step: string
	description: string
}

export default function Steps({ step, description }: StepsProps) {
	return (
		<div className="w-full px-4 pt-8">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
								<span>{step}</span>
								<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{description} </Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	)
}
