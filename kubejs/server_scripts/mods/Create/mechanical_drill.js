ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'create:mechanical_drill'})
  
  // ���������� ������ ItemId
    event.shaped('create:mechanical_drill', [
    ' A ',
    'ACA',
    ' B '
  ], {
    A: '#forge:plates/obsidian'
   ,B: 'create:shaft'
   ,C: 'create:andesite_casing'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})