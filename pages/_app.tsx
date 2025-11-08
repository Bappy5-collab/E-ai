import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/globals.css';

const COLOR_SCHEME_STORAGE_KEY = 'eco-ai-color-scheme';

type ColorScheme = 'light' | 'dark';

type ExtendedAppProps = AppProps;

function MyApp({ Component, pageProps }: ExtendedAppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedScheme = window.localStorage.getItem(COLOR_SCHEME_STORAGE_KEY) as ColorScheme | null;
    if (storedScheme === 'light' || storedScheme === 'dark') {
      setColorScheme(storedScheme);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', colorScheme === 'dark');
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, colorScheme);
    }
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Head>
        <title>Eco AI Chatbot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="An AI chatbot experience built with Next.js and the OpenAI API." />
      </Head>
      <AuthProvider>
        <Component {...pageProps} colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

