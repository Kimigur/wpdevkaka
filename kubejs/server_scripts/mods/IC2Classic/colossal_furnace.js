ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:colossal_furnace'
    let ItemA = 'ic2:induction_furnace'
    let ItemB = 'ic2:colossal_base_block'
    let ItemC = '#forge:ingots/copper'
//    let ItemD = itemd
//    let ItemE = iteme
//    let ItemF = itemf
//    let ItemG = itemg
//    let ItemH = itemh
//    let ItemI = itemi
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = ItemA
    event.recipes.create.sequenced_assembly(
        ItemId
    , ItemB, [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'A C A',
    ' CAC ',
    'CABAC',
    ' CAC ',
    'A C A'
  ], {
    A: ItemA
   ,B: ItemB
   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})