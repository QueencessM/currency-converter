import { Suspense } from 'react';
import { SelectGroup } from './select-group';
import { SkeletonLoading } from './skeleton-loading';

export const revalidate = 3600; // not sure if working

const getCurrencies = async () => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_ACCESS_TOKEN}/codes`);
        const data = await response.json();

        const supportedCodes = (data.supported_codes).map((currency: [string, string]) => ({
            value: currency[0],
            label: `${currency[0]} - ${currency[1]}`,
        }));

        return supportedCodes;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const CurrencySelectGroup = () => {
    const currencies = getCurrencies();

    return (
        <Suspense fallback={<SkeletonLoading />}>
            <SelectGroup options={currencies} />
        </Suspense>
    );
};