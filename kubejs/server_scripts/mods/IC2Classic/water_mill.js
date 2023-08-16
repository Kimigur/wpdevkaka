ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:water_mill'})

    // ���������� ������ ItemId
    let inter = 'ic2:generator'
    event.recipes.create.sequenced_assembly(
        'ic2:water_mill'
    , 'ic2:generator', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:wooden_rotor']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/iron']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:water_mill', [
    'BCA',
    'CDC',
    'ACB'
  ], {
    A: '#forge:rods/iron'
   ,B: '#forge:wires/copper'
   ,C: 'ic2:wooden_rotor'
   ,D: 'ic2:generator'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})