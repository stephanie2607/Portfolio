import React from 'react';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/stephanie2607/stephanie2607", label: "GitHub" },
    { icon: Mail, href: "mailto:stephparabis@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-purple-900 backdrop-blur-sm border-t border-purple-800/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo et Nom */}
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              GameDev Portfolio
            </h2>
          </div>

          {/* Liens sociaux */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group relative p-2 bg-blue-800/20 rounded-lg hover:bg-purple-800/30 transition-all duration-300"
              >
                <social.icon 
                  className="w-5 h-5 text-blue-300 group-hover:text-purple-300 transition-colors duration-300" 
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-900/90 text-blue-200 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Séparateur */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="text-blue-200/80 text-sm">
              Créé avec passion pour le développement de jeux
            </p>
            <p className="text-blue-300/60 text-xs">
              © 2025 GameDev Portfolio. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;