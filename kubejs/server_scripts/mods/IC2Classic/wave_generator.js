ServerEvents.recipes(event => {
  // �������� ������ ���� ������� ItemId
  event.remove({output: 'ic2:wave_generator'})
  
  // ���������� ������ ItemId
  event.recipes.create.pressing('ic2:wave_generator', 'ic2:ocean_generator')
})