import React, {Component, createRef} from 'react';

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.canvas = createRef();
        this.container = createRef();

        this.state = {
            width: 0,
            height: 0,
            data: props.data,
            maxValue: Math.max.apply(Math, props.data.map(o => o.value)),
            maxBarSize: 0,
            lightColor: '#EDEEF0',
            fillColor: '#4F8EDC',
            margin: 20,
        }
    }

    componentDidMount() {
        const height = this.container.current.offsetHeight;
        const width = this.container.current.offsetWidth;
        this.setState({
            width,
            height,
            qtdVerticalLabels: 6,
            intervalHorizontal: width / this.state.data.length,
        }, () => {
            this.cx = this.canvas.current.getContext('2d');
            this.drawBorder();
            this.drawLabels();
            this.drawBars()
        })

    }

    renderCanvas = () =>
        this.state.width > 0 ? <canvas ref={this.canvas} width={this.state.width} height={this.state.height}/> : null;


    drawBorder = () => {
        this.cx.beginPath();
        this.cx.strokeStyle = this.state.lightColor;
        this.cx.moveTo(this.state.margin, this.state.margin);
        this.cx.lineTo(this.state.margin, this.state.height - this.state.margin);

        this.cx.moveTo(this.state.margin, this.state.height - this.state.margin);
        this.cx.lineTo(this.state.width, this.state.height - this.state.margin);

        const intervalVertivalLabels = this.state.height / this.state.qtdVerticalLabels;
        for (let i = 1; i < this.state.qtdVerticalLabels; i++) {
            this.cx.moveTo(this.state.margin, (intervalVertivalLabels * i) - this.state.margin);
            this.cx.lineTo(this.state.width, (intervalVertivalLabels * i) - this.state.margin)
        }
        this.cx.stroke()
    };

    drawLabels = () => {
        const value = this.state.maxValue / 6;
        const intervalVertivalLabels = this.state.height / this.state.qtdVerticalLabels;
        this.cx.font = '12px';
        this.cx.fillText(0, 0, this.state.height - this.state.margin);
        this.cx.fillText(value.toFixed(1), 0, (this.state.height - intervalVertivalLabels) - this.state.margin);
        this.cx.fillText((value * 2).toFixed(1), 0, (this.state.height - intervalVertivalLabels * 2) - this.state.margin);
        this.cx.fillText((value * 3).toFixed(1), 0, (this.state.height - intervalVertivalLabels * 3) - this.state.margin);
        this.cx.fillText((value * 4).toFixed(1), 0, (this.state.height - intervalVertivalLabels * 4) - this.state.margin);
        this.cx.fillText(this.state.maxValue.toFixed(1), 0, (this.state.height - intervalVertivalLabels * 5) - this.state.margin);

        for (let i = 0; i < this.state.data.length; i++) {
            this.cx.fillText(this.state.data[i].label, this.state.intervalHorizontal * (i + .5), this.state.height)
        }

    };

    drawBars = () => {
        this.cx.stroke();
        this.state.data.forEach((v, i) => {
            const percent = Math.abs(((v.value / this.state.maxValue) * 100) - 100);
            let height = (this.state.height * percent) / 100;
            this.cx.fillStyle = this.state.fillColor;
            this.cx.fillRect(this.state.intervalHorizontal * (i + .4), height - this.state.margin, this.state.width / 13, Math.abs(this.state.height - height))
        })
    };

    render() {

        return (
            <div ref={this.container} style={{width: '100%', height: '100%'}}>
                <h2>{this.props.title}</h2>
                {this.renderCanvas()}
            </div>
        );

    }

}

export default BarChart;
