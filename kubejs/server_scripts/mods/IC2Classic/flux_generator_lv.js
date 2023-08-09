ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:flux_generator_lv'})

    // ���������� ������ ItemId
    let inter = 'ic2:transformer_lv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_lv'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_lv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_cable_item']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:connector_lv']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})