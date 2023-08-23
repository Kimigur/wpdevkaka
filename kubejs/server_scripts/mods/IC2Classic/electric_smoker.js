ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:electric_smoker'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'minecraft:smoker'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'minecraft:smoker']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'CCC',
    'BAB',
    'CCC'
  ], {
    A: 'ic2:circuit'
   ,B: 'minecraft:smoker'
   ,C: '#forge:ingots/refined_iron'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})