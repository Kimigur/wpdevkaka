ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:compressor'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'create:mechanical_press']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'create:basin']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'createaddition:alternator']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'EEEEE',
    'ECACE',
    'EBABE',
    'EDADE',
    'EEEEE'
  ], {
    A: 'ic2:circuit'
   ,B: 'create:mechanical_press'
   ,C: 'createaddition:alternator'
   ,D: 'create:basin'
   ,E: '#forge:ingots/refined_iron'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})