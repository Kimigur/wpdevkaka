ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:wind_turbine'})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:wind_turbine'
    , 'ic2:machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/iron']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_lv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:wind_turbine', [
    'AAEAA',
    'DCBCD',
    'AAEAA' 
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'immersiveengineering:coil_lv'
   ,C: '#forge:rods/iron'
   ,D: 'ic2:turbine_blade'
   ,E: '#forge:wires/copper'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})