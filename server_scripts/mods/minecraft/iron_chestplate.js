//Item.of('minecraft:iron_chestplate', '{Damage:0}')
ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: Item.of('minecraft:iron_chestplate', '{Damage:0}')})
  
  // добавление крафта ItemId
    event.shaped(Item.of('minecraft:iron_chestplate', '{Damage:0}'), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'immersiveengineering:plate_iron'
//   ,B: ItemB
//   ,C: ItemC
//	 ,D: ItemD
//	 ,E: ItemE
//	 ,F: ItemF
//	 ,G: ItemG
//	 ,H: ItemH
//	 ,I: ItemI
  })
})
