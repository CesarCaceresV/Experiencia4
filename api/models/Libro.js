module.exports = {
    attributes: {
        nombrelibro: {
            type: 'string',
            required: true
        },
        cantidadlibrolujo: {
            type: 'integer',
            defaultsTo: 0
        },
        cantidadlibrobolsillo: {
            type: 'integer',
            defaultsTo: 0
        }    
    }
}