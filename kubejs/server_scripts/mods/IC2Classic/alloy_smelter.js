ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:alloy_smelter'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:electric_furnace'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:electric_furnace', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:alloybrick']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:alloybrick']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'BBB',
    'CAC',
    'BBB'
  ], {
    A: 'ic2:electric_furnace'
   ,B: 'immersiveengineering:alloybrick'
   ,C: 'ic2:advanced_circuit'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})