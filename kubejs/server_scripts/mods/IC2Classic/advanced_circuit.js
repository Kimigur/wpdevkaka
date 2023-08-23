ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let ItemId = 'ic2:advanced_circuit'
    event.remove({output: ItemId})

    // добавление крафта ItemId
    let inter = 'ic2:circuit'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:circuit', [
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic_adv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/lead']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)  
})