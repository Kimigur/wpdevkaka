ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:water_mill'})

    // добавление крафта ItemId
    let inter = 'ic2:generator'
    event.recipes.create.sequenced_assembly(
        'ic2:water_mill'
    , 'ic2:generator', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:wooden_rotor']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/iron']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:water_mill', [
    'BCA',
    'CDC',
    'ACB'
  ], {
    A: '#forge:rods/iron'
   ,B: '#forge:wires/copper'
   ,C: 'ic2:wooden_rotor'
   ,D: 'ic2:generator'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})