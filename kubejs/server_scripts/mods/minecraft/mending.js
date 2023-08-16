ServerEvents.recipes(event => {
    // добавление крафта ItemId
    let inter = 'minecraft:enchanted_book'
    event.recipes.create.sequenced_assembly(
        Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)
    , 'minecraft:book', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:upgrade_exp_collector']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('sophisticatedcore:xp_still',1000)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'create_things_and_misc:mending_rune']) //Шаблон руки
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
})