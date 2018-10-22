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
        cpf: '',
        rg: '',
        email: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        cidadeId: '',
        telefone1: '',
        telefone2: '',
        telefone3: '',
        tipo: null,
        conta: '',
        agencia: '',
        banco: '',
        responsavelId: null
    },
    list: []
}



export default class ClienteCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ cliente: initialState.cliente })
    }

    save() {
        const cliente = this.state.cliente
        const method = cliente.id ? 'put' : 'post'
        const url = cliente.id ? `${baseUrl}/${cliente.id}` : baseUrl
        axios[method](url, cliente)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ cliente: initialState.cliente, list })
            })
    }

    getUpdatedList(cliente) {
        const list = this.state.list.filter(c => c.id !== cliente.id)
        list.unshift(cliente)
        return list
    }

    updateField(event) {
        const cliente = { ...this.state.cliente }
        cliente[event.target.name] = event.target.value
        this.setState({ cliente })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Nome</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.firstName}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Sobrenome</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.lastName}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o sobrenome..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>CPF</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.cpf}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o CPF..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>RG</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.rg}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o RG..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Email</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.lastName}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Email..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Tipo</label>
                        <input type="number" className="form-control"
                            name="name"
                            value={this.state.cliente.tipo}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Tipo (0 para dependente, 1 para Responsável, 2 para patrocinador..." />
                    </div>
                </div>

                <br />
                <br />
                <h6>Endereço:</h6>
                <br />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Logradouro</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.logradouro}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o logradouro..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Numero</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.numero}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o numero..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Complemento</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.complemento}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o complemento..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Bairro</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.bairro}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o bairro..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>CEP</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.cep}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o cep..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Cidade ID</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.cidadeId}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o ID da cidade..." />
                    </div>
                </div>

                <br />
                <br />
                <h6>Telefones:</h6>
                <br />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Telefone</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.telefone1}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o 1º telefone..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Telefone 2</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.telefone2}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o 2º telefone..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Telefone 3</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.telefone3}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o 3º telefone..." />
                    </div>
                </div>

                 <br />
                <br />
                <h6>Dados bancários:</h6>
                <br />

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Banco</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.banco}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o banco..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Agencia</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.agencia}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o agencia..." />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Conta</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.cliente.conta}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o conta..." />
                    </div>
                </div>

                <hr></hr>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn-btnprimary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn-secondary" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}