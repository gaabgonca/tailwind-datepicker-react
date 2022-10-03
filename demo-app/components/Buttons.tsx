import { NextComponentType } from "next"
import { setHttpAgentOptions } from "next/dist/server/config"
import { useContext } from "react"
import { addMonths, getFormattedDate, goToPrevNext } from "../utils/date"
import { DatePickerContext, Views } from "./DatePickerProvider"

export const ButtonPrevMonth: NextComponentType = () => {
	const { selectedDate, setSelectedDate, view } = useContext(DatePickerContext)
	return (
		<button
			type="button"
			className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200"
			onClick={() => setSelectedDate(new Date(goToPrevNext(view, selectedDate, -1)))}
		>
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
			</svg>
		</button>
	)
}

export const ButtonSelectMonth: NextComponentType = () => {
	const { selectedDate, view, setView } = useContext(DatePickerContext)

	const calculateView = (): Views => {
		if (view === "days") return "months"
		if (view === "months") return "years"
		if (view === "years") return "decades"
		return "days"
	}

	return (
		<button
			type="button"
			className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
			onClick={() => setView(calculateView())}
		>
			{getFormattedDate(selectedDate, { month: "long", year: "numeric" })}
		</button>
	)
}

export const ButtonNextMonth: NextComponentType = () => {
	const { selectedDate, setSelectedDate, view } = useContext(DatePickerContext)
	return (
		<button
			type="button"
			className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200"
			onClick={() => setSelectedDate(new Date(goToPrevNext(view, selectedDate, 1)))}
		>
			<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
			</svg>
		</button>
	)
}

export const ButtonToday: NextComponentType = () => {
	const { setSelectedDate, setShowSelectedDate, setView } = useContext(DatePickerContext)
	return (
		<button
			type="button"
			className="text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
			onClick={() => {
				setSelectedDate(new Date())
				setShowSelectedDate(true)
				setView("days")
			}}
		>
			Today
		</button>
	)
}

export const ButtonClear: NextComponentType = () => {
	const { setShowSelectedDate } = useContext(DatePickerContext)
	return (
		<button
			type="button"
			className="text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"
			onClick={() => setShowSelectedDate(false)}
		>
			Clear
		</button>
	)
}