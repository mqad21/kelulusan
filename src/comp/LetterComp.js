import React, { Component } from 'react'
import Iframe from 'react-iframe';
import $ from 'jquery';
import Spinner from 'react-spinkit';

class Letter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            iframeUrl: `https://docs.google.com/gview?url=https://api.mqad21.my.id/spenduper/surat.php?data=${props.siswa.nama}_${props.siswa.no_ujian}_${props.siswa.status}&embedded=true`,
            iframeHeight: '1000px',
            random: 0
        }
    }

    componentDidMount() {
        var iframeHeight;
        var windowWidth = $(window).width();
        if (windowWidth > 768) {
            iframeHeight = '1400px'
        } else if (windowWidth <= 576) {
            iframeHeight = '500px'
        } else {
            iframeHeight = '1150px'
        }
        this.setState({
            iframeHeight: iframeHeight
        });

        var interval = setInterval(() => {
            if (this.state.isLoading) {
                this.resetIframe();
            } else {
                clearInterval(interval);
            }
        }, 10000);
    }

    resetIframe() {
        this.setState({
            random: this.state.random + 1
        })
    }

    render() {
        return (
            <div className="col-12 mt-4" >
                <div className="row justify-content-center" style={{
                    height: this.state.iframeHeight
                }}>
                    <div className="col-md-8">
                        {this.state.isLoading ? (
                            <Spinner name="line-scale" className="text-center mt-4" style={{
                                color: "#c2efcf"
                            }} />
                        ) : null}
                        <Iframe
                            key={this.state.random}
                            id="iframe-letter"
                            url={this.state.iframeUrl}
                            loading="eager"
                            onLoad={() => {
                                this.setState({
                                    isLoading: false
                                });
                            }}
                            importance="high"
                            width="100%"
                            height="100%"
                            frameBorder="0" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Letter;