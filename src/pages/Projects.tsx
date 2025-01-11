import React from 'react';

const projects = [
  {
    title: "Jeu d'Échecs",
    description: "Ce projet m'a permis de développer une interface graphique simple pour un jeu classique et de mettre en pratique des concepts de mathématiques pour gérer les déplacements des pièces. Il inclut aussi des fonctionnalités de base comme la détection des échecs et des mat.",
    image: "/image/chess.png",
    tags: ["Python", "Pygame", "Math"],
    github: "https://github.com/stephanie2607/chess_game"
  },
  {
    title: "Escape Game",
    description: "Le jeu d'escape intègre des mécanismes de jeu où le joueur résout des énigmes pour progresser. Bien que simple, il m'a permis de me familiariser avec la gestion de l'interface utilisateur et des interactions utilisateur dans un environnement Java.",
    image: "/image/room.png",
    tags: ["Java", "Swing", "AWT"],
    github: "https://github.com/ManantsoaRayan/Escape_game_Java_Project"
  },
  {
    title: "Cellule Automate",
    description: "Une simulation de vie ou de mort de cellule pour créer des visualisations des comportements de systèmes complexes. Ce projet est une introduction vers le génération procédural et a été une excellente occasion de pratiquer la gestion de données avec NumPy et la création de visualisations dynamiques avec Matplotlib.",
    image: "/image/automate.png",
    tags: ["Python", "Matplotlib", "NumPy"],
    github: "https://github.com/ManantsoaRayan/cellular_automata_project/"
  },
];

const Projects = () => {
  return (
    <div className="max-w-full mx-auto py-12 bg-gradient-to-b from-blue-900/90 to-purple-900/90 min-h-screen">
      {/* Section Projets */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400/80 to-purple-400/80 text-transparent bg-clip-text mb-12 text-center">
        Mes Projets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-800/70 to-purple-800/70 text-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 mx-auto"
          >
            <div className="relative h-60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-300/80 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-200 text-base leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-700 text-gray-200 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 font-bold text-lg hover:text-blue-400 transition-colors duration-300"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
