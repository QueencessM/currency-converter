'use server';

import { redirect } from 'next/navigation';
import { formSchema } from './form-schema';

export interface FormState {
    success: boolean;
    payload?: {
        amount?: string;
        base?: string;
        target?: string;
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

    redirect(`/result?base=${base}&target=${target}&amount=${amount}`);
}