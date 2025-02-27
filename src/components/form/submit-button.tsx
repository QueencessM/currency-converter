'use client';

import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} className='mt-3'>
            {pending ? (
                <>
                <Loader2 className='animate-spin' />
                Converting...
                </>
            ) : 'Convert'}
        </Button>
    );
};