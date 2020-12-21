import React from 'react'
import { Calendar, Col, Row } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

const Calendario = () => {
    return (
        <div>
            <Row justify="end">
                <Col xs={22} sm={22} md={22}>
                    <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Calendario
