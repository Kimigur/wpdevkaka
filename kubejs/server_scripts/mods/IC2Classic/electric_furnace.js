ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:electric_furnace'})

    // добавление крафта ItemId
    let inter = 'minecraft:furnace'
    event.recipes.create.sequenced_assembly(
        'ic2:electric_furnace'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'minecraft:furnace']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы

    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:electric_furnace', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'minecraft:furnace'
   ,C: 'ic2:circuit'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})