ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:wind_turbine'})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:wind_turbine'
    , 'ic2:machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/iron']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_lv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
})