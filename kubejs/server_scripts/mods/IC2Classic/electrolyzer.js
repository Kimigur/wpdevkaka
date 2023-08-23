ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:electrolyzer'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:cell_empty']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(3)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'ACBCA',
    'ACBCA',
    'ADBDA'
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'ic2:circuit'
   ,C: 'ic2:cell_empty'
   ,D: 'ic2:copper_insulated_cable_item'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})