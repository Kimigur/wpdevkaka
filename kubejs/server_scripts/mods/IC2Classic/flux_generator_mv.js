ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:flux_generator_mv'})

    // ���������� ������ ItemId
    let inter = 'ic2:transformer_mv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_mv'
    , 'ic2:flux_generator_lv', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_mv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:gold_cable_item']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:energy_crystal']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/gold']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:transformer']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})