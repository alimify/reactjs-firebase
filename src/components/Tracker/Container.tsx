import { useState, Component } from 'react'
import LogoIcon from '../../assets/inmogr.svg'
import tw from "tailwind-styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Header extends Component {
    state = {
        dateSlots: [{
            uniq: 1,
            start: 1,
            end: 3,
            date: new Date(),
            updatedAt: new Date()
        },{
            uniq: 2,
            start: 1,
            end: 3,
            date: new Date(),
            updatedAt: new Date()
        },{
            uniq: 3,
            start: 1,
            end: 3,
            date: new Date(),
            updatedAt: new Date()
        },{
            uniq: 4,
            start: 1,
            end: 3,
            date: new Date(),
            updatedAt: new Date()
        },{
            uniq: 5,
            start: 1,
            end: 3,
            date: new Date(),
            updatedAt: new Date()
        }],
        timeSlots: [],
        currentDate: new Date(),
        dateViewUniq: null
    };
    constructor(props: any){
        super(props);
    }

    render()
    {

        const TrackerContainer = tw.div `w-full mt-5 border-0 border-b border-r border-l rounded-lg`
        const TrackerTitle = tw.div `font-bold text-green-600 text-center`
        const TrackerViewContainer = tw.div `p-2`
        const AddBtn = tw.span`bg-green-200 cursor-pointer p-2 rounded mx-10`
        const TrackerListContainer = tw.div `mx-10 mt-5 vh-65`
        const TrackerSummary = tw.div ``

         
        return (
            <TrackerContainer>
                <TrackerTitle>Time Tracker</TrackerTitle>
                <TrackerViewContainer>
                    <AddBtn>
                        Add New Date
                    </AddBtn>
                    <TrackerListContainer>
                        {this._list()}
                    </TrackerListContainer>
                    <TrackerSummary>{this._summary()}</TrackerSummary>
                </TrackerViewContainer>
                {this._calenderModal()}
                {this._addDateModal()}
            </TrackerContainer>
        )
    }

    _list(){

        return  this.state.dateSlots.map((item) => this._listItem(item))
    }

    _listItem(item: any)
    {

        const TrackItem = tw.div`flex justify-between m-2`;

        return (
            <TrackItem key={item.uniq.toString()}>
                {this._itemDate(item)}
                {this._itemStart(item)}
                {this._itemEnd(item)}
                {this._itemHours(item)}
            </TrackItem>
        )
    }


    _itemDate(item: any)
    {
        const ItemDate = tw.div<DateProps>`
        ${(p) => (p.$eClass ? p.$eClass : "")}
        w-48 text-center py-6`;

        return (
           <ItemDate $eClass={`slider-${item.uniq}`}>

                <Swiper navigation={true} modules={[Navigation]} 
                        loop={true} 
                        onSlidePrevTransitionEnd={() => this.slideChange(item.uniq,'prev')} 
                        onSlideNextTransitionEnd={() =>  this.slideChange(item.uniq,'next')}>

                    <SwiperSlide key={(1).toString()} onClick={() => {
                        this.setState({
                            dateViewUniq: item.uniq
                        })
                    }}>
                        <div>{item.date.toDateString()}</div>
                    </SwiperSlide>

                    <SwiperSlide  key={(2).toString()}>
                        <div>{item.date.toDateString()}</div>
                    </SwiperSlide>

        
                </Swiper>
           </ItemDate>
        )
    }

    _itemStart(item: any)
    {

       const ItemStartTitle = tw.div`font-bold text-slate-400 mb-1 text-sm`,
             ItemStartSelect = tw.select`border border-green-500 rounded-md px-5 p-1 text-green-600`;

        return (
            <div>
                    <ItemStartTitle>Start Time</ItemStartTitle>
                    <ItemStartSelect defaultValue={item.start} onChange={(event) => {
                        this.setState({
                            dateSlots: this.state.dateSlots.map((itemD) => {
                                if(itemD.uniq == item.uniq){
                                    itemD.start = parseInt( event.target.value )
                                }
                                return itemD;
                            })
                        })
                    }}>
                        <option value={0}>Select time</option>
                        {[...Array.from(Array(24).keys())].map((itemOpt, index) => item.end > itemOpt+1 ? <option value={itemOpt+1} key={index}>{ (itemOpt + 1) > 12 ? ((itemOpt-12) + 1) + ' PM' : (itemOpt+1) + ' AM' }</option> : '')}
                    </ItemStartSelect>
        </div>
        )
    }

    _itemEnd(item: any)
    {

            const ItemStartTitle = tw.div`font-bold text-slate-400 mb-1 text-sm`,
                  ItemStartSelect = tw.select`border border-green-500 rounded-md px-5 p-1 text-green-600`

        return (

                <div>

                    <ItemStartTitle>End Time</ItemStartTitle>
                    <ItemStartSelect defaultValue={item.end} onChange={(event) => {
                            this.setState({
                                dateSlots: this.state.dateSlots.map((itemD) => {
                                    if(itemD.uniq == item.uniq){
                                        itemD.end = parseInt( event.target.value )
                                    }
                                    return itemD;
                                })
                            })
                    }}>
                        <option value={0}>Select time</option>
                        {[...Array.from(Array(24).keys())].map((itemOpt, index) => item.start < itemOpt+1 ? <option value={itemOpt+1} key={index}>{ (itemOpt + 1) > 12 ? ((itemOpt-12) + 1) + ' PM' : (itemOpt+1) + ' AM' }</option> : '')}
                    </ItemStartSelect>
                </div>
        )
    }

    _itemHours(item: any)
    {

        return (
            <div>
                <div className='text-center'>Total number of hours</div>
                <div className='bg-green-200 text-center rounded-md p-1 text-green-600'>
                    {item.end - item.start + 1} hours
                </div>
            </div>
        )
    }

    _summary()
    {

        const time = this.state.dateSlots.map((item) => {

            return (item.end - item.start) + 1
        }).reduce((a,b) => a + b),
        days = Math.floor(time/24),
        hours = time - (days * 24);

        const SummaryContainer =  tw.div`m-4 flex justify-between text-green-600 font-bold text-xs border-t border-green-600 pt-2`,
              DayFlex = tw.div`flex w-40 justify-between`;



        return (
            <SummaryContainer>
                <DayFlex>
                    <div>Total Day</div>
                    <div> {days} days</div>
                </DayFlex>
                <DayFlex>
                    <div>Total Hours</div>
                    <div>{hours} hours</div>
                </DayFlex>
            </SummaryContainer>
        )
    }


    _calenderModal()
    {


        return (
        <div id="authentication-modal" style={{display: this.state.dateViewUniq== null ? 'none':''}}  aria-hidden="true" className="bg-opacity-80	 bg-zinc-800 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex">
            <div className="relative w-full h-full max-w-md md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => {
                        this.setState({
                            dateViewUniq: null
                        })
                    }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <Calendar onChange={(date: any) => {
                            this.onDateChange(date)
                        }}/>
                    </div>
                </div>
            </div>
        </div> 
        )

    }



    _addDateModal()
    {


        return (
        <div id="authentication-modal" style={{display: false ? 'none':''}}  aria-hidden="true" className="bg-opacity-80	 bg-zinc-800 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex">
            <div className="relative w-full h-full max-w-md md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => {
                        this.setState({
                            dateViewUniq: null
                        })
                    }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                       

                       
                    </div>
                </div>
            </div>
        </div> 
        )

    }


    slideChange(uniq: any , type: string){

        let currentIndex = this.state.dateSlots.filter((item: any) => uniq == item.uniq)
        
        if(currentIndex.length > 0){

            let date = currentIndex[0].date,
                self = this;

            if(!(currentIndex[0].updatedAt.getTime() + 500 < new Date().getTime())){
                return;
            }

            date.setDate(type == 'prev' ? date.getDate() - 1 : date.getDate() + 1)
            

            self.setState({
                dateSlots: self.state.dateSlots.map((item) => {
                    if(item.uniq == uniq && new Date() != item.updatedAt){
                        item.date = date
                        item.updatedAt = new Date()
                    }
                    return item
                })
            })

        }
    }

    onDateChange(date: any)
    {

        this.setState({
            dateSlots: this.state.dateSlots.map((item) => {
                if(item.uniq == this.state.dateViewUniq){
                    item.date = date
                }
                return item
            }),
            dateViewUniq: null
        })
    }

    componentDidMount(){
       
    }

}

interface DateProps {
    $eClass: string
}

export default Header
