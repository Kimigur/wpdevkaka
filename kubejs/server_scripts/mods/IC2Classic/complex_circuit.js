ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:complex_circuit'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:advanced_circuit'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_circuit', [
         event.recipes.create.deploying(inter, [inter, 'ic2:magnet']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:pulsating_quartz']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:super_cable_item']) //Шаблон руки
        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plating_heat_capacity']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
    ]).transitionalItem(inter).loops(3)  
})