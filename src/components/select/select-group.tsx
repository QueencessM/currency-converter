'use client';

import { use } from 'react';
import { useFormStatus } from 'react-dom';

import { SelectGroupProps } from './types';
import { Select } from './select';

export const SelectGroup = ({ options }: SelectGroupProps) => {
    const { pending } = useFormStatus();

    const allOptions = use(options);

    return (
        <fieldset className='grid grid-cols-2 gap-3' disabled={pending}>
            <fieldset className={`flex flex-col gap-1`}>
                Base:
                <Select name='base' options={allOptions} />
            </fieldset>

            <fieldset className={`flex flex-col gap-1`}>
                Target:
                <Select name='target' options={allOptions} />
            </fieldset>
        </fieldset>
    );
};