ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'create:mechanical_crafter'})
  
  // ���������� ������ ItemId
    event.shaped('3x create:mechanical_crafter', [
    ' D ',
    'ABE',
    ' C '
  ], {
    A: 'create:precision_mechanism'
   ,B: 'create:brass_casing'
   ,C: 'minecraft:crafting_table'
   ,D: 'create:electron_tube'
   ,E: 'create:cogwheel'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})