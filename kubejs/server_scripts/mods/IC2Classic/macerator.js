ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:macerator'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'createaddition:alternator']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'create:crushing_wheel']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'DDDDD',
    'DACAD',
    'DB BD',
    'DDCDD'
  ], {
    A: 'createaddition:alternator'
   ,B: 'create:crushing_wheel'
   ,C: 'ic2:circuit'
   ,D: '#forge:ingots/refined_iron'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})