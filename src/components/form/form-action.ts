'use server';

import { formSchema } from './form-schema';

export interface FormState {
    success: boolean;
    payload?: {
        amount: string;
        base: string;
        target: string;
        result?: string;
    };
    errors?: string[];
};

export async function convertAction(state: FormState, formData: FormData): Promise<FormState> {
    const input = {
        amount: formData.get('amount') as string,
        base: formData.get('base') as string,
        target: formData.get('target') as string,
    };

    const validate = formSchema.safeParse(input);

    if (!validate.success) {
        return {
            success: false,
            payload: input,
            errors: validate.error.issues.map((issue) => issue.message),
        };
    }

    const { amount, base, target } = validate.data;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_ACCESS_TOKEN}/pair/${base}/${target}`);    
    const data = await response.json();

    if (data.result === 'error') {
        return {
            success: false,
            payload: input,
            errors: ['Invalid Currency Codes.'],
        };
    }
    
    const result = (Number(amount) * data.conversion_rate).toFixed(3);

    return {
        success: true,
        payload: { amount: String(amount), base, target, result },
    };
}