import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ADLaM_Display, Nunito } from 'next/font/google'; // (https://nextjs.org/docs/app/getting-started/images-and-fonts#google-fonts)
import './globals.css';

// weight is required if font is not variable
// (https://nextjs.org/docs/app/api-reference/components/font#weight)
const adlam = ADLaM_Display({
    weight: '400',
    subsets: ['adlam'],
    variable: '--font-adlam',
});

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
});

export const metadata: Metadata = {
    title: 'Currency Converter',
    description: 'This is a simple currency converter.',
};

type RootLayoutProps = Readonly<{
    children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en'>
            <head>
                <meta name="darkreader-lock" />
            </head>

            <body className={`${adlam.variable} ${nunito.variable}`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout; // has to be default export