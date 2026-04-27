import { criarUsuario } from '../support/factories/userFactory'

export const cenarios = [

    {
        cenario: 'Cadastro Realizado com Sucesso',
        ...criarUsuario({
            name: 'Felipe',
            lastName: 'Nuta',
            userkey: 'user1'
        }),
        fluxo: 'completo',
        expected: { tipo: 'sucesso' }
    },

    {
        cenario: 'Password-Vazio',
        ...criarUsuario({
            name: 'Rogerio',
            lastName: 'Santos',
            userkey: 'user2'
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'password-required' }
    },

    {
        cenario: 'Email-Existente',
        ...criarUsuario({
            name: 'João',
            lastName: 'aparecido',
            userkey: 'user3',
            email: 'felipe@teste.com'
        }),
        fluxo: 'signup',
        expected: { tipo: 'erro', erro: 'email-existente' }
    },

    {
        cenario: 'Aceita-Numeros',
        ...criarUsuario({
            name: '1234',
            lastName: '1234',
            userkey: 'user4',
            state: '123456789'
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'aceita-numeros' }
    },

    {
        cenario: 'Tudo-Maisculo',
        ...criarUsuario({
            name: 'USUARIO',
            lastName: 'TESTE',
            userkey: 'user5',
            company: 'EMPRESA TESTE',
            adress: 'RUA PADRÃO, 123',
            adress2: 'CASA',
            country: 'United States',
            state: 'CALIFORNIA',
            city: 'LOS ANGELES',
            zipcode: '900004',
            mobile: '999999999'
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'tudo-maisculo' }
    },

    {
        cenario: 'Zipcode/Mobile-AlfanNumericos',
        ...criarUsuario({
            name: 'USUARIO',
            lastName: 'TESTE',
            userkey: 'user5',
            company: 'EMPRESA TESTE',
            adress: 'RUA PADRÃO, 123',
            adress2: 'CASA',
            country: 'United States',
            state: 'CALIFORNIA',
            city: 'LOS ANGELES',
            zipcode: 'AAAAAA',
            mobile: 'ABABABABA'
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'zipcodes-mobile-alfanumericos' }
    },

    {
        cenario: 'Campo-Obrigatorio',
        ...criarUsuario({
            name: 'Usuario',
            lastName: '',
            userkey: 'user2',
            adress: '',
            country: 'United States',
            state: '',
            city: '',
            zipcode: '',
            mobile: ''
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'campo-obrigatorio' }
    },

    {
        cenario: 'Caracter-Especial',
        ...criarUsuario({
            name: 'Usuario@',
            lastName: 'Teste#',
            userkey: 'user4',
            email: '',
            company: 'Empresa@ Teste#',
            adress: 'Rua padrão,#@ 123',
            adress2: 'Casa!@#',
            country: 'United States',
            state: 'California@#!%',
            city: 'Los !@!$$@',
            zipcode: '#@!%¨#$@!',
            mobile: '!#@$!#'
        }),
        fluxo: 'completo',
        expected: { tipo: 'erro', erro: 'caracter-especial' }
    }
]