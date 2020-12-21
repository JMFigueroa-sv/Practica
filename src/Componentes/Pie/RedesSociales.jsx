import { Col, Row } from 'antd'
import React from 'react'

import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined
  } from '@ant-design/icons';

const RedesSociales = () => {
    return (
        <div className="icons-list">
            <Row justify="start">
                <Col xs={24} sm={24} md={24}>
                    <center>
                        
                        <a href="http://youtube.com" target="noreferrer" className="Boton" title="YouTube"> 
                            <YoutubeOutlined /> 
                        </a>

                        <a href="http://facebook.com" target="noreferer" className="Boton" title="Facebook"> 
                            <FacebookOutlined /> 
                        </a>

                        <a href="http://instagram.com" target="noreferer" className="Boton" title="Instagram">
                            <InstagramOutlined></InstagramOutlined>
                        </a>

                        <a href="http://twitter.com" target="noreferer" className="Boton" title="Twitter">
                            <TwitterOutlined></TwitterOutlined>
                        </a>

                        <a href="http://github.com" target="noreferer" className="Boton" title="GitHub">
                            <GithubOutlined></GithubOutlined>
                        </a>
                    </center>
                </Col>
            </Row>
        </div>
    )
}

export default RedesSociales