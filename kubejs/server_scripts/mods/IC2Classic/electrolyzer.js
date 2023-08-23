ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:electrolyzer'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:cell_empty']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'ACBCA',
    'ACBCA',
    'ADBDA'
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'ic2:circuit'
   ,C: 'ic2:cell_empty'
   ,D: 'ic2:copper_insulated_cable_item'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})