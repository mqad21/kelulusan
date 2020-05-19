import React, { Component } from 'react'
import { Container } from "reactstrap";
import Header from "./HeaderComp";
import Body from "./BodyComp";
import Footer from "./FooterComp";
import $ from 'jquery';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            action: null,
            isIdle: true,
            siswa: null,
            errMess: null
        }
    }

    componentDidMount() {
        $(".mq-search").on('focus blur', () => {
            $(".mq-search-cont").addClass("shadow-lg");
            this.setState({
                isIdle: true
            });
        }).focusout(() => {
            $(".mq-search-cont").removeClass("shadow-lg");
        })
    }

    changeAction = (action) => {
        this.setState({
            action: action,
            isIdle: false
        });
    }

    checkNis = (query) => {
        this.changeAction("search");
        this.getSiswa(query.value);
    }

    getSiswa = (nisn) => {
        return fetch("http://kelulusan.smpn2perbaungan.sch.id/api/?id=" + nisn)
            .then(response => {
                if (response.ok) {
                    return response
                } else {
                    var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
            .then(response => response.json())
            .then(siswa => {
                this.setState({
                    siswa: {
                        nama: siswa.nama,
                        no_ujian: siswa.no_ujian,
                        status: siswa.status
                    },
                    action: "found"
                });
            })
            .catch(() => {
                this.setState({
                    action: "error",
                    errMess: "Hasil tidak ditemukan."
                })
            })
    }

    render() {
        return (
            <div className="mq-cont">
                <Header action={this.state.action} isIdle={this.state.isIdle} />
                <Body action={this.state.action} checkNis={this.checkNis} isIdle={this.state.isIdle} siswa={this.state.siswa} errMess={this.state.errMess} />
                <Footer />
            </div>
        );
    }

}

export default Main;