ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'immersiveengineering:blastbrick_reinforced'})
  
  // ���������� ������ ItemId
    event.shaped('immersiveengineering:blastbrick_reinforced', [
    'DEB',
    'CAC',
    'BED'
  ], {
    A: 'immersiveengineering:blastbrick'
   ,B: '#forge:ingots/cast_iron'
   ,C: 'immersiveengineering:component_steel'
   ,D: '#forge:sheetmetals/steel'
   ,E: '#forge:plates/lead'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})