import React, {Component} from 'react';
class IncrementBtns extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { callback } = this.props;        
        return(
            <div className="w-incrementer-btns">
                <img onClick={callback.bind(this, 1)} src="./static/images/task_icons/up_arrow.svg" className="btn-incrementer-btn" />
                <img onClick={callback.bind(this, -1)} src="./static/images/task_icons/down_arrow.svg" className="btn-incrementer-btn" />
            </div>
        );
    }
}

export default IncrementBtns;