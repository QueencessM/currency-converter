'use server';

import { redirect } from 'next/navigation';
import { formSchema, FormType } from './form-schema';

export interface FormState {
    success: boolean;
    errors?: string[];
};

export async function convertAction(state: FormState, formData: FormData): Promise<FormState> {
    const input = {
        amount: formData.get('amount'),
        base: formData.get('base'),
        target: formData.get('target'),
    };
    console.log(input);

    const validate = formSchema.safeParse(input);

    if (!validate.success) {
        console.log(validate.error.errors);
        return {
            success: false,
            errors: validate.error.issues.map((issue) => issue.message),
        };
    }

    const { amount, base, target } = validate.data;

    redirect(`/result?base=${base}&target=${target}&amount=${amount}`);
}