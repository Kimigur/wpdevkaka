ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:macerator'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'createaddition:alternator']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'create:crushing_wheel']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'DDDDD',
    'DACAD',
    'DB BD',
    'DDCDD'
  ], {
    A: 'createaddition:alternator'
   ,B: 'create:crushing_wheel'
   ,C: 'ic2:circuit'
   ,D: '#forge:ingots/refined_iron'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})