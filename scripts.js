document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    // Ajusta el tamaño del contenido al 67% del viewport
    function resizeContent() {
        content.style.width = '67vw';
        content.style.height = '67vh';
    }

    // Escucha el evento de cambio de tamaño para reajustar el contenido
    window.addEventListener('resize', resizeContent);

    // Ejecuta la función para ajustar el tamaño al cargar la página
    resizeContent();
});
