import React from 'react';

const Welcome = () => {
    return (
        <header className="py-5 bg-light text-center">
    <div className="container">
        <h1 className="display-4">¡Recetas Fáciles para Todos!</h1>
        <p className="lead">¿No sabes qué cocinar? Aquí encontrarás recetas rápidas, sencillas y deliciosas. Perfectas para cada nivel de experiencia.</p>
        <a className="btn btn-lg btn-purple" href="#recipes">Descubre las recetas</a>
    </div>
</header>
    );
};

export default Welcome;