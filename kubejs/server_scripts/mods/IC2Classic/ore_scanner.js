ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:ore_scanner'
    let ItemA = 'ic2:advanced_circuit'
    let ItemB = 'ic2:heat_storage_single'
    let ItemC = 'ic2:luminator'
    let ItemD = 'ic2:batbox'
    let ItemE = 'ic2:stabilized_machine_block'
    let ItemF = 'ic2:miningpipe_slim'
//    let ItemG = itemg
//    let ItemH = itemh
//    let ItemI = itemi
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = ItemE
    event.recipes.create.sequenced_assembly(
        ItemId
    , ItemE, [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, ItemD]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemB]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemF]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    '     ',
    ' BCB ',
    'BEAEB',
    ' FDF ',
    '  F  '
  ], {
    A: ItemA
   ,B: ItemB
   ,C: ItemC
   ,D: ItemD
   ,E: ItemE
   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})