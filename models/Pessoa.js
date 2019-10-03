const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String
        }
    }
});

module.exports = Pessoa = mongoose.model('pessoa', PessoaSchema);