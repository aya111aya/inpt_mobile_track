import React from 'react';
import './2emepage.css';
import { Link } from 'react-router-dom';
const Page2 = () => {
  return (
    <div>
      <h2>Inscription</h2>
      <form>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="prenom">Prénom:</label>
        <input type="text" id="prenom" name="prenom" required />

        <label htmlFor="email">Adresse e-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm_password">Confirmer le mot de passe:</label>
        <input type="password" id="confirm_password" name="confirm_password" required />
        <Link to="/page3">
        <input type="submit" value="S'inscrire" />
        </Link>
       </form>
      
    </div>
  );
}

export default Page2;
