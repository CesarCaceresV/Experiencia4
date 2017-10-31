module.exports = {
    attributes: {
        nombrelibro: {
            type: 'string',
            required: true
        },
        cantidadlibro: {
            type: 'integer',
            required: true
        },
        version: {
            type: 'string',
            required: true
        },
        retiro: {
            type: 'string',
            required: true
        },
        nombreCliente: {
            type: 'string'
        },
        telefonoCliente: {
            type: 'integer'
        },
        casoDespacho: {
            type: 'string'
        }
    }
}
