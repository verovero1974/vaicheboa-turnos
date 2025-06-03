import React, { useState } from 'react';
import { Calendar, Clock, User, Settings, RefreshCw, Plus, Coffee } from 'lucide-react';
import VaicheCard from './VaicheCard';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [user] = useState({
    name: 'Verónica',
    role: 'admin',
    turnos: [
      {
        fecha: '2024-01-20',
        entrada: '09:00',
        salida: '17:00'
      },
      {
        fecha: '2024-01-21',
        entrada: '10:00',
        salida: '18:00'
      }
    ]
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 border-b border-indigo-200 pb-4">
          <div className="flex items-center gap-3">
            <Coffee className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-indigo-800">Vaiche Boa - Turnos</h1>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="font-medium">{user.name}</span>
          </div>
        </header>

        {/* Welcome section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Hola <span className="text-indigo-600">{user.name}</span> 👋
          </h2>
          <p className="text-gray-600 mb-2">Estos son tus turnos asignados esta semana:</p>
          
          {/* Shifts list */}
          <div className="mt-4 space-y-3">
            {user.turnos.map((turno, i) => (
              <div key={i} className="flex items-center bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <div className="flex-shrink-0 mr-4 bg-indigo-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-gray-800">{formatDate(turno.fecha)}</p>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{turno.entrada} a {turno.salida}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Request shift change button */}
          <button 
            onClick={() => setShowModal(true)}
            className="mt-6 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <RefreshCw className="h-4 w-4" />
            Solicitar cambio de turno
          </button>
        </div>

        {/* Admin panel */}
        {user.role === "admin" && (
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-600">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">Panel de administración</h2>
            </div>
            
            <p className="text-gray-600 mb-4">Gestiona los turnos del personal desde aquí.</p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <Plus className="h-4 w-4" />
                Crear nuevo turno
              </button>
              
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg transition-colors">
                Ver todos los turnos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal (simplified) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              {user.role === "admin" ? "Crear nuevo turno" : "Solicitar cambio de turno"}
            </h3>
            <p className="text-gray-600 mb-4">
              Esta funcionalidad estará disponible próximamente.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;