ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:recycler'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:compressor']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/refined_iron']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'BBB',
    'ACA',
    'BBB'
  ], {
    A: 'ic2:compressor'
   ,B: '#forge:ingots/refined_iron'
   ,C: 'ic2:advanced_circuit'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})