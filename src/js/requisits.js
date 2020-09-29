const reqBtns = document.querySelectorAll('.requisits__file')
const reqLists = document.querySelectorAll('.requisits__list')

reqBtns.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let text = ""
        const list = reqLists[i]
        const reqItems = list.querySelectorAll('.requisits__item')
        reqItems.forEach(item => {
            const type = item.querySelector('.requisits__type').textContent
            const content = item.querySelector('.requisits__content').textContent
            text = `${text}
        ${type} ${content}`
        })
        navigator.clipboard.writeText(text)
        alert('реквизиты скопированы')
    })
})



const headers = document.querySelectorAll('.requisits__headline')

headers.forEach((el, i) => {
    const title = el.querySelector('.requisits__header')
    const expandBtn = el.querySelector('.requisits__expand')
    title.addEventListener('click', () => {
        expandBtn.classList.toggle('requisits__expand--opened')
        el.nextElementSibling.classList.toggle('requisits__list--opened')
    })
    expandBtn.addEventListener('click', () => {
        expandBtn.classList.toggle('requisits__expand--opened')
        el.nextElementSibling.classList.toggle('requisits__list--opened')
    })
})