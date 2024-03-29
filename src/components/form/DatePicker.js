import React, {Component} from 'react';
import {formateDate, formateDateFull} from "../../util/metodosUteis";

class DatePicker extends Component {

    calendar = React.createRef();
    requiredLabel = this.props.required ? <span className={'required'}>{' *'}</span> : null;

    constructor(props) {
        super(props);

        this.state = {
            today: new Date(),
            dateController: new Date(),
            value: props.input.value,
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

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick)
    }

    componentDidMount() {
        setTimeout(()=> {
            if(this.props.input.value) this.setState({value: new Date(Date.parse(this.props.input.value))})
        }, 1000);
        document.addEventListener('mousedown', this.handleClick)
    }

    handleClick = e => {
        if (!this.calendar.current.contains(e.target) && !this.state.focus)
          setTimeout(() => this.setState({visible: false}), 300)
    };

    showCalendar = () => {
        const month = this.state.dateController.getMonth();
        const year = this.state.dateController.getFullYear();
        let daysRendered = [];
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const lastDay = new Date(year, month, daysInMonth).getDay();
        const daysPreviousMonth = new Date(year, month, 0).getDate();
        daysRendered.push(<div className={'linha'} key={1}>{this.generatePreviousDaysCalendar(daysPreviousMonth, firstDay)}</div>);
        this.genetareCenterDaysCalendar(daysInMonth, firstDay, lastDay).forEach((v, i) => daysRendered.push(React.cloneElement(v, {key: i + 2})));
        if (lastDay !== 6) daysRendered.push(<div className={'linha'} key={5}>{this.generateLastDaysCalendar(daysInMonth, lastDay)}</div>);
        return daysRendered
    };

    generatePreviousDaysCalendar = (daysPreviousMonth, firstDay) => {
        let days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(React.cloneElement(<div key={i + 40} className={'dia other-month'}>{daysPreviousMonth - i}</div>))
        }
        days = days.reverse();
        for (let i = firstDay; i <= 6; i++) {
            const day = i - (firstDay - 1);
            days.push(React.cloneElement(<div className={'dia ' + this.activeClass(day)} onClick={() => this.changeDate(day)}
                                              key={day}>{day}</div>))
        }
        return days
    };

    changeDate = day => this.setState({value: new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth(), day)}, () => {
        this.props.input.value = this.state.value;
        this.props.input.onChange(this.state.value)
        //setTimeout(() => this.setState({visible: false}), 200)
    });

    activeClass = day =>
        this.state.value ? this.state.value.setHours(0, 0, 0, 0) === new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth(), day).setHours(0, 0, 0, 0) ? 'active' : null
            : this.state.today.setHours(0, 0, 0, 0) === new Date(this.state.dateController.getFullYear(), this.state.dateController.getMonth(), day).setHours(0, 0, 0, 0) ? 'active' : null;

    genetareCenterDaysCalendar = (monthDays, firstDay, lastDay) => {
        const days = [];
        let totalDays = monthDays - ((6 - firstDay) + (6 - lastDay));
        if (firstDay === 6 && lastDay === 0) totalDays = totalDays + 7;

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
        const v = this.state.value && this.state.value instanceof Date ? formateDate(this.state.value) : this.state.value ? formateDateFull(this.state.value) : '';
        if (this.state.formateDate !== v)
            this.setState({formateDate: v});
        return (
            <div ref={this.calendar} className={'datepicker'}>
                <div className={'input-container'}>
                    <label className={'input-label'}>{this.props.label}{this.requiredLabel}</label>
                    <div className={'datepicker-input-container input-margin'}>
                        <input onFocus={() => this.setState({visible: true, focus: true})} onBlur={() => {
                            this.setState({focus: false}, () => {
                                //setTimeout(() => this.setState({visible: false}), 400)
                            })
                        }} placeholder={'dd/mm/yyyy'}
                               readOnly={true} value={this.state.formateDate} className={'input'}/>
                        <div className={'icon'} onClick={() => this.setState({visible: !this.state.visible})}>
                            <i className="far fa-calendar-alt"/>
                        </div>

                        {this.state.visible &&
                        <>
                            <div className={'tooltip'}/>
                            <div className={'container'}>
                                <div className={'header'}>
                                    <i className="fas fa-caret-left" onClick={this.previous}/>
                                    <div className={'mes'}>{`${this.state.months[this.state.dateController.getMonth()]} - ${this.state.dateController.getFullYear()}`}</div>
                                    <i className="fas fa-caret-right" onClick={this.next}/>
                                </div>
                                <div className={'body-container'}>
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
                            </div>
                        </>}

                    </div>
                    {this.props.detail}
                </div>


            </div>
        );
    }
}

export default DatePicker;
