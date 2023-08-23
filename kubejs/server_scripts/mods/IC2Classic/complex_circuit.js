ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:complex_circuit'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:advanced_circuit'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_circuit', [
         event.recipes.create.deploying(inter, [inter, 'ic2:magnet']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:pulsating_quartz']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:super_cable_item']) //������ ����
        ,event.recipes.create.cutting(inter, inter) // ������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plating_heat_capacity']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
    ]).transitionalItem(inter).loops(3)  
})