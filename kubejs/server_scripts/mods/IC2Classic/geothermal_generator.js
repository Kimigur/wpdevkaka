ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:geothermal_generator'})

    // ���������� ������ ItemId
    let inter = 'ic2:generator'
    event.recipes.create.sequenced_assembly(
        'ic2:geothermal_generator'
    , 'ic2:generator', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:cell_empty']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plate_advanced_alloy']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/refined_iron']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#ic2:rubber']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
     event.recipes.create.pressing('ic2:geothermal_generator', 'ic2:liquid_generator')
})