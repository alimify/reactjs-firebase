import { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDoc, collection, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { db } from "../../firebase";
import {AddBtn, AddDateModalBody, AddDateModalBtn, AddDateModalBtnContainer, AddDateModalCalenderContainer, AddDateModalContainer, AddDateModalContainerSub, AddDateModalContainerSubSub, AddDateModalSection, AddDateModalTimeSelect, AddDateModalTimeTitle, CalendarModalContainer, CalenderModalBody, CalenderModalBodyContainer, CalenderModalCloseBtn, CalenderModalCloseBtnTxt, CalenderModalContent, ItemDate, ItemDateDate, ItemDateDay, ItemDateDayName, ItemHoursContainer, ItemHoursCount, ItemHoursTitle, ItemStartSelect, ItemStartTitle, LoadingSpinnerContainer, SummaryContainer, SummaryDayFlex, SummaryDayFlexItem, TrackerContainer, TrackerListContainer, TrackerSummary, TrackerTitle, TrackerViewContainer, TrackItem, TrackItemColumnContainer, } from './ContainerWrapper'
import CrossIcon from '../../assets/cross.svg'
import LoadingSpinner from '../Common/Spinner';

class Header extends Component {
    state = {
        loading: true,
        dateSlots: [],
        timeSlots: [],
        currentDate: new Date(),
        dateViewUniq: null,
        dateViewVal: null,
        addDateModalShow: null,
        newDateVal: {
            uniq: null,
            start: 1,
            end: 5,
            date: new Date(),
            updatedAt: new Date(),
        }
    };
    constructor(props: any) {
        super(props);
    }


    render() {

        return (
            <TrackerContainer>
                <TrackerTitle>Time Tracker</TrackerTitle>
                <TrackerViewContainer>
                    <AddBtn onClick={() => this._addDateModalShow()}>
                        Add New Date
                    </AddBtn>
                    {this.state.loading ? this._loading() : this._listContainer()}
                    <TrackerSummary>{this._summary()}</TrackerSummary>
                </TrackerViewContainer>
                {this._calenderModal()}
                {this._addDateModal()}
            </TrackerContainer>
        )
    }
    
    async componentDidMount() {
        await this._getFirebaseData()
    }



    _loading(){

        return (
            <LoadingSpinnerContainer>
                    <LoadingSpinner/>
            </LoadingSpinnerContainer>
        )
    }



    _listContainer(){

        return (
            <TrackerListContainer>
                {this._list()}
            </TrackerListContainer>
        )
    }


    _list() {

        return this.state.dateSlots.map((item) => this._listItem(item))
    }

    _listItem(item: any) {

        return (
            <TrackItem key={item.uniq.toString()}>
                {this._itemDate(item)}
                {this._itemStart(item)}
                {this._itemEnd(item)}
                {this._itemHours(item)}
            </TrackItem>
        )
    }


    _itemDate(item: any) {

        return (
            <ItemDate>
                <ItemDateDay>Day</ItemDateDay>
                <Swiper navigation={true} modules={[Navigation]}
                    loop={true}
                    onSlidePrevTransitionEnd={() => this._slideChange(item.uniq, 'prev')}
                    onSlideNextTransitionEnd={() => this._slideChange(item.uniq, 'next')}>
                    <SwiperSlide key={(1).toString()} onClick={() => {
                        this.setState({
                            dateViewUniq: item.uniq,
                            dateViewVal: item.date
                        })
                    }}>
                        <ItemDateDate>{item.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', day: 'numeric' })}</ItemDateDate>
                        <ItemDateDayName>{item.date.toLocaleDateString('default', { weekday: 'long' })}</ItemDateDayName>
                    </SwiperSlide>
                    <SwiperSlide key={(2).toString()}>
                        <ItemDateDate>{item.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', day: 'numeric' })}</ItemDateDate>
                        <ItemDateDayName>{item.date.toLocaleDateString('default', { weekday: 'long' })}</ItemDateDayName>
                    </SwiperSlide>
                </Swiper>
            </ItemDate>
        )
    }



    _itemStart(item: any) {

        return (
            <TrackItemColumnContainer>
                <ItemStartTitle>Start Time</ItemStartTitle>
                <ItemStartSelect defaultValue={item.start} onChange={async (event) => {
                    this.setState({
                        dateSlots: this.state.dateSlots.map((itemD: any) => {
                            if (itemD.uniq == item.uniq) {
                                itemD.start = parseInt(event.target.value)
                            }
                            return itemD;
                        })
                    })
                    await this._updateFirebaseData(item.uniq)
                }}>
                    <option value={0}>Select time</option>
                    {[...Array.from(Array(24).keys())].map((itemOpt, index) => <option value={itemOpt + 1} key={index}>{(itemOpt + 1) > 12 ? ((itemOpt - 12) + 1) + ' PM' : (itemOpt + 1) + ' AM'}</option>)}
                </ItemStartSelect>
            </TrackItemColumnContainer>
        )
    }



    _itemEnd(item: any) {

        return (
            <TrackItemColumnContainer>

                <ItemStartTitle>End Time</ItemStartTitle>
                <ItemStartSelect defaultValue={item.end} onChange={async (event) => {
                    this.setState({
                        dateSlots: this.state.dateSlots.map((itemD: any) => {
                            if (itemD.uniq == item.uniq) {
                                itemD.end = parseInt(event.target.value)
                            }
                            return itemD;
                        })
                    })

                    await this._updateFirebaseData(item.uniq)
                }}>
                    <option value={0}>Select time</option>
                    {[...Array.from(Array(24).keys())].map((itemOpt, index) => item.start <= itemOpt + 1 ? <option value={itemOpt + 1} key={index}>{(itemOpt + 1) > 12 ? ((itemOpt - 12) + 1) + ' PM' : (itemOpt + 1) + ' AM'}</option> : '')}
                </ItemStartSelect>
            </TrackItemColumnContainer>
        )
    }



    _itemHours(item: any) {

        return (
            <ItemHoursContainer>
                <ItemHoursTitle>Total number of hours</ItemHoursTitle>
                <ItemHoursCount>{item.end - item.start + 1} hours</ItemHoursCount>
            </ItemHoursContainer>
        )
    }



    _summary() {

        const time = this.state.dateSlots.length > 0 ? this.state.dateSlots.map((item: any) => {

            return (item.end - item.start) + 1
        }).reduce((a, b) => a + b) : 0,
            days = Math.floor(time / 24),
            hours = time - (days * 24);

        return (
            <SummaryContainer>
                <SummaryDayFlex>
                    <SummaryDayFlexItem>Total Day</SummaryDayFlexItem>
                    <SummaryDayFlexItem> {days} days</SummaryDayFlexItem>
                </SummaryDayFlex>
                <SummaryDayFlex>
                    <SummaryDayFlexItem>Total Hours</SummaryDayFlexItem>
                    <SummaryDayFlexItem>{hours} hours</SummaryDayFlexItem>
                </SummaryDayFlex>
            </SummaryContainer>
        )
    }



    _calenderModal() {

        return (
            <CalendarModalContainer style={{ display: this.state.dateViewUniq == null ? 'none' : '' }}>
                <CalenderModalBodyContainer>
                    <CalenderModalBody>
                        <CalenderModalCloseBtn onClick={() => {
                            this.setState({
                                dateViewUniq: null,
                                dateViewVal: null,
                            })
                        }}>
                            <img src={CrossIcon} style={{height:'1.5rem', width: '1.5rem'}} />
                            <CalenderModalCloseBtnTxt>Close modal</CalenderModalCloseBtnTxt>
                        </CalenderModalCloseBtn>
                        <CalenderModalContent>
                            <Calendar onChange={(date: any) => {
                                this._onDateChange(date)
                            }} value={this.state.dateViewVal} />
                        </CalenderModalContent>
                    </CalenderModalBody>
                </CalenderModalBodyContainer>
            </CalendarModalContainer>
        )

    }

    _addDateModal() {

   

        return (
            <AddDateModalContainer style={{ display: this.state.addDateModalShow == null ? 'none' : '' }}>
                <AddDateModalContainerSub>
                    <AddDateModalContainerSubSub>
                        <CalenderModalCloseBtn onClick={() => {
                                this.setState({
                                    addDateModalShow: null
                                })
                            }}>
                                <img src={CrossIcon} style={{height:'1.5rem', width: '1.5rem'}} />
                                <CalenderModalCloseBtnTxt>Close modal</CalenderModalCloseBtnTxt>
                        </CalenderModalCloseBtn>
                        <AddDateModalBody>

                            <AddDateModalSection>
                                <AddDateModalTimeTitle> Date </AddDateModalTimeTitle>
                                <AddDateModalCalenderContainer>
                                <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.newDateVal.date} onChange={(date: any) => this.setState({
                                    newDateVal: {
                                        ...this.state.newDateVal,
                                        date: date
                                    }
                                })} />
                                </AddDateModalCalenderContainer>
                            </AddDateModalSection>


                            <AddDateModalSection>
                                <AddDateModalTimeTitle>Start Time</AddDateModalTimeTitle>
                                <AddDateModalTimeSelect onChange={(event) => {
                                    const timeData = {
                                        ...this.state.newDateVal,
                                        start: parseInt(event.target.value)
                                    };

                                    this.setState({
                                        newDateVal: timeData
                                    });
                                }} defaultValue={this.state.newDateVal.start}>
                                    <option value={0}>Select time</option>
                                    {[...Array.from(Array(24).keys())].map((itemOpt, index) => <option value={itemOpt + 1} key={index}>{(itemOpt + 1) > 12 ? ((itemOpt - 12) + 1) + ' PM' : (itemOpt + 1) + ' AM'}</option>)}
                                </AddDateModalTimeSelect>
                            </AddDateModalSection>


                            <AddDateModalSection>
                                <AddDateModalTimeTitle>End Time</AddDateModalTimeTitle>
                                <AddDateModalTimeSelect onChange={(event) => {

                                    const timeData = {
                                        ...this.state.newDateVal,
                                        end: parseInt(event.target.value)
                                    };

                                    this.setState({
                                        newDateVal: timeData
                                    });

                                }} defaultValue={this.state.newDateVal.end}>
                                    <option value={0}>Select time</option>
                                    {[...Array.from(Array(24).keys())].map((itemOpt, index) => this.state.newDateVal.start < itemOpt + 1 ? <option value={itemOpt + 1} key={index}>{(itemOpt + 1) > 12 ? ((itemOpt - 12) + 1) + ' PM' : (itemOpt + 1) + ' AM'}</option> : '')}
                                </AddDateModalTimeSelect>
                            </AddDateModalSection>


                            <AddDateModalBtnContainer>
                                <AddDateModalBtn onClick={() => {
                                    this._submitDateAdd()
                                }}>
                                    ADD
                                </AddDateModalBtn>
                            </AddDateModalBtnContainer>

                        </AddDateModalBody>
                    </AddDateModalContainerSubSub>
                </AddDateModalContainerSub>
            </AddDateModalContainer>
        )

    }




    async _slideChange(uniq: any, type: string) {

        let currentIndex: any = this.state.dateSlots.filter((item: any) => uniq == item.uniq)

        if (currentIndex.length > 0) {

            let date = currentIndex[0].date,
                self = this;

            if (!(currentIndex[0].updatedAt.getTime() + 500 < new Date().getTime())) {
                return;
            }

            date.setDate(type == 'prev' ? date.getDate() - 1 : date.getDate() + 1)


            self.setState({
                dateSlots: self.state.dateSlots.map((item: any) => {
                    if (item.uniq == uniq && new Date() != item.updatedAt) {
                        item.date = date
                        item.updatedAt = new Date()
                    }
                    return item
                })
            })

            await self._updateFirebaseData(uniq)

        }
    }



    async _onDateChange(date: any) {
        const uniq: any = this.state.dateViewUniq
        this.setState({
            dateSlots: this.state.dateSlots.map((item: any) => {
                if (item.uniq == uniq) {
                    item.date = date
                }
                return item
            }),
            dateViewUniq: null
        })

        await this._updateFirebaseData(uniq)
    }



    _addDateModalShow() {

        this.setState({
            addDateModalShow: new Date().getTime()
        })

    }



    async _submitDateAdd() {

        this.setState({ newDateVal: {
            ...this.state.newDateVal,
            updatedAt: new Date(),
            uniq: new Date().getTime()
        }})
        this.setState({
            addDateModalShow: null,
        })
        await this._addFirebaseData()
    }



    async _getFirebaseData() {

        this.setState({
            loading: true
        })

        const q = query(collection(db, 'inmogr_dates'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let dataRR: any = []
            querySnapshot.forEach((doc) => {
                dataRR.push({
                    ...doc.data(),
                    uniq: doc.id,
                    date: doc.data().date.toDate(),
                    updatedAt: doc.data().updatedAt.toDate(),
                })
            })
            this.setState({
                dateSlots: dataRR,
                loading: false
            })

            return () => unsubscribe()
        })

    }



    async _addFirebaseData() {
        this.setState({
            loading: true
        })
        
        await addDoc(collection(db, 'inmogr_dates'), this.state.newDateVal);

        this.setState({
            loading: false
        })
    }



    async _updateFirebaseData(uniq: string) {

        this.setState({
            loading: true
        })

        const data = this.state.dateSlots.filter((item: any) => item.uniq == uniq)
        if (data.length > 0) {
            await updateDoc(doc(db, 'inmogr_dates', uniq), data[0])
        }

        this.setState({
            loading: false
        })


    }


}

export default Header
