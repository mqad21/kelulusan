import React from 'react'

function Error(props) {
    return (
        <div className="col-12 text-center py-4">
            <img className="mq-not-found" src="./assets/not_found.svg" alt="Not Found"/>
            <h4>Hasil tidak ditemukan.</h4>
        </div>
    )
}

export default Error;