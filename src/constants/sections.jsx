export const SECTIONS = [
  {
    content: (
      <>
        <h2>Poubelle intelligente</h2>
        <p>
          Une poubelle connectée qui reconnaît les déchets, choisit le bon
          compartiment et facilite le tri au quotidien. Compacte, rapide et
          pensée pour réduire l'impact environnemental à la maison ou au bureau.
        </p>
        <div>
          <h4>Objectifs:</h4>
          <ul>
            <li>
              <span className="list-label">Reconnaissance automatique:</span> La caméra détecte le type de déchet.
            </li>
            <li>
              <span className="list-label">Tri optimisé:</span> Répartition entre organique, papier, métal et plastique.
            </li>
            <li>
              <span className="list-label">Suivi intelligent:</span> Capteurs et application pour être notifié quand c'est plein.
            </li>
          </ul>
        </div>
        <p>
          Conçue pour favoriser le tri, elle s'intègre naturellement à votre
          quotidien et encourage des habitudes durables.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 12 },
    },
    objectPosition: {
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: 0, y: Math.PI * 0.1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Caméra intégrée</h3>
        <p>
          Une caméra embarquée analyse les déchets en temps réel et
          reconnaît automatiquement leur catégorie grâce à des modèles
          d'IA, sans interaction supplémentaire.
        </p>
        <p>
          Le système propose le bon compartiment et oriente mécaniquement le
          couvercle pour guider le dépôt du déchet.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 0.5, z: 10 },
      lookAt: { x: 0, y: 0.5, z: 0 },
      zoom: 1,
    },
    objectPosition: {
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: Math.PI * 0.5, y: Math.PI * 0.5, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>4 compartiments internes</h3>
        <p>
          La poubelle est divisée en quatre compartiments pour un tri clair :
          organique, papier, métal et plastique.
        </p>
        <ul>
          <li>Organique: déchets alimentaires et biodégradables.</li>
          <li>Papier: journaux, cartons propres.</li>
          <li>Métal: canettes, emballages métalliques.</li>
          <li>Plastique: bouteilles et emballages plastiques.</li>
        </ul>
      </>
    ),
    cameraPosition: {
      position: { x: 1.5, y: 1, z: 11 },
    },
    objectPosition: {
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: Math.PI / 2, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Capteurs et notifications</h3>
        <p>
          Des capteurs de niveau mesurent le taux de remplissage de chaque
          compartiment et synchronisent l'information avec une application
          mobile.
        </p>
        <p>
          Vous êtes notifié automatiquement lorsque l'un des bacs est plein et
          recevez des conseils personnalisés pour améliorer vos habitudes de tri.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 1, z: 12 },
    },
    objectPosition: {
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: 0, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h2>Agir dès aujourd'hui</h2>
        <p>
          Adoptez une solution simple et intelligente pour favoriser le tri et
          réduire vos déchets.
        </p>
        <a
          className="learn-more-button"
          href="https://fr.wikipedia.org/wiki/Tri_s%C3%A9lectif"
          target="_blank"
        >
          En savoir plus sur le tri sélectif
        </a>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 12 },
    },
    objectPosition: {
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: 0, y: Math.PI * 0.1, z: 0 },
    },
  },
];
