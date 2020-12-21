import { Col, Row } from 'antd'
import React from 'react'
import { Button } from 'antd';
import { Input, Select } from 'antd';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

const Buscador = () => {
    return (
        <div>
            <br/>
            <Row  justify="center">
                    <Col xs={22} sm={16} md={16}>
                        <div style={{ marginBottom: 16 }}>
                            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                        </div>
                    </Col>

                <Row justify="center">
                    <Col xs={24} sm={16} md={8}>
                        <Button type="primary"> Buscar </Button>
                    </Col>
                </Row>

            </Row>
        </div>
    )
}

export default Buscador