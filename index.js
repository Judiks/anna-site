window.location.hash = "#menu1"

var menuItems = document.getElementsByClassName('side-menu-item');
for (let item of menuItems) {
    item.addEventListener('click', function(event) {
        for (let itemEvent of menuItems) {
            itemEvent.classList.remove('active')
        }
        item.classList.add('active')
    })
}