window.onload = () => {
    let input = document.querySelector('#input');
    input.oninput = function () {
        let value = input.value.trim();
        let lists = document.querySelectorAll('.ol li');
        
        if (value != '') {
            lists.forEach(elem => {
                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide')
                }
            })
        } else {
            lists.forEach(elem => {
                elem.classList.remove('hide')

            })
        }
        
    }
}