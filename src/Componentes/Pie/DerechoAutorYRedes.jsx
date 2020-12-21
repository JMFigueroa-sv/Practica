import { Row, Col, Layout } from 'antd'
import React from 'react'
import RedesSociales from './RedesSociales';

const { Footer } = Layout;

const DerechosAutorYRedes = () => {
    return (
        <div>
            <Layout className="Layout">
                <Row justify="center">
                    <Col xs={24} sm={24} md={24}>

                        <Footer className="Flex">
                        <Col xs={10} sm={10} md={10}>
                            <RedesSociales></RedesSociales>
                        </Col>

                        <Col xs={14} sm={14} md={14}>
                            Ant Design ©2020 - Created by José Figueroa
                        </Col>
                        </Footer>   

                    </Col>
                </Row>  
            </Layout> 
        </div>
    )
}

export default DerechosAutorYRedes