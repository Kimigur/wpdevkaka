ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'create:portable_fluid_interface'})
  
  // ���������� ������ ItemId
    event.shaped('create:portable_fluid_interface', [
    'AAE',
    'BCD',
    'AAE'
  ], {
    A: '#forge:plates/copper'
   ,B: 'create:copper_casing'
   ,C: 'create:chute'
   ,D: 'create:fluid_pipe'
   ,E: '#ic2:rubber'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
