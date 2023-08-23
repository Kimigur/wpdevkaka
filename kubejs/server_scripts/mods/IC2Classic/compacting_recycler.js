ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:compacting_recycler'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:recycler'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:recycler']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:compressor']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    '     ',
    ' DCD ',
    ' ABA ',
    ' DCD ',
    '     '
  ], {
    A: 'ic2:compressor'
   ,B: 'ic2:advanced_machine_block'
   ,C: 'ic2:recycler'
   ,D: '#forge:ingots/refined_iron'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})