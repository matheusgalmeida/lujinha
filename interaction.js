let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

/*    <section id="sessao-venda">
        <h1>Lojinha do Sr. Miagui</h1>
        <section id="itens_section">
        <!-- <div class="item-box">
                <div class="item-title">
                    <img src="/img/bola_copa.webp" alt="Bola da Copa">
                    <h1>Nome Item</h1>
                    <p>Preco: R$ 00,00</p>
                </div>
                <h2>Descrição:</h2>
                <p>Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar</p>
            </div> -->
        </section>
    </section>*/


let itemSection = document.getElementById('itens_section');


function lujinha(dicria){
    for(let i=0; i<ITENS_LOJA.length;i++){
        
        let insertBox = document.createElement('div');
        let insertTitle = document.createElement('div');
        let insertImg = document.createElement('img');
        let insertH1 = document.createElement('h1');
        let insertPrice = document.createElement('p');
        let insertH2 = document.createElement('h2');
        let insertDescribe = document.createElement('p');

        insertBox.className = 'item-box';
        insertTitle.className = 'item-title';
        
        insertImg.src = ITENS_LOJA[i].url_img;
        insertH1.innerText = ITENS_LOJA[i].nome;
        insertPrice.innerText = 'Preço: ' + ITENS_LOJA[i].preco;
        insertH2.innerText = 'Descrição: ';
        insertDescribe.innerText = ITENS_LOJA[i].descricao;

        itemSection.appendChild(insertBox);
        insertBox.appendChild(insertTitle);
        insertTitle.appendChild(insertImg);
        insertTitle.appendChild(insertH1);
        insertTitle.appendChild(insertPrice);
        insertBox.appendChild(insertH2);
        insertBox.appendChild(insertDescribe);

    }
}

lujinha(ITENS_LOJA);