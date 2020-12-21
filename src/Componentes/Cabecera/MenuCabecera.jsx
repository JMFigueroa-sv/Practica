import React from 'react'
import { Layout, Menu } from 'antd';
import Logo from './Logo';
import "../Estilos.css";

const { Header} = Layout;

const MenuCabecera = () => {
    return (
        <div>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item> <Logo/> </Menu.Item>
                    <Menu.Item> Ejemplo Api </Menu.Item>
                    <Menu.Item> Pagina 1 </Menu.Item>
                    <Menu.Item> Pagina 2 </Menu.Item>
                    <Menu.Item>Formulario</Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}

export default MenuCabecera