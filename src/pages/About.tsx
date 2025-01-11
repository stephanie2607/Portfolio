import React from 'react';
import { Code2, Gamepad, Database, Mail, Phone, MapPin, Glasses, BookAIcon, BookIcon } from 'lucide-react'; // Assure-toi d'importer les icônes nécessaires

interface SkillCardProps {
  Icon: React.ElementType; // Type général pour une icône React
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, title, description }) => (
  <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-6 rounded-lg backdrop-blur-sm border border-purple-800/30 hover:border-purple-700/40 transition-colors duration-300">
    <div className="flex items-center justify-center mb-4">
      <Icon className="text-blue-400" size={32} />
    </div>
    <h3 className="text-xl font-semibold text-center mb-2 text-blue-200">{title}</h3>
    <p className="text-blue-300/80 text-center">{description}</p>
  </div>
);

interface ContactCardProps {
  Icon: React.ElementType; // Type général pour une icône React
  title: string;
  content: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ Icon, title, content }) => (
  <div className="bg-gradient-to-b from-blue-800/90 to-purple-800/90 p-8 rounded-lg shadow-md text-white text-center hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col items-center">
      <Icon size={32} className="mb-4 text-white" />
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-lg">{content}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-purple-950 min-h-screen text-white">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
          Développeur de Jeux Vidéo en Formation
        </h1>
        <div className="relative h-64 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-blue-950/70 rounded-lg z-10" />
          <img
            src="/Portfolio/image/img.jpg"
            alt="Game Development Setup"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-blue-200/80">
          Étudiante en L2 à GE-IT, passionnée par la création d'expériences de jeu innovantes.
        </p>
      </div>

      {/* Cartes de compétences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <SkillCard
          Icon={Code2}
          title="Programmation"
          description="Python, Java, C, C#"
        />
        <SkillCard
          Icon={Gamepad}
          title="Développement de Jeux"
          description="Godot Engine, Pygame, Blender"
        />
        <SkillCard
          Icon={BookIcon}
          title="Mathématiques"
          description="Calculus, Probabilité et Statistique"
        />
      </div>

      {/* Parcours et projets */}
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-8 rounded-lg backdrop-blur-sm border border-purple-800/30">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Mon Parcours
          </h2>
          <div className="space-y-4 text-blue-200/80">
            <p>
              Je suis Rasoamanana Herimanjaka Stéphanie, étudiante en deuxième année à la Grande École de l'Innovation Technologique (Ge-it). 
              Passionnée par le développement de jeux vidéo, j'ai participé à plusieurs projets qui m'ont permis de renforcer mes compétences en programmation et en algorithme.
            </p>
            <p>
              Mon parcours m'a également permis d'explorer des outils comme Blender pour la modélisation 3D et Godot pour le développement de jeux. 
              Ces expériences m'ont donné envie d'explorer d'avantage le monde du développement de jeu video
            </p>
          </div>
        </div>

        {/* Culture Gaming */}
        <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-8 rounded-lg backdrop-blur-sm border border-purple-800/30">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Culture Gaming
          </h2>
          <p className="text-blue-200/80">
            Passionnée par différents genres de jeux vidéo, notamment Genshin Impact, League of Legends, 
            The Legend of Zelda, Tekken, Mortal Kombat et Clash of Clans. Cette passion m'aide à mieux comprendre les mécaniques de jeu modernes 
            et à enrichir ma vision du game design.
          </p>
        </div>
      </div>

      {/* Section Contact */}
      <div className="bg-gradient-to-b from-blue-900/80 to-purple-900/80 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Contact</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              Icon={Mail}
              title="Email"
              content="stephparabis@gmail.com"
            />
            <ContactCard
              Icon={Phone}
              title="Téléphone"
              content="034 44 251 31"
            />
            <ContactCard
              Icon={MapPin}
              title="Localisation"
              content="Antananarivo, Ambohibao"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
