ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:generator'})

    // ���������� ������ ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:generator'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/refined_iron']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, FluidId]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:generator', [
    'BBB',
    'ADA',
    'BBB'
  ], {
    A: 'ic2:re_battery'
   ,B: '#forge:ingots/refined_iron'
//   ,C: '#forge:wires/copper'
   ,D: '#forge:plates/copper'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})