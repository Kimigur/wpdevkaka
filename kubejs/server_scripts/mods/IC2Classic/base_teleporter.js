ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:base_teleporter'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:advanced_machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, '#forge:ender_pearls']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:dust_diamond']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/tin']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(4)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'E C E',
    ' DBD ',
    'CBABC',
    ' DBD ',
    'E C E'
  ], {
    A: 'ic2:advanced_machine_block'
   ,B: '#forge:ender_pearls'
   ,C: 'ic2:advanced_circuit'
   ,D: 'ic2:dust_diamond'
   ,E: '#forge:ingots/tin'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})