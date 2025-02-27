import { z } from 'zod';

export const formSchema = z.object({
    amount: z.coerce.number({ message: 'Amount should be a number.' }).nonnegative('Amount must be a positive number.'),
    base: z.string({ message: 'Base currency has invalid input.' }).length(3, 'No Base Currency selected.'),
    target: z.string({ message: 'Target currency has invalid input.' }).length(3, 'No Target Currency selected.'),
});

export type FormType = z.infer<typeof formSchema>;