ServerEvents.recipes(event => {  
  // ���������� ������ ItemId
  event.recipes.create.deploying('create:shadow_steel_casing', ['#forge:stripped_logs', 'create:shadow_steel'])
})