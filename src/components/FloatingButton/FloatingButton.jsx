import "./FloatingButton.css";

export default function FloatingButton() {
  return (
    <button
      className="buy-now-button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://fr.wikipedia.org/wiki/Tri_s%C3%A9lectif", "_blank");
      }}
    >
      En savoir plus sur le tri sélectif
    </button>
  );
}
