ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:windmill'})

    // ���������� ������ ItemId
    let inter = 'ic2:transformer_hv'
    event.recipes.create.sequenced_assembly(
        'ic2:windmill'
    , 'ic2:transformer_hv', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:wind_turbine']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:complex_circuit']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 500)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_machine_block']) //������ ����
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(4)
})