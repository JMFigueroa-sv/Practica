import React from 'react'
import TiposLetras from './Pagina2/TiposLetras';
import Calendario from "./Pagina2/Calendario";
import { Col, Row } from 'antd';

const Pagina2 = () => {
    return (
        <div className="Flex">
            <Row justify="center">
                <Col xs={24} sm={12} md={12}>
                    <TiposLetras></TiposLetras>
                </Col>

                <Col xs={24} sm={12} md={12}>
                    <Calendario></Calendario>
                </Col>
            </Row>
        </div>
    )
}

export default Pagina2
