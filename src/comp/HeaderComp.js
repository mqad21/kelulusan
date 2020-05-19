import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    render() {
        const isIdle = this.props.isIdle;
        const status = !isIdle ? "folded" : "";

        return (
            <div className={"row mq-header " + status}>
                <div className="col-lg-2 col-md-3 col-12 my-auto logo-cont">
                    <div class="row">
                        <img className="logo my-auto mx-0 w-100" src="./assets/logo.png" />
                    </div>
                </div>
                <div className="col-lg-10 p-0 col-md-9 col-12 title-cont">
                    <h1 className="title">
                        Pengumuman Kelulusan
                    <br />
                        <span className="sub-title">
                            Siswa Kelas IX SMP Negeri 2 Perbaungan<br />
                        Tahun Pelajaran 2019/2020
                    </span>
                    </h1>
                </div>
                <div className="image-cont">
                    <img src="./assets/illustration.png" />
                </div>
            </div>
        );
    }
}

export default Header;