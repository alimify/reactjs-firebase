import tw from "tailwind-styled-components"


export const LoadingSpinnerContainer = tw.div`vh-70 flex items-center justify-center`
export const TrackerContainer = tw.div `w-full mt-5 border-0 border-b border-r border-l rounded-lg tracker-container`
export const TrackerTitle = tw.div `font-bold text-green-600 text-center`
export const TrackerViewContainer = tw.div `p-2`
export const AddBtn = tw.span`bg-green-200 cursor-pointer p-2 rounded mx-10`
export const TrackerListContainer = tw.div `mx-10 mt-5 vh-70`
export const TrackerSummary = tw.div ``


export const TrackItem = tw.div`flex justify-between m-2 border-b border-green-200 py-5`;
export const TrackItemColumnContainer = tw.div``

interface DateProps {
    $eClass: string
}
export const ItemDate = tw.div<DateProps>`
${(p) => (p.$eClass ? p.$eClass : "")}
w-48 text-center py-1 text-sm`;


export const ItemDateDay = tw.div`font-bold text-md text-slate-400`
export const ItemDateDate = tw.div`text-green-600 mt-1`
export const ItemDateDayName = tw.div`text-green-600 text-xl mt-2`


export const ItemStartTitle = tw.div`font-bold text-slate-400 mb-1 text-sm`
export const ItemStartSelect = tw.select`border border-green-500 rounded-md px-5 p-1 text-green-600`

export const ItemHoursContainer = tw.div``
export const ItemHoursTitle = tw.div`text-center`
export const ItemHoursCount = tw.div`bg-green-200 text-center rounded-md p-1 text-green-600`


export const SummaryContainer =  tw.div`m-4 flex justify-between text-green-600 font-bold text-xs border-t border-green-600 pt-2`;
export const SummaryDayFlex = tw.div`flex w-40 justify-between`;
export const SummaryDayFlexItem = tw.div``



export const CalendarModalContainer = tw.div`bg-opacity-80 bg-zinc-800 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex`
export const CalenderModalBodyContainer = tw.div`relative w-full h-full max-w-md md:h-auto`
export const CalenderModalBody = tw.div`relative bg-white rounded-lg shadow dark:bg-gray-700`
export const CalenderModalCloseBtn = tw.button`absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white`
export const CalenderModalCloseBtnImg = tw.image`w-7 h-7`
export const CalenderModalCloseBtnTxt = tw.span`sr-only`
export const CalenderModalContent = tw.div`px-6 py-6 lg:px-8`


export const AddDateModalContainer = tw.div`bg-opacity-80	 bg-zinc-800 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex`
export const AddDateModalContainerSub = tw.div`relative w-full h-full max-w-md md:h-auto`
export const AddDateModalContainerSubSub = tw.div`relative bg-white rounded-lg shadow dark:bg-gray-700`
export const AddDateModalTimeTitle = tw.div`font-bold text-slate-400 mb-1 text-sm`
export const AddDateModalTimeSelect = tw.select`shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`
export const AddDateModalCalenderContainer = tw.div`className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`
export const AddDateModalBody = tw.div`px-6 py-6 lg:px-8`
export const AddDateModalSection = tw.div`mb-2`
export const AddDateModalBtnContainer = tw.div`flex items-center justify-between`
export const AddDateModalBtn = tw.button`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`