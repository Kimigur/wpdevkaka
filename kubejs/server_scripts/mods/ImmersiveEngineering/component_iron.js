ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = '#forge:plates/iron'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_iron'
    , '#forge:plates/iron', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
        event.recipes.create.deploying(inter, [inter, '#forge:ingots/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/iron']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})