"use client";
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useChangeLocale, useI18n } from "@/app/locales/client";
import { IoMdClose } from "react-icons/io";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [changeToLocale, setChangeToLocale] = useState(false);
    const t = useI18n();
    const changeLocale = useChangeLocale();
    const sideMenuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const fr = "fr".split('').map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('');
    const en = "us".split('').map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('');

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            setChangeToLocale(storedLocale === 'fr');
            changeLocale(storedLocale as 'en' | 'fr');
        }
    }, [changeLocale]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sideMenuRef.current &&
                overlayRef.current &&
                !sideMenuRef.current.contains(event.target as Node) &&
                overlayRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
        const newLocale = changeToLocale ? 'en' : 'fr';
        setChangeToLocale(!changeToLocale);
        changeLocale(newLocale);
        localStorage.setItem('locale', newLocale);
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

            <div ref={overlayRef} className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div ref={sideMenuRef} className={`fixed right-0 top-0 w-64 h-full bg-white p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                    <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black font-bold text-4xl float-right">
                        <IoMdClose />
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
                        <button
                            className=" left-0 text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-110 "
                            onClick={handleChangeLocale}>
                            {changeToLocale ? fr : en}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
