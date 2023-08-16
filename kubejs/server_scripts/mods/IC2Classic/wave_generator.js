ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'ic2:wave_generator'})
  
  // добавление крафта ItemId
  event.recipes.create.pressing('ic2:wave_generator', 'ic2:ocean_generator')
  event.recipes.create.mechanicalCrafting('ic2:wave_generator', [
    'DCB',
    'DAB',
    'DCB'
  ], {
    A: 'ic2:water_mill_lv'
   ,B: 'ic2:turbine_blade'
   ,C: '#forge:rods/steel'
   ,D: 'ic2:plate_advanced_alloy'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})