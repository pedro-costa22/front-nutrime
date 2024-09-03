import { z } from 'zod';

export const schema = z.object({
  email: z.string().email('Necessário informar seu e-mail.'),
  password: z.string().min(6, 'Necessário informar a sua senha.'),
});
