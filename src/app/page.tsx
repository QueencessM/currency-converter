import { CurrencyForm } from '@/components/form/currency-form';
import { CurrencySelectGroup } from '@/components/select/currency-select-group';

export default function Home() {
    return (
        <section className='row-start-1 col-start-1 flex flex-col items-center gap-5 p-6 bg-white rounded-2xl shadow-lg'>
            <h1 className='font-adlam text-4xl'>Currency Converter</h1>

            <CurrencyForm>
                <CurrencySelectGroup />
            </CurrencyForm>
        </section>
    );
}
