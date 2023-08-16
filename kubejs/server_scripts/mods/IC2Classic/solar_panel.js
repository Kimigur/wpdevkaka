ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:solar_panel'})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:solar_panel'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'mekanismgenerators:solar_panel']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_cable_item']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(4)
  event.recipes.create.mechanicalCrafting('ic2:solar_panel', [
    'AEEEEEA',
    'ACCCCCA',
    'ABBDBBA',
    'AAABAAA'
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'ic2:copper_cable_item'
   ,C: 'ic2:re_battery'
   ,D: 'ic2:circuit'
   ,E: 'mekanismgenerators:solar_panel'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})