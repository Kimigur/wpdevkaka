ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:sawmill'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/bronze']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'CAC',
    'ABA',
    'BDB'
  ], {
    A: 'ic2:circuit'
   ,B: '#forge:ingots/bronze'
   ,C: 'ic2:turbine_blade'
   ,D: '#forge:ingots/refined_iron'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})