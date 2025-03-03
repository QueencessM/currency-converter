'use client';

import { ReactNode, useActionState } from 'react';
import { convertAction, FormState } from './form-action';

import { Input } from '@/components/ui/input';
import { SubmitButton } from './submit-button';

interface CurrencyFormProps {
    children: ReactNode;
};

export const CurrencyForm = ({ children }: CurrencyFormProps) => {
    const initialState: FormState = { success: false };

    const [formState, formAction, isPending] = useActionState(convertAction, initialState);

    return (
        <>
            <form action={formAction} className={`flex flex-col gap-4 min-w-96 ${isPending ? 'opacity-50' : ''}`}>
                {/* Currency */}
                {children}

                {/* Amount */}
                <label className={`flex flex-col gap-1`}>
                    Amount to be converted:
                    <Input
                        type='text'
                        name='amount'
                        placeholder='0'
                        defaultValue={formState.payload?.amount}
                        disabled={isPending}
                        required
                    />
                </label>

                <SubmitButton />
            </form>

            {/* Results */}
            {formState.success && (
                <section className='flex flex-col items-center gap-1'>
                    <h2 className='font-bold'>Results</h2>
                    <p>
                        {formState.payload?.base} {formState.payload?.amount} = {formState.payload?.target} {formState.payload?.result}
                    </p>
                </section>
            )}

            {/* Errors */}
            {formState.errors && (
                <ul className='flex flex-col gap-1'>
                    {formState.errors.map((error) => (
                        <li key={error} className='bg-destructive text-white text-sm px-3 rounded-full'>
                            {error}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};