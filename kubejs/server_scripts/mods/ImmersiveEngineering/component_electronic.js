ServerEvents.recipes(event => {
    // ���������� ������ ItemId
    let inter = '#forge:treated_wood_slab'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_electronic'
    , '#forge:treated_wood_slab', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, '#forge:gems/quartz']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/electrum']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:dusts/redstone']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})