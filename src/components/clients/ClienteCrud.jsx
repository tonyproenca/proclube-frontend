import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Clientes',
    subtitle: 'Cadastro de clientes'
}

const baseUrl = 'http://localhost:8080/clientes'
const initialState = {
    cliente: {
        id: '',
        firstName: '',
        lastName: '',        
    },
    list: []
}



export default class ClienteCrud extends Component {

    state = { ...initialState }

    clear(){
        this.setState({ cliente: initialState.cliente })
    }

    save() {
        const cliente = this.state.cliente
        const method = cliente.id ? 'put' : 'post'
        const url = cliente.id ? `${baseUrl}/${cliente.id}` : baseUrl
        axios[method](url, cliente)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ cliente: initialState.cliente, list})
            })
    }

    getUpdatedList(cliente){
        const list = this.state.list.filter(c => c.id !== cliente.id)
        list.unshift(cliente)
        return list
    }

    updateField(event){
        const cliente = {...this.state.cliente }
        cliente[event.target.name] = event.target.value
        this.setState(cliente)
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Cliente
            </Main>
        )
    }
}