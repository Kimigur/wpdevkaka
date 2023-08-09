ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:ocean_generator'})

    // ���������� ������ ItemId
    let inter = 'ic2:water_mill_lv'
    event.recipes.create.sequenced_assembly(
        'ic2:ocean_generator'
    , 'ic2:water_mill_lv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plate_advanced_alloy']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/steel']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 1000)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)
        ,event.recipes.create.pressing('ic2:ocean_generator', 'ic2:wave_generator') // ������ ������
})