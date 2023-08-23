ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    let ItemId = 'ic2:rare_earth_extractor'
    event.remove({output: ItemId})

    // ���������� ������ ItemId
    let inter = 'ic2:extractor'
    event.recipes.create.sequenced_assembly(
        ItemId
    , 'ic2:extractor', [
         event.recipes.create.deploying(inter, [inter, 'ic2:recycler']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)  
event.recipes.create.mechanicalCrafting(ItemId, [
    'CBC',
    'CAC'
  ], {
    A: 'ic2:recycler'
   ,B: 'ic2:extractor'
   ,C: '#forge:dusts/glowstone'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})