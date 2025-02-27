'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Error() {
    return (
        <section className='row-start-1 col-start-1 flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-lg'>
            <h1 className='font-adlam text-4xl text-destructive'>Something went wrong!</h1>

            <Link href='/' className={cn(buttonVariants({ variant: 'outline', size: 'default' }), 'mt-2')}>
                Go to Home Page
            </Link>
        </section>
    );
};