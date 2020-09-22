import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

const reqBtn = document.querySelector('.requisits__file')
const reqItems = document.querySelectorAll('.requisits__item')

reqBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let text = ""
    reqItems.forEach(item => {
        const type = item.querySelector('.requisits__type').textContent
        const content = item.querySelector('.requisits__content').textContent
        text = `${text}
        ${type} ${content}`
    })
    navigator.clipboard.writeText(text)
    alert('реквизиты скопированы')
})