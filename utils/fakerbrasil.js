
const SuperFakerBrasil = require('faker-brasil');
const fakerBrasil = new SuperFakerBrasil();

const nomeFaker = () => {

    return nome = fakerBrasil.fullName();
}

exports.nomeFaker = nomeFaker


