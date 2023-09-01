const pacientes = ['Allef', 'João', 'Leticia', "Mih", 'Boto', 'Tanos']

function agendar(lista, paciente){
      lista.push(paciente)
      console.log(lista.join(', '))
}

function atender(pacientes){
      pacientes.shift()
      console.log(pacientes.join(', '))
}

function cancelarAtendimento(paciente, lista){
      const indice = lista.indexOf(paciente)
      if (indice > -1){
            lista.splice(indice, 1)
            console.log(lista.join(', '))
      }else{
            console.log('Paciente não encontrado, verifique o nome e tente novamente!')
      }
}

console. log(pacientes)

agendar(pacientes, 'Bruno')

cancelarAtendimento('Bruno', pacientes)

agendar(pacientes, 'Bruno')

atender(pacientes)

cancelarAtendimento('Bruna', pacientes)