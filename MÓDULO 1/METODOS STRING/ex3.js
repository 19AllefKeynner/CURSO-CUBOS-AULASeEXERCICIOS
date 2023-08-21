const data = {
      dia: 17,
      mes: 11,
      ano: 2003
}

function escreveData(dia, mes, ano){
      let diaFormatado = ''
      let anoFormatado = ''
      const mesesDoAno = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
          ];

      if (dia < 10){
            diaFormatado = String(dia).padStart(2, '0')
      }else{
            diaFormatado = String(dia)
      }

      if(ano < 1000){
            if(String(ano).length === 3){
                  anoFormatado = String(ano).padStart(4, '0')
            }else  if(String(ano).length === 2){
                  anoFormatado = String(ano).padStart(4, '00')
            }else  if(String(ano).length === 1){
                  anoFormatado = String(ano).padStart(4, '000')
            }
            
      }else{
            anoFormatado = String(ano).padStart(5, '/')
      }

      const nomeMes = mesesDoAno[mes - 1]

      return `${diaFormatado} de ${nomeMes} de ${anoFormatado}`
}

function formataData(dia, mes, ano){
      let diaFormatado = ''
      let mesFormatado = ''
      let anoFormatado = ''
      if (dia < 10){
            diaFormatado = String(dia).padStart(2, '0')
      }else{
            diaFormatado = String(dia)
      }

      if(mes < 10){
            mesFormatado = String(mes).padStart(3, '/0')
      }else{
            mesFormatado = String(mes).padStart(3, '/')
      }

      if(ano < 1000){
            if(String(ano).length === 3){
                  anoFormatado = String(ano).padStart(5, '/0')
            }else  if(String(ano).length === 2){
                  anoFormatado = String(ano).padStart(5, '/00')
            }else  if(String(ano).length === 1){
                  anoFormatado = String(ano).padStart(5, '/000')
            }
            
      }else{
            anoFormatado = String(ano).padStart(5, '/')
      }


      return `     ${diaFormatado}${mesFormatado}${anoFormatado}\n        ou\n${escreveData(dia, mes, ano)}`
}

const formatado =  formataData(data.dia, data.mes, data.ano)

console.log(formatado)