ServerEvents.recipes(event => { 
  // ���������� ������ ItemId
  event.recipes.create.deploying('create:refined_radiance_casing', ['#forge:stripped_logs', 'create:refined_radiance'])
})