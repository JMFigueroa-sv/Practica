import { Col, Row } from 'antd';
import React, {useState, useEffect} from 'react';

function Api() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState ()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON )
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="Api">
        { !todos ? 'Cargando...' : 
        todos.map((todo,index)=>{
        return <div key={index}>
            <Row justify="center">
                <Col xs={24} sm={18} md={12} className="texto">
                    <h3 className="text" >{todo.id}</h3>
                    <h3 className="text">{todo.title}</h3>
                </Col>
            </Row>
          </div>
          }) }
    </div>
  );
}

export default Api;