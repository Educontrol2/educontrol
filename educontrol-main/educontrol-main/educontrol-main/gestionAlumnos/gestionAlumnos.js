 // Script para cambiar pestañas
 document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Quitar clase active de todas las pestañas
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Agregar clase active a la pestaña clickeada
        this.classList.add('active');
        
        // Ocultar todos los contenidos de pestañas
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Mostrar el contenido de la pestaña seleccionada
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Script para el dropdown de filtros
document.getElementById('filterBtn').addEventListener('click', function() {
    document.getElementById('filterDropdown').classList.toggle('show');
});

// Cerrar el dropdown cuando se hace clic fuera
window.addEventListener('click', function(event) {
    if (!event.target.matches('.filter-btn') && !event.target.closest('.filter-content')) {
        var dropdowns = document.getElementsByClassName('filter-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

// Script para botón de agregar alumno
document.getElementById('addStudentBtn').addEventListener('click', function() {
    // Activar pestaña de agregar alumno
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.tab[data-tab="agregar-alumno"]').classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('agregar-alumno').classList.add('active');
});

// Funciones para el modal de eliminación
function openDeleteModal(id, name) {
    document.getElementById('studentName').textContent = name;
    document.getElementById('deleteModal').style.display = 'block';
    // Almacenar el ID del estudiante para usar en la función de eliminación
    document.getElementById('deleteModal').setAttribute('data-student-id', id);
}

function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

function deleteStudent() {
    const studentId = document.getElementById('deleteModal').getAttribute('data-student-id');
    // Aquí iría la lógica para eliminar el estudiante (AJAX, fetch, etc.)
    alert('Estudiante con ID ' + studentId + ' eliminado.');
    closeDeleteModal();
    // Recargar la lista o eliminar la fila de la tabla
}