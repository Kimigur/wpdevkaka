ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:electric_furnace'})

    // ���������� ������ ItemId
    let inter = 'minecraft:furnace'
    event.recipes.create.sequenced_assembly(
        'ic2:electric_furnace'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'minecraft:furnace']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����

    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:electric_furnace', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:ingots/refined_iron'
   ,B: 'minecraft:furnace'
   ,C: 'ic2:circuit'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})