import styled from 'styled-components';


export const LoadingSpinnerContainer = styled.div`min-height:70vh; justify-content: center; align-items: center;display: flex;`
export const TrackerContainer = styled.div `width: 991px; margin: 0 auto; margin-top:10px;`

export const TrackerTitle = styled.div `
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
text-align:center;
color: #32A071;`


export const TrackerViewContainer = styled.div `height: 764px;
left: 224px;
top: 175px;
margin: 0 auto;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;`

export const AddBtn = styled.span`
padding: 10px;
gap: 10px;
left: 39px;
top: 42px;
cursor:pointer;
background: #C7F0DF;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color: #00502E;
margin:50px;
`


export const TrackerListContainer = styled.div `min-height: 70vh; margin: 0px 50px;`
export const TrackerSummary = styled.div ``


export const TrackItem = styled.div`border-bottom: 1px solid rgba(45, 167, 113, 0.5);padding:1.25rem 0px;margin:1.25rem;display:flex;justify-content:space-between;`;
export const TrackItemColumnContainer = styled.div``


export const ItemDate = styled.div`
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    width: 12rem;
`;


export const ItemDateDay = styled.div`font-weight:700;color: rgb(148 163 184 / 1);`
export const ItemDateDate = styled.div`color: rgb(22 163 74 /1); margin-top: 0.25rem;`
export const ItemDateDayName = styled.div`color: rgb(22 163 74 /1); margin-top: 0.5rem;line-height: 1.75rem;font-size: 1.25rem;`


export const ItemStartTitle = styled.div`color: rgb(148 163 184 / 1);font-weight: 700;font-size: 0.875rem;line-height: 1.25rem;    margin-bottom: 0.25rem;`
export const ItemStartSelect = styled.select`color: rgb(22 163 74 /1);padding: 0.25rem;border-color: rgb(34 197 94 / 1);border-width: 1px;border-radius: 0.375rem;text-transform: none;`

export const ItemHoursContainer = styled.div``
export const ItemHoursTitle = styled.div`text-align:center;`
export const ItemHoursCount = styled.div`color: rgb(22 163 74 / 1);text-align:center;border-radius: 0.375rem;background-color: rgb(187 247 208 / 1);padding: 0.25rem;`


export const SummaryContainer =  styled.div` 
    color: rgb(22 163 74 / 1);
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-top: 0.5rem;
    border-color: rgb(22 163 74 / 1);
    border-top-width: 1px;
    justify-content: space-between;
    display: flex;
    margin:1rem;
    `;
export const SummaryDayFlex = styled.div`width: 10rem;display: flex;justify-content: space-between;`;
export const SummaryDayFlexItem = styled.div``



export const CalendarModalContainer = styled.div`
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 1rem;
    --tw-bg-opacity: 0.8;
    background-color: rgb(39 39 42 / var(--tw-bg-opacity));
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    z-index: 50;
    top: 0px;
    right: 0px;
    left: 0px;
    position: fixed;
`
export const CalenderModalBodyContainer = styled.div`
max-width: 28rem;
width: 100%;
height: auto;
position: relative;`

export const CalenderModalBody = styled.div`
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    border-radius: 0.5rem;
    position: relative;
`



export const CalenderModalCloseBtn = styled.button`
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.375rem;
    background-color: transparent;
    border-radius: 0.5rem;
    align-items: center;
    display: inline-flex;
    margin-left: auto;
    top: 0.75rem;
    right: 0.625rem;
    position: absolute;
    cursor: pointer;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
`
export const CalenderModalCloseBtnImg = styled.image`width: 1.5rem;height: 1.5rem;`
export const CalenderModalCloseBtnTxt = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;`
export const CalenderModalContent = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`


export const AddDateModalContainer = styled.div`
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 1rem;
    --tw-bg-opacity: 0.8;
    background-color: rgb(39 39 42 / var(--tw-bg-opacity));
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    z-index: 50;
    top: 0px;
    right: 0px;
    left: 0px;
    position: fixed;`

export const AddDateModalContainerSub = styled.div`
    height: auto;
    max-width: 28rem;
    width: 100%;
    position: relative;
`
export const AddDateModalContainerSubSub = styled.div`
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    border-radius: 0.5rem;
    position: relative;
`
export const AddDateModalTimeTitle = styled.div`
    --tw-text-opacity: 1;
    color: rgb(148 163 184 / var(--tw-text-opacity));
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
`

export const AddDateModalTimeSelect = styled.select`
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));

    line-height: 1.25;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    padding-left: 0.75rem;
    padding-right: 0.75rem;

    --tw-border-opacity: 1;
    border-color: rgb(107 114 128 / var(--tw-border-opacity));

    border-width: 1px;

    border-radius: 0.25rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 100%;

    margin-bottom: 0.75rem;

    text-transform: none;

    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
`
export const AddDateModalCalenderContainer = styled.div`
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
    line-height: 1.25;
    --tw-border-opacity: 1;
    border-color: rgb(107 114 128 / var(--tw-border-opacity));
    border-width: 1px;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 93%;
    margin-bottom: 0.75rem;
`
export const AddDateModalBody = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`
export const AddDateModalSection = styled.div`margin-bottom: 0.5rem;`
export const AddDateModalBtnContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`
export const AddDateModalBtn = styled.button`
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    font-weight: 700;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
    border-radius: 0.25rem;
    cursor: pointer;
    -webkit-appearance: button;
    background-image: none;
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;

`