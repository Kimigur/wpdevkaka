ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:colossal_furnace'
    let ItemA = 'ic2:induction_furnace'
    let ItemB = 'ic2:colossal_base_block'
    let ItemC = '#forge:ingots/copper'
//    let ItemD = itemd
//    let ItemE = iteme
//    let ItemF = itemf
//    let ItemG = itemg
//    let ItemH = itemh
//    let ItemI = itemi
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = ItemA
    event.recipes.create.sequenced_assembly(
        ItemId
    , ItemB, [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.deploying(inter, [inter, ItemA]) //������ ����
        ,event.recipes.create.deploying(inter, [inter, ItemA]) //������ ����
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //������ ����
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(2)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'A C A',
    ' CAC ',
    'CABAC',
    ' CAC ',
    'A C A'
  ], {
    A: ItemA
   ,B: ItemB
   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})