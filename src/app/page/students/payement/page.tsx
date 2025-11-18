// import React from 'react'

// export default function EtPayementPage() {
//   return (
//     <div>EtPayementPage</div>
//   )
// }

'use client'; // Important si tu utilises Next.js App Router et des hooks/interactivité

import React, { useState, FormEvent } from 'react';

// Définition de l'interface pour les données du formulaire (bonne pratique TypeScript)
interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  amount: number;
}

export default function EtPayementPage() {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    amount: 99.99, // Exemple de montant fixe
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    // --- LOGIQUE DE PAIEMENT SIMULÉE (À REMPLACER PAR TON APPEL API RÉEL) ---
    console.log('Tentative de paiement avec les données:', formData);

    try {
      // **Ici tu ferais l'appel à ton API backend qui communique avec un PSP (Stripe, PayPal, etc.)**
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simuler un délai réseau de 2s

      if (formData.cardNumber.startsWith('4')) { // Simple vérification pour simuler un succès/échec
        setSuccess(true);
        // Normalement, tu redirigerais l'utilisateur ici
      } else {
        setError('Paiement refusé. Veuillez vérifier les informations de votre carte.');
      }
    } catch (err) {
      setError('Une erreur inattendue est survenue.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // --- RENDU TAILWIND CSS ---
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Finaliser votre Paiement 🛍️
        </h1>

        {/* Affichage du Montant */}
        <div className="bg-indigo-50 p-4 rounded-lg mb-6 text-center">
          <p className="text-sm font-medium text-indigo-700">Montant total à payer :</p>
          <p className="text-4xl font-black text-indigo-900">
            {formData.amount.toFixed(2)} €
          </p>
        </div>

        {/* Message d'Erreur ou de Succès */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="font-bold">Succès!</span> Votre paiement a été traité.
          </div>
        )}

        {/* Formulaire de Paiement */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Numéro de Carte */}
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Numéro de Carte
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19} // 16 chiffres + 3 espaces
              required
              disabled={isLoading || success}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            />
          </div>

          {/* Nom sur la Carte */}
          <div>
            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
              Nom sur la Carte
            </label>
            <input
              type="text"
              name="cardHolder"
              id="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="JULES DUPONT"
              required
              disabled={isLoading || success}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex space-x-4">
            {/* Date d'Expiration */}
            <div className="flex-1">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiration (MM/AA)
              </label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="09/26"
                maxLength={5}
                required
                disabled={isLoading || success}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* CVV */}
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                name="cvv"
                id="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="***"
                maxLength={4}
                required
                disabled={isLoading || success}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Bouton de Soumission */}
          <button
            type="submit"
            disabled={isLoading || success}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition duration-300 ${
              isLoading || success
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            }`}
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : success ? (
              'Paiement Réussi !'
            ) : (
              `Payer ${formData.amount.toFixed(2)} €`
            )}
          </button>
        </form>
      </div>
    </div>
  );
}