import React, {Component} from "react";
import FoundationListItem from "./FoundationListItem";

class FoundationsList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {foundations} = this.props;
        console.log(foundations);
        return (
            <ul className='FoundationsList'>
                {Object.keys(foundations).map(foundation => <FoundationListItem name={foundation}
                                                                                key={foundation}
                                                                                foundationData={foundations[foundation]}/>)}
            </ul>
        );
    }
}

export default FoundationsList;