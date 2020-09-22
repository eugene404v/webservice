import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

const reqBtn = document.querySelector('.requisits__file')
const reqList = document.querySelector('.requisits__list')

reqBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(reqList.textContent)
    alert('реквизиты скопированы')
})