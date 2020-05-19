import React, { Component } from 'react';
import Search from "./SearchComp";
import Letter from './LetterComp'
import Loading from './LoadingComp'
import Error from './ErrorComp';

class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null
        }
    }

    Result = (action) => {
        if (action == "search") {
            return <Loading />
        } else if (action == "found") {
            return <Letter siswa={this.props.siswa} />;
        } else if (action == "error") {
            return (<Error errMess={this.props.errMess}/>)
        }
        return null;
    }

    render() {
        return (
            <div className="row mq-body">
                <Search checkNis={this.props.checkNis} isIdle={this.props.isIdle} />
                {this.Result(this.props.action)}
            </div>
        );
    }
}

export default Body;