let num = document.querySelector('input#num')
let txttab = document.querySelector('.txt p#tab')
let txtpretab = document.querySelector('.txt p#pre-tab')

function calc() {
    if (num.value.length == '') {
        alert('[Erro] Por favor, digite algo.')
    } else if (Number(num.value) == 0){
				txtpretab.innerHTML = `Todo número multiplicado por zero tem como resultado, zero.`
				txtpretab.style.color = 'red'
	} else {
        txttab.innerHTML = ''
        let n = Number(num.value)
			
        txtpretab.classList.add("hidden")
        txttab.classList.remove("hidden")

        for (c = 1; c <= 10; c += 1) {
            let res = (n * c)
						
            txttab.innerHTML += `<p>${n}x${c} = ${res}</p>`
        }
    }
}

function reload() {
	txtpretab.innerHTML = 'Seu resultado será mostrado aqui.'
	txtpretab.style.color = 'black'
	txtpretab.classList.remove("hidden")
	txttab.classList.add("hidden")
	num.value = ''
}