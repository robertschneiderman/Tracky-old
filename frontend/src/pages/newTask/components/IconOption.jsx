import React, {Component} from 'react';
import icons from './icons';

class IconOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };
    }

    handleSelection(icon) {
        let { dispatches } = this.props;
        dispatches.changeNewTaskField({icon});
        this.setState({popup: false});
    }

    handleClick() {
        this.setState({popup: true});
    }

    closePopup() {
        this.setState({popup: false});
    }

    renderTaskIcons() {
        let result = [];
        let nextIcons = [];
        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i];
            nextIcons.push(<img className="icn-task" key={`icfs-${i}`} onClick={this.handleSelection.bind(this, icon)} src={`./static/images/task_icons/${icon}.svg`} />);
            if ((i+1) % 7 === 0 || i === icons.length - 1) {
                result.push(
                    <div className="c-task-icons" key={`sdff-${i}`}>{nextIcons}</div>
                );
                nextIcons = [];
            }
        }
        return result;
    }

    render() {
        let { icon } = this.props;
        let { popup } = this.state;
        let value = (icon) ? <img className="icn-task-chosen" src={`./static/images/task_icons/${icon}.svg`} /> : undefined;
        return(
            <div className="c-icon-option">
                <label className="label-icon-option">Icon:</label>
                <button className="input-icon-option" onClick={this.handleClick.bind(this)}>
                    {value}
                </button>
                {(popup) ?
                    [<div className="c-task-icons-popup" key="j32k2">
                        {this.renderTaskIcons()}
                    </div>,
                    <div onClick={this.closePopup.bind(this)} key="2k20" className="modal-overlay"></div>]
                : ''}
            </div>
        );
                // <TaskIconsPopup handleSelection={handleSelection} />
    }
}

export default IconOption;
