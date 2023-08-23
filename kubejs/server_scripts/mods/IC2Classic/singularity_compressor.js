ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:singularity_compressor'
    let ItemA = 'ic2:advanced_machine_block'
    let ItemB = 'ic2:compressor'
    let ItemC = '#forge:obsidian'
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
    , ItemA, [
         event.recipes.create.deploying(inter, [inter, ItemB]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemB]) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(4)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'B C B',
    ' CBC ',
    'CBABC',
    ' CBC ',
    'B C B'
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