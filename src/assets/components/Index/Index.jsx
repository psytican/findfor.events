import React, { useState, useEffect } from 'react';
import {
    HomeIcon,
    UserIcon,
    BellIcon,
    Bars3Icon,
    XMarkIcon,
    Cog6ToothIcon,
    SunIcon,
    MoonIcon
} from '@heroicons/react/24/outline';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

const Index = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <HomeIcon className="h-8 w-8 text-blue-500"/>
                            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">My App</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {darkMode ? (
                                    <SunIcon className="h-6 w-6"/>
                                ) : (
                                    <MoonIcon className="h-6 w-6"/>
                                )}
                            </button>
                            <button
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <BellIcon className="h-6 w-6"/>
                            </button>
                            <button
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <UserIcon className="h-6 w-6"/>
                            </button>
                            <button
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Cog6ToothIcon className="h-6 w-6"/>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-2">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {darkMode ? (
                                    <SunIcon className="h-6 w-6"/>
                                ) : (
                                    <MoonIcon className="h-6 w-6"/>
                                )}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6"/>
                                ) : (
                                    <Bars3Icon className="h-6 w-6"/>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden pb-3 space-y-1">
                            <button
                                className="flex items-center w-full px-4 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500">
                                <BellIcon className="h-6 w-6 mr-3"/>
                                Notifications
                            </button>
                            <button
                                className="flex items-center w-full px-4 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500">
                                <UserIcon className="h-6 w-6 mr-3"/>
                                Profile
                            </button>
                            <button
                                className="flex items-center w-full px-4 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500">
                                <Cog6ToothIcon className="h-6 w-6 mr-3"/>
                                Settings
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 1</h2>
                            <p className="text-gray-600 dark:text-gray-300">Content for card 1</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 2</h2>
                            <p className="text-gray-600 dark:text-gray-300">Content for card 2</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Card 3</h2>
                            <p className="text-gray-600 dark:text-gray-300">Content for card 3</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
                <div className="max-w-7xl mx-auto py-4 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 My App. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="#"
                               className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Privacy</a>
                            <a href="#"
                               className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Terms</a>
                            <a href="#"
                               className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;