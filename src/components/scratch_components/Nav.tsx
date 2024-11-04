"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useChangeLocale, useI18n } from "@/app/locales/client";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [changeToLocale, setChangeToLocale] = useState(false);
    const t = useI18n();
    const changeLocale = useChangeLocale();

    const fr = "fr".split('').map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('');
    const en = "us".split('').map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('');

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            setChangeToLocale(storedLocale === 'fr');
            changeLocale(storedLocale as 'en' | 'fr');
        }
    }, [changeLocale]);

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    };

    const links = [
        { name: t('Home'), id: 'home' },
        { name: t('AboutMe'), id: 'about' },
        { name: t('Services'), id: 'services' },
        { name: t('Project'), id: 'projects' },
        { name: t('ContactUs'), id: 'contact' },
    ];

    const handleChangeLocale = () => {
        const newLocale = changeToLocale ? 'en' : 'fr'; // Toggle the locale
        setChangeToLocale(!changeToLocale); // Toggle state
        changeLocale(newLocale); // Update the locale
        localStorage.setItem('locale', newLocale); // Store in localStorage
        console.log(`Locale changed to: ${newLocale}`); // Debugging message
    };

    return (
        <nav className="p-3 bg-green-600 text-white flex items-center justify-between lg:grid lg:grid-cols-3">
            <div>
                <p className="text-2xl font-bold tracking-widest">Kingsley</p>
                <p><small className="italic">Developer fullstack</small></p>
            </div>

            <ul className="hidden md:flex space-x-4 flex-row justify-center">
                {links.map((link) => (
                    <li key={link.id}>
                        <button
                            onClick={() => handleSmoothScroll(link.id)}
                            className="hover:underline text-left"
                        >
                            {link.name}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="hidden md:block justify-self-end">
                <button className="text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-110 " onClick={handleChangeLocale}>
                    {changeToLocale ? fr : en}
                </button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden ml-auto" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>

            <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed right-0 top-0 w-64 h-full bg-white p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                    <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black font-bold">
                        Fermer
                    </button>
                    <div className="flex flex-col space-y-4 mt-4">
                        {links.map((link) => (
                            <button
                                onClick={() => handleSmoothScroll(link.id)}
                                key={link.id}
                                className="text-left hover:underline text-black"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
