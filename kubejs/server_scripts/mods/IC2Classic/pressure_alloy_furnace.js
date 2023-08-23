ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:pressure_alloy_furnace'
    let ItemA = 'immersiveengineering:blastbrick_reinforced'
    let ItemB = 'ic2:alloy_smelter'
    let ItemC = 'ic2:pressure_alloy_furnace_structure'
    let ItemD = 'ic2:complex_circuit'
//    let ItemE = iteme
//    let ItemF = itemf
//    let ItemG = itemg
//    let ItemH = itemh
//    let ItemI = itemi
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = ItemB
    event.recipes.create.sequenced_assembly(
        ItemId
    , ItemC, [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, ItemB]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemD]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    '     ',
    ' DAB ',
    ' ACA ',
    ' BAD ',
    '     '
  ], {
    A: ItemA
   ,B: ItemB
   ,C: ItemC
   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})