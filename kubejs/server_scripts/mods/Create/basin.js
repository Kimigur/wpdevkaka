//'createbasin'
ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:basin'})
  
  // добавление крафта ItemId
    event.shaped('create:basin', [
    'A A',
    'ACA',
    'BBB'
  ], {
    A: 'create:andesite_alloy'
   ,B: 'create:iron_sheet'
   ,C: 'extendedcrafting:black_iron_slate'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})