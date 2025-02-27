export interface Option {
    value: string;
    label: string;
};

export interface SelectGroupProps {
    options: Promise<Option[]>;
};

export interface SelectProps {
    name: string;
    options: Option[];
};