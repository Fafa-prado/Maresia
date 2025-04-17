document.addEventListener('DOMContentLoaded', () => {
    const iconeMenu = document.querySelector('.icone-menu');
    const menuLateral = document.getElementById('menuLateral');

    iconeMenu.addEventListener('click', () => {
        menuLateral.style.left = '0';
    });

    window.fecharMenu = function () {
        menuLateral.style.left = '-250px';
    };

    const toggles = document.querySelectorAll('.submenu-toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const submenu = btn.nextElementSibling;
            const isOpen = submenu.style.display === 'block';

            submenu.style.display = isOpen ? 'none' : 'block';

            // Alternar classe 'ativo' para mudar aparência do botão
            btn.classList.toggle('ativo');
        });
    });
});