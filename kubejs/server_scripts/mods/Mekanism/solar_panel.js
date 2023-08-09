ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'mekanismgenerators:solar_panel'})

    // ���������� ������ ItemId
    let inter = '#forge:plates/steel'
    event.recipes.create.sequenced_assembly(
        '4x mekanismgenerators:solar_panel'
    , '#forge:plates/steel', [
         event.recipes.create.deploying(inter, [inter, '#forge:dusts/charcoal']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/zinc']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass_panes']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
})