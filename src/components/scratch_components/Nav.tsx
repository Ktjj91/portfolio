"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });

            setIsOpen(false); // Ferme le menu après le clic
        }
    };

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About Me', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact Us', id: 'contact' },
    ];

    return (
        <nav className="p-3 bg-green-600 text-white flex items-center justify-between lg:grid lg:grid-cols-3">
            {/* Section du logo */}
            <div>
                <p className="text-2xl font-bold tracking-widest">Kingsley</p>
                <p><small className="italic">Developer fullstack</small></p>
            </div>

            {/* Liens pour la version bureau */}
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
                <Button variant="secondary" onClick={() => handleSmoothScroll("contact")}>
                    Contact Us
                </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden ml-auto" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Menu latéral */}
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
