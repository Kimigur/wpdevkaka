ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = '#forge:ingots/copper'
    event.recipes.create.sequenced_assembly(
        '3x immersiveengineering:light_bulb'
    , '#forge:ingots/copper', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'minecraft:bamboo']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)
})