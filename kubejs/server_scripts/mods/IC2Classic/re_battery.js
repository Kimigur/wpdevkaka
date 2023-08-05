ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({id:  'ic2:re_battery_0'})

    // ���������� ������ ItemId
    let inter = 'kubejs:case_re_battery'
    event.recipes.create.sequenced_assembly(
        Item.of('ic2:re_battery', '{charge:5000}')
    , '#forge:ingots/tin', [
	 event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass_panes']) //������ ����
        ,event.recipes.create.filling(inter, [inter, Fluid.of('immersiveengineering:redstone_acid', 500)]) //������ ��������        
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/zinc']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screw']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screwdriver']) //������ ����
    ]).transitionalItem(inter).loops(2)
})
