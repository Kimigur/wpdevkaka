ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = '#forge:plates/nickel'
    event.recipes.create.sequenced_assembly(
        '3x immersiveengineering:electron_tube'
    , '#forge:plates/nickel', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:dusts/redstone']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)
})