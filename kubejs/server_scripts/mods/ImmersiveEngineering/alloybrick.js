ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'immersiveengineering:alloybrick'})
  
  // ���������� ������ ItemId
    event.shaped('2x immersiveengineering:alloybrick', [
    'BDB',
    'CAC',
    'BDB'
  ], {
    A: '#forge:ingots/brass'
   ,B: '#forge:ingots/nether_brick'
   ,C: '#forge:ingots/steel'
   ,D: '#forge:ingots/brick'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})