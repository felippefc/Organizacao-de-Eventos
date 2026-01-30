import { validateEvent } from '../validadeEvents';

describe('validateEvent', () => {
  it('deve retornar erro se título estiver vazio', () => {
    const result = validateEvent('', '2026-01-01', 'Sala');
    expect(result).toBe('Título é obrigatório');
  });

  it('deve retornar null se dados forem válidos', () => {
    const result = validateEvent(
      'Reunião',
      '2026-01-01T10:00:00',
      'Sala A'
    );
    expect(result).toBeNull();
  });
});
