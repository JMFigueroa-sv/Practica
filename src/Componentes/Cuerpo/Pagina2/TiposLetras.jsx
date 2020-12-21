import React from 'react'
import { Typography, Col, Row } from 'antd';

const { Text } = Typography;

const TiposLetras = () => {
    return (
        <div>
            <Row justify="center">
                <Col xs={22} sm={22} md={22}>
                    <h3>Tipos de textos</h3>
                    <Text>Texto de Prueba (defecto)</Text> 
                    <br/>
                    <Text type="secondary">Texto de Prueba (secundario)</Text>
                    <br/>
                    <Text type="success">Texto de Prueba (exito)</Text>
                    <br/>
                    <Text type="warning">Texto de Prueba (advertencia)</Text>
                    <br/>
                    <Text type="danger">Texto de Prueba (peligro)</Text>
                    <br/>
                    <Text disabled>Texto de Prueba (desabilitado)</Text>
                    <br/>
                    <Text mark>Texto de Prueba (marcado)</Text>
                    <br/>
                    <Text strong>Texto de Prueba (negrita)</Text>
                </Col>
            </Row>
        </div>
    )
}

export default TiposLetras