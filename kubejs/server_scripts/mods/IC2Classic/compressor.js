ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:compressor'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'create:mechanical_press']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'create:basin']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'createaddition:alternator']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'EEEEE',
    'ECACE',
    'EBABE',
    'EDADE',
    'EEEEE'
  ], {
    A: 'ic2:circuit'
   ,B: 'create:mechanical_press'
   ,C: 'createaddition:alternator'
   ,D: 'create:basin'
   ,E: '#forge:ingots/refined_iron'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})