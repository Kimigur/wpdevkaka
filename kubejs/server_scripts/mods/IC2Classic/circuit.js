ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:circuit'})

    // ���������� ������ ItemId
    let inter = '#forge:ingots/refined_iron'
    event.recipes.create.sequenced_assembly(
        'ic2:circuit'
    , '#forge:ingots/refined_iron', [
         event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)
})