ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:alloy_smelter'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:electric_furnace'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:electric_furnace', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, 'ic2:advanced_circuit']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:alloybrick']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:alloybrick']) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'BBB',
    'CAC',
    'BBB'
  ], {
    A: 'ic2:electric_furnace'
   ,B: 'immersiveengineering:alloybrick'
   ,C: 'ic2:advanced_circuit'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})