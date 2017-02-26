import React, {Component} from 'react';

class ColorOption extends Component {
    constructor(props) {
        super(props);
    }

    selectColor(color) {
        this.props.dispatches.changeNewTaskField('color', color);
    }    

    renderColorOptions() {
        let { selectedColor } = this.props;
        let colorOptions = ['red', 'orange', 'green', 'blue', 'yellow', 'teal', 'grey', 'purple'];
        return colorOptions.map((color, i) => {
            let className=`btn-choose-color ${color}`;
            if (selectedColor === color) className += ' selected';
            return <button key={`color-${i}`} className={className} onClick={this.selectColor.bind(this, color)}></button>;
        });
    }

    render() {
        return(
            <div className="c-color-options">
                {this.renderColorOptions()}
            </div>
        );
    }
}

export default ColorOption;