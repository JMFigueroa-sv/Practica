import { Col, Row } from 'antd'
import React from 'react'

const Imagen = () => {
    return (
        <div>
            <Row justify="center">
                <Col xs={24} sm={24} md={24}>
                    <img className="Ideaimg" src="https://image.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg"
                     alt="Imagen Idea" title="Idea" width="300px"/>
                </Col>
            </Row>
        </div>
    )
}

export default Imagen