ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:base_teleporter'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:advanced_machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, '#forge:ender_pearls']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:dust_diamond']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/tin']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(4)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'E C E',
    ' DBD ',
    'CBABC',
    ' DBD ',
    'E C E'
  ], {
    A: 'ic2:advanced_machine_block'
   ,B: '#forge:ender_pearls'
   ,C: 'ic2:advanced_circuit'
   ,D: 'ic2:dust_diamond'
   ,E: '#forge:ingots/tin'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})