ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:advanced_circuit'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:circuit'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:circuit', [
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic_adv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/lead']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)  
})