const dadosEndereço = {
      cep: 45990130,
      cidade: 'Teixeira de Freista',
      bairro: 'Bela vista',
      estado: 'Bahia',
      nomeCompleto: 'Allef Keinner S Silva',
      telefone: '73991115214',
      formatado: function(){
            console.log(`CEP ${this.cep} - ${this.bairro} - ${this.cidade}, ${this.estado}
${this.nomeCompleto} - ${this.telefone}`)
      }
}

dadosEndereço.formatado()