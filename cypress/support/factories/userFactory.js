export function criarUsuario(overrides = {}) {

    const usuarioBase = {
        name: 'Usuario',
        lastName: 'Teste',
        userkey: 'user1',
        email: '',
        birthday: '10/01/1990',
        company: 'Empresa Teste',
        adress: 'Rua padrão, 123',
        adress2: 'Casa',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobile: '999999999'
    }

    return {
        ...usuarioBase,
        ...overrides
    }
}