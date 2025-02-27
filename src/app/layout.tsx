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
                <meta name='darkreader-lock' />
            </head>

            <body className={`${adlam.variable} ${nunito.variable}`}>
                <main className='grid items-center justify-items-center w-full h-screen font-nunito'>
                    {children}
                    <div className='row-start-1 col-start-1 size-full bg-[url("/background.jpg")] bg-cover opacity-50 blur-sm -z-10' />
                </main>
            </body>
        </html>
    );
};

export default RootLayout;