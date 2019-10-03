const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    email: {
        type: String
    },
    endereco: {
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
        pais: {
            type: String
        },
        cep: {
            type: String
        },
        bairro: {
            type: String
        },
        rua: {
            type: String
        },
        numero: {
            type: Number
        },
        complemento: {
            type: String
        }
    }
});

module.exports = Pessoa = mongoose.model('pessoas', PessoaSchema);