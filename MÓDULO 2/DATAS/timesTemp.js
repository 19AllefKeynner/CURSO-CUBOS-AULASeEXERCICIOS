const aniversario = new Date(2003, 10, 17)
const aniversarioUmaHoraDepois = (+aniversario + (1000*60)*60)
const aniversarioUmaHoraDepoisData = new Date(aniversarioUmaHoraDepois)

console.log(aniversario, aniversarioUmaHoraDepoisData)