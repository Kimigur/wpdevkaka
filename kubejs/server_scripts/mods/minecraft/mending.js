ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = 'minecraft:enchanted_book'
    event.recipes.create.sequenced_assembly(
        Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)
    , 'minecraft:book', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:upgrade_exp_collector']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('sophisticatedcore:xp_still',1000)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'create_things_and_misc:mending_rune']) //������ ����
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
})