ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = '#forge:plates/plastic'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_electronic_adv'
    , '#forge:plates/plastic', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/aluminum']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})