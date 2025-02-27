import Link from 'next/link';
import Error from '@/app/error';
 
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { formSchema } from '@/components/form/form-schema';

interface ResultProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: ResultProps) {
    const { base = 'PHP', target = 'USD', amount = '0.000' } = await searchParams;

    const validate = formSchema.safeParse({ amount, base, target });

    if (!validate.success) {
        return <Error />;
    }

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_ACCESS_TOKEN}/pair/${base}/${target}`);    
    const data = await response.json();

    if (data.result === 'error') {
        return <Error />;
    }
    
    const result = (Number(amount) * data.conversion_rate).toFixed(3);

    return (
        <section className='row-start-1 col-start-1 flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-lg'>
            <h1 className='font-adlam text-4xl'>Result</h1>

            <p className='text-lg'>
                {base} {amount} = {target} {result}
            </p>

            <Link href='/' className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mt-2')}>
                Convert a New Currency
            </Link>
        </section>
    );
}