import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button, Form } from 'reactstrap';
import { Search as IconSearch, AlertTriangle } from "react-feather";

class Search extends Component {

    handleSearch = (event) => {
        var query = this.query;
        if (query != null) {
            this.props.checkNis(query);
        }
        event.preventDefault();
    }

    render() {
        const isIdle = this.props.isIdle;
        const status = !isIdle ? "folded" : "";

        return (
            <div className="col-12 col-lg-8 mx-auto">
                <Form onSubmit={this.handleSearch}>
                    <InputGroup className={"mq-search-cont " + status + " shadow"}>
                        <InputGroupAddon addonType="prepend" className="mq-search-prep row">
                            <IconSearch className="my-auto"/>
                        </InputGroupAddon>
                        <Input required type="number" name="query" className="mq-search" innerRef={(input) => this.query = input} placeholder="Masukkan NISN Kamu" />
                        <InputGroupAddon addonType="prepend">
                            <Button type="submit" className="mq-search-btn">Cari</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        );
    }

}


export default Search;