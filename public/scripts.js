let currentIndex = 0;
    function togglePeliculas() {
        const PeliculaList = document.getElementById('Pelicula-list');
        PeliculaList.style.display = PeliculaList.style.display === 'none' ? 'block' : 'none';
    }
    function confirmDeletion() {
        return confirm('¿Estás seguro de que quieres eliminar esta película?');
    }
    function moveCarousel(direction) {
        const container = document.getElementById('carousel-container');
        const items = document.querySelectorAll('.custom-carousel-item');
        const totalItems = items.length;
        const visibleItems = 2;
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        container.style.transform = `translateX(-${(currentIndex * 100) / visibleItems}%)`;
    }
    function editPelicula(id, nombre, descripcion, imagen) {
        document.getElementById('edit-id').value = id;
        document.getElementById('edit-nombre').value = nombre;
        document.getElementById('edit-descripcion').value = descripcion;
        document.getElementById('edit-imagen').value = imagen;
        document.getElementById('edit-form').style.display = 'block';
    }

    function toggleAgregarPelicula() {
      const formContainer = document.querySelector(".form-agregar-container");
      formContainer.style.display = (formContainer.style.display === "none" || formContainer.style.display === "") ? "block" : "none";
  }


    document.getElementById("imagen").addEventListener("change", function() {
    let fileName = this.files[0] ? this.files[0].name : "Ningún archivo seleccionado";
    document.getElementById("file-name").textContent = fileName;
  });
