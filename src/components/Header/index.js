import React from 'react'

import Col from "../Col"
import Row from "../Row"
import "./style.css"

function Header() {

    return (
        <Row className="top">
            <Col size="col s12">

                <div id="title" className="center-align">
                    <img id="logo" src="https://images-na.ssl-images-amazon.com/images/I/81fqvwboQKL._AC_SX425_.jpg"/>
                    <h2 id="roster">2019 Roster</h2>
                </div>
            </Col>
        </Row>


    )
}

export default Header