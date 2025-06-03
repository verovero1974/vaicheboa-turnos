export default function VaicheCard() {
  return (
    <div className="bg-vaiche-azul text-white font-vaiche max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Bienvenida a Vaiche Boa</h2>
      <p className="text-vaiche-amarillo mb-4">
        "Cenamos el viernes pasado, buen trato del personal y comida fantástica."
      </p>
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold">Hugh Montes</span>
        <div className="flex gap-1">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
      </div>
    </div>
  );
}