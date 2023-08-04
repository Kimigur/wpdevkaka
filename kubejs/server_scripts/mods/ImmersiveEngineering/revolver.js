ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'immersiveengineering:revolver'})

    // ���������� ������ ItemId
    let inter = 'wps_utilities:pistolbody'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:revolver'
    , 'immersiveengineering:wooden_grip', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_steel']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //������ ��������
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_drum']) //������ ����
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_hammer']) //������ ����
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_barrel']) //������ ����

//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})