document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <!-- Titre ou logo du site -->
                <a class="navbar-brand" href="http://127.0.0.1">Accueil</a>
                
                <!-- Bouton pour les écrans étroits -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Basculer la navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Liens de navigation -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="http://127.0.0.1/france.html">Départements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="http://127.0.0.1/prestationYear.html">Revenus par Région</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
});
