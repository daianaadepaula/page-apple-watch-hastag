const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');

const verdeCipreste = {
	nome: 'Verde-cipreste',
	pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
	nome: 'Azul-inverno',
	pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
	nome: 'Meia-noite',
	pasta: 'imagens-meia-noite'
};

const estelar = {
	nome: 'Estelar',
	pasta: 'imagens-estelar'
};

const rosaClaro = {
	nome: 'Rosa-Claro',
	pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImagem(){
	const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
	imagemSelecionada = idOpcaoSelecionada.charAt(0);
	imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho(){
	//atualizar variável de controle do tamanho da caixa
	const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
	tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
	//mudar o título do produto
	tituloProduto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoesTamanho[tamanhoSelecionado]
	//mudar o tamanho da jaqueta de acordo com a opção
	if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
		imagemVisualizacao.classList.add('caixa-pequena');
	} else {
		imagemVisualizacao.classList.remove('caixa-pequena');		
	}
	
}