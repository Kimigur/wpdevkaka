ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'immersiveengineering:cokebrick'})
  
  // ���������� ������ ItemId
    event.shaped('3x immersiveengineering:cokebrick', [
    'ABA',
    'BDB',
    'ABA'
  ], {
    A: 'minecraft:clay_ball'
   ,B: '#forge:ingots/brick'
//   ,C: '#forge:ingots/cast_iron'
   ,D: 'minecraft:obsidian'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})