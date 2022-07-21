const vaz = []


function soma(ay) {
    let soma = 0
    for (let j = 0; j < ay.length; j++) {
        console.log(ay[j].value)
        soma += ay[j].value
    }
    const quanti = document.getElementById('quant')
    const valure = document.getElementById('tot')
    quanti.innerText = ay.length
    console.log(valure)
    console.log(soma)
    valure.innerText = soma
    
    
}

function tags(obj) {
    let main = document.querySelector('main')
    let section = document.querySelector('section')



    for (let i = 0; i < obj.length; i++) {
        let article = document.createElement('article')
        section.appendChild(article)
        let imge = document.createElement('img')
        imge.src = obj[i].img
      
        let paragraph1 = document.createElement('p')
        paragraph1.classList.add('category')
        paragraph1.innerText = obj[i].tag[0]
        let paragraph2 = document.createElement('p')
        paragraph2.classList.add('nomeItem')
        paragraph2.innerText = obj[i].nameItem
        let paragraph3 = document.createElement('p')
        paragraph3.classList.add('destricao')
        paragraph3.innerText = obj[i].description
        let paragraph4 = document.createElement('p')
        paragraph4.classList.add('price')
        paragraph4.innerText = "R$ " + obj[i].value
        let button = document.createElement('button')
        button.classList.add('adcCarrinho')

        button.id = obj[i].id
        button.innerText = obj[i].addCart
        article.append(imge, paragraph1, paragraph2, paragraph3, paragraph4, button)

        button.setAttribute('id', obj.id)
        button.addEventListener('click', (event) => {
            vaz.push(obj[i])
            console.log(vaz)
            carrinho(vaz)
            soma(vaz)
            final(vaz)

        })
    }

    // let aside = document.createElement('aside')
    // let dentroDoCarrinho = document.getElementsByClassName('dentro_carrinho')
    // let ul = document.querySelector ('ul')
    // let form = document.createElement('form')
    // let input = document.createElement('input')
    // input.setAttribute = ('type', 'text')
    // input.classList.add('box')
    // input.placeholder = 'Digite aqui sua pesquisa'
    // let btnSearch = document.createElement('button')
    // btnSearch.type = 'submit'
    // btnSearch.classList.add('bntPesquisar')
    // btnSearch.innerText = 'Pesquisar'
    // let div = document.createElement('div')
    // div.classList.add('car')
    // let h2 = document.createElement('h2')
    // h2.classList.add('carrinho')
    // h2.innerText = 'Carrinho de compras'
    // let div2 = document.createElement('div')
    // div2.classList.add('position')
    // let p = document.createElement('p')
    // p.classList.add('paragraph')
    // p.innerText = 'Carrinho vazio'
    // let p2 = document.createElement('p')
    // p2.classList.add('adicionar')
    // p2.innerText = 'Adicionar itens'


    // section.append(aside)
    // aside.append(form, div, dentroDoCarrinho)
    // form.append(input, btnSearch)
    // div.append(h2, div2)
    // div2.append(p, p2)
    // console.log(aside)

    return main
}
tags(data)

function carrinho(obj) {
    let ul = document.querySelector('.ulCarrinho')
    for (let i = 0; i<obj.length; i++){
    let li = document.createElement('li')
    
    let im = document.createElement('img')
    im.src = obj[i].img
    im.classList.add('imagem_dentro_carrinho')
    let divCarrinho = document.createElement('div')
    let pp = document.createElement('p')
    pp.classList.add('nomeIte')
    pp.innerText = obj[i].nameItem
    let pp2 = document.createElement('p')
    pp2.innerHTML = "R$ " + obj[i].value
    pp2.classList.add('price')
    let bu = document.createElement('button')
    bu.innerHTML = "Remover produto"
    bu.classList.add('removeCar')
    bu.id = obj[i].id
    divCarrinho.append(pp, pp2, bu)
    li.append(im, divCarrinho)
    
    ul.appendChild(li)
 }
 return li

    
}

// function final(arr) {
//     let divisona = document.getElementsByClassName('final')
//     let divi = document.getElementsByClassName('pri')
//     let didi = document.getElementsByClassName('seg')
//     let pp1 = document.createElement('p')
//     pp1.id = 'quant'
//     divi.appendChild(pp1)
//     let pp3 = document.createElement('p')
//     pp3.id = 'tot'
//     didi.appendChild(pp3)
//     divisona.append(divi, didi)

//     return divisona

// }

