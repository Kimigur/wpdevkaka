ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'create:chromatic_compound'})
  
  // ���������� ������ ItemId
  event.recipes.create.mixing('create:chromatic_compound', ['create:powdered_obsidian','create:powdered_obsidian','create:powdered_obsidian', 'minecraft:glowstone_dust','minecraft:glowstone_dust','minecraft:glowstone_dust', 'create:polished_rose_quartz']).superheated()
})