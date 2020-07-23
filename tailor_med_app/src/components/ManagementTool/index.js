import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {
    update,
    getFoundationsData
} from '../../api/management_tool';
import FoundationsList from "./FoundationsList";

class ManagementTool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foundations: {},
        };
    }

    handleUpdateClick = (event) => {
        event.preventDefault();
        update();
    };

    handleFetchDataClick = async (event) => {
        event.preventDefault();
        const foundations = await getFoundationsData();
        this.setState({
            foundations
        });
    };

    render() {
        const {foundations} = this.state;
        return (
            <div className={'ManagementTool'}>
                <Button onClick={this.handleUpdateClick}>Update</Button>
                <Button onClick={this.handleFetchDataClick}>FetchData</Button>
                <FoundationsList foundations={foundations}/>
            </div>
        );
    }
}

export default ManagementTool;