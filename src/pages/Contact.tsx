import React from 'react';
import { Rocket, Star, Lightbulb } from 'lucide-react';

const Ambition = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-purple-950 min-h-screen text-white py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
          Mon Ambition
        </h1>
        <div className="relative h-64 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-blue-950/70 rounded-lg z-10" />
          <img
            src="/Portfolio/image/ambition.jpg" // Mettez ici une image qui symbolise vos ambitions.
            alt="Ambitions professionnelles"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-blue-200/80">
          Mon objectif est de creer un jeu de monde ouvert Inspirant de mon jeu préférer Genshin impact , je cherche à combiner mes compétences et ma créativité .
        </p>
      </div>

      {/* Objectifs détaillés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-6 rounded-lg backdrop-blur-sm border border-purple-800/30 hover:border-purple-700/40 transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="text-blue-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-blue-200">Projets Innovants</h3>
          <p className="text-blue-300/80 text-center">
            Concevoir des jeux captivants avec des mécaniques novatrices.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-6 rounded-lg backdrop-blur-sm border border-purple-800/30 hover:border-purple-700/40 transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-blue-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-blue-200">Excellence</h3>
          <p className="text-blue-300/80 text-center">
            Développer une expertise en game design, programmation et nouvelles technologies comme la VR et l'IA.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-purple-900 p-6 rounded-lg backdrop-blur-sm border border-purple-800/30 hover:border-purple-700/40 transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="text-blue-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-blue-200">Impact</h3>
          <p className="text-blue-300/80 text-center">
            Inspirer et collaborer avec d'autres créateurs pour avancer ensemble dans le domaine du jeu vidéo.
          </p>
        </div>
      </div>
      {/* Ajout d'un espace entre les deux sections */}
      <div className="my-10"></div>

    {/* Section Objectifs Professionnels */}
    <div className="bg-gradient-to-r from-purple-800/70 to-blue-800/70 text-white rounded-xl shadow-xl mx-20 p-8">      <h2 className="text-3xl font-bold text-center mb-4">
        Mes Objectifs
      </h2>
      <p className="text-gray-200 text-base leading-relaxed">
      Mon objectif à court terme est de suivre ce cours afin d'accélérer le développement de mon projet "Miniworld" et d'améliorer mes compétences en création de jeux vidéo.
      À long terme, j'aspire à travailler sur des projets de jeux vidéo innovants, en explorant de nouvelles technologies, en dirigeant des équipes créatives.
      </p>
    </div>

    </div>
  );
};

export default Ambition;
