ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:flux_generator_hv'})

    // ���������� ������ ItemId
    let inter = 'ic2:transformer_hv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_hv'
    , 'ic2:flux_generator_mv', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_hv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:glassfiber_cable_item']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:lapatron_crystal']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:wirecoil_steel']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:transformer_hv']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})