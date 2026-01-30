export function validateEvent(
  title: string,
  date: string,
  location: string
): string | null {
  if (!title.trim()) return 'Título é obrigatório';
  if (title.length < 3) return 'Título deve ter ao menos 3 caracteres';
  if (!date.trim()) return 'Data é obrigatória';
  if (isNaN(Date.parse(date))) return 'Data inválida';
  if (!location.trim()) return 'Local é obrigatório';

  return null;
}
