import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Clientes',
    subtitle: 'Cadastro de clientes'
}

export default class ClienteCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Cliente
            </Main>
        )
    }
}