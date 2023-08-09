ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:water_mill_hv'})

    // ���������� ������ ItemId
    let inter = 'ic2:water_mill_mv'
    event.recipes.create.sequenced_assembly(
        'ic2:water_mill_hv'
    , 'ic2:transformer_hv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:water_mill_mv']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.deploying(inter, [inter, itemA]) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(8)
})                                    