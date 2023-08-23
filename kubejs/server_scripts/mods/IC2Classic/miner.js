ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:miner'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:miningpipe_slim']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'CCC',
    'CAC',
    'CBC',
    ' B ',
    ' B '
  ], {
    A: 'ic2:advanced_circuit'
   ,B: 'ic2:miningpipe_slim'
   ,C: '#forge:ingots/refined_iron'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})