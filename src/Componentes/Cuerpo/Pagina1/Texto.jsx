import { Col, Divider, Row } from 'antd'
import React from 'react'
import Imagen from './Imagen'

const Texto = () => {
    return (
        <div>
            <Row justify="center">
                <Imagen></Imagen>
                <Col xs={22} sm={20} md={14} className="Texto">
                    <center><h1>Nombre del parrafo</h1></center>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium, magnam dolorum eveniet incidunt, deserunt reiciendis porro eos 
                        officiis corporis beatae harum tempore officia, iure voluptatem natus odit. 
                        Quasi, esse incidunt.
                    </p>
                    <Divider dashed></Divider>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Optio quis ratione, architecto odit exercitationem hic voluptatum magni qui 
                        beatae ad! Debitis aliquam veritatis, quos delectus illo possimus modi eaque et.
                    </p>
                    <Divider></Divider>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aspernatur 
                        maxime! Beatae excepturi nobis officia provident tempora odit molestiae vel 
                        neque amet porro ullam eum perspiciatis deleniti maxime, totam similique?
                    </p>
                    <br/>
                </Col>
            </Row>
        </div>
    )
}

export default Texto
