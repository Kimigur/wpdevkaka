ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'immersiveengineering:railgun'})

    // ���������� ������ ItemId
    let inter = 'wps_utilities:shotgunbody'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:railgun'
    , 'immersiveengineering:wooden_grip', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:capacitor_hv']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 200)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/steel']) //������ ����  
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_mv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/steel']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_mv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic_adv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})