import React, {Component} from 'react';
import CardSimples from "./card/CardSimples";
import Buttom from "./Buttom";
import {parseDate} from "../util/metodosUteis";


class Calendar extends Component {

    calendar = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            today: new Date(),
            dateController: new Date(),
            value: '',
            formateDate: '',
            visible: false,
            focus: false,
            months: [
                'Janeiro',
                'Fevereiro',
                'Marco',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
            ],
        }

    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick)
    }

    handleClick = e => {

    };


    showCalendar = () => {
        const month = this.state.dateController.getMonth();
        const year = this.state.dateController.getFullYear();
        let daysRendered = [];
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const lastDay = new Date(year, month, daysInMonth).getDay();
        const daysPreviousMonth = new Date(year, month, 0).getDate();
        daysRendered.push(<div className={'linha'} key={1}>{this.generatePreviousDaysCalendar(daysPreviousMonth, firstDay, year, month)}</div>);
        this.genetareCenterDaysCalendar(daysInMonth, firstDay, lastDay).forEach((v, i) => daysRendered.push(React.cloneElement(v, {key: i + 2})));
        if(lastDay !== 6) daysRendered.push(<div className={'linha'} key={5}>{this.generateLastDaysCalendar(daysInMonth, lastDay)}</div>);
        return daysRendered
    };

    generatePreviousDaysCalendar = (daysPreviousMonth, firstDay, year, month) => {
        let days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(React.cloneElement(<div key={i + 40} className={'dia other-month'}>{daysPreviousMonth - i}</div>))
        }
        days = days.reverse();
        for (let i = firstDay; i <= 6; i++) {
            const day = i - (firstDay - 1);
            let dayRendered = React.cloneElement(<div className={'dia ' + this.activeClass(day)} onClick={() => this.changeDate(day)}
                                                      key={day}><span style={{border: 'none'}}>{day}</span></div>);
            const {lembretes} = this.props;
            if (lembretes && lembretes.length > 0) {
                const lemb = lembretes.filter(v => {
                    const temp = parseDate(v.inicio);
                    const d = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate(), 0, 0, 0, 0);
                    const current = new Date(year, month, day, 0, 0, 0, 0);
                    if (d.getTime() === current.getTime()) return v
                });
                if (lemb.length) {
                    dayRendered = React.cloneElement(dayRendered, {
                        children: [...React.Children.map(dayRendered, d => d.props.children),
                            ...lemb.map(v => <div style={{backgroundColor: getLembreteColor(v)}} className={'lembrete'} key={v.id}>{v.titulo}</div>)]
                    })
                }
            }
            days.push(dayRendered)
        }
        return days
    };

    changeDate = day => {
    };

    activeClass = day =>
        this.state.value ? this.state.value.setHours(0, 0, 0, 0) === new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth(), day).setHours(0, 0, 0, 0) ? 'active' : null
            : this.state.today.setHours(0, 0, 0, 0) === new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth(), day).setHours(0, 0, 0, 0) ? 'active' : null;

    genetareCenterDaysCalendar = (monthDays, firstDay, lastDay) => {
        let days = [];
        const totalDays = monthDays - ((6 - firstDay) + (6 - lastDay));
        let arr = Array.apply(0, Array(totalDays)).map((_, i) => (8 - firstDay) + i);

        while (arr.length >= 3) {
            if(arr.length >= 7) {
            days.push(<div className={'linha'}>
                {arr.splice(0, 7).map((v, i) =>
                    <div className={'dia ' + this.activeClass(v)} key={v} onClick={() => this.changeDate(v)}>{v}</div>)}
            </div>)
            } else if (arr[arr.length - 1] < 29 && firstDay === 0) {
                let restArr = [];
                let lastValue = 0;
                for (let i = 0; i < 7; i++) {
                    if (arr[i]) {
                        lastValue = arr[i];
                        restArr.push(arr[i])
                    } else {
                        lastValue++;
                        restArr.push(lastValue)
                    }
                }
                days.push(<div className={'linha'}>
                    {restArr.map((v, i) =>
                        <div className={'dia ' + this.activeClass(v)} key={v} onClick={() => this.changeDate(v)}>{v}</div>)}
                </div>)
                arr = []
            } else {
                arr = []
            }
        }
        return days
    };

    generateLastDaysCalendar = (lastMonthDay, lastWeekDay) => {
        let days = [];
        for (let i = 0; i <= lastWeekDay; i++) {
            const day = lastMonthDay - i;
            days.push(React.cloneElement(<div className={'dia ' + this.activeClass(day)} onClick={() => this.changeDate(day)}
                                              key={day}>{day}</div>))
        }
        days = days.reverse();
        for (let i = lastWeekDay; i < 6; i++) {
            days.push(React.cloneElement(<div key={i + 60} className={'dia other-month'}>{i - (lastWeekDay - 1)}</div>))
        }
        return days
    };

    previous = () => this.setState({dateController: new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth() - 1, 20)});

    next = () => this.setState({dateController: new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth() + 1, 20)});


    render() {

        return (
            <CardSimples>

                <div className={'calendar-header'}>
                    <div className={'data-actions'}>
                        <Buttom color={'gray'} icon label={<i className="fas fa-angle-left"/>} onClick={this.previous.bind(this)}/>
                        <span className={'title'}>{`${this.state.months[this.state.dateController.getMonth()]} - ${this.state.dateController.getFullYear()}`}</span>
                        <Buttom color={'gray'} icon label={<i className="fas fa-angle-right"/>} onClick={this.next.bind(this)}/>
                    </div>

                    <div className={'botoes-calendar'}>
                        {/*
                    <Buttom color={'gray'} label={'Dia'} icon/>
                    <Buttom color={'blue'} label={'Mes'} icon/>
                    <Buttom color={'gray'} label={'Ano'} icon/>
                    */}
                    </div>

                </div>


                <div className={'calendar'}>
                    <div className={'header'}>
                        <div className={'linha'}>
                            <div className={'dia-header'}>dom</div>
                            <div className={'dia-header'}>seg</div>
                            <div className={'dia-header'}>ter</div>
                            <div className={'dia-header'}>qua</div>
                            <div className={'dia-header'}>qui</div>
                            <div className={'dia-header'}>sex</div>
                            <div className={'dia-header'}>sab</div>
                        </div>
                    </div>

                    {this.showCalendar()}
                </div>

            </CardSimples>
        );
    };
}

export default Calendar;


const getLembreteColor = v => 'rgba(229, 64, 66, .6)';
