const usuariosPets = [
      {dono: 'Alfredo', pet: 'Tobias'},
      {dono: 'Allef', pet: 'Tobs'},
      {dono: 'Alex', pet: 'Rabito'},
      {dono: 'Alicson', pet: 'Grandalhão'},
      {dono: 'Almeida', pet: 'Brutus'},
      {dono: 'Boto', pet: 'Caçador'},
      {dono: 'Roger', pet: 'Tobi'},

]

const pegaDonoPet = (usuariosPets, nomePet) => {
      const donoEPet = usuariosPets.find((element) => {
            return element.pet.toLowerCase() === nomePet.toLowerCase()
      })

      console.log(`O dono do ${donoEPet.pet} é ${donoEPet.dono}!`)
}

pegaDonoPet(usuariosPets, 'tobi')