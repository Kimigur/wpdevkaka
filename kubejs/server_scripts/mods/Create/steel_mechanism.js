ServerEvents.recipes(event => {         
    // ���������� ������ ItemId
    let inter = 'createindustry:unprocessed_steel_mechanism'
    event.recipes.create.sequenced_assembly(
        'createindustry:steel_mechanism'
    , 'create:precision_mechanism', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'createindustry:screw']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screwdriver']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:heavy_plate']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:turbine_blade']) //������ ����
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)
})