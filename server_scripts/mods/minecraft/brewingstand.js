ServerEvents.recipes(event => {
  // �������� ������ ����������
  event.remove({output: 'minecraft:brewing_stand'})
  // ���������� ������ ����������
    event.shaped('minecraft:brewing_stand', [
    ' C ',
    'ACA',
    'BBB'
  ], {
     A: 'createdeco:cast_iron_ingot'
    ,B: 'minecraft:smooth_stone_slab'
    ,C: 'minecraft:blaze_rod'
  }) 
  event.shapeless('minecraft:sea_pickle', ['minecraft:kelp','minecraft:wither_rose'])
})