ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:charged_electrolyzer'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:electrolyzer'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:advanced_machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_lv']) //������ ����
        ,event.recipes.create.deploying(inter, [inter, 'ic2:electrolyzer']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    '     ',
    ' CBC ',
    ' BAB ',
    ' CBC ',
    '     '
  ], {
    A: 'ic2:advanced_machine_block'
   ,B: 'ic2:transformer_lv'
   ,C: 'ic2:electrolyzer'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})