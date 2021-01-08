(function () {
	const $container = document.querySelector('.container'),
		$numberA = $container.querySelector('#numberA'),
		$numberB = $container.querySelector('#numberB'),
		$soma = $container.querySelector('#soma'),
		$subtracao = $container.querySelector('#subtracao'),
		$subtracaoReversa = $container.querySelector('#subtracao2'),
		$multiplicacao = $container.querySelector('#multiplicacao'),
		$divisao = $container.querySelector('#divisao'),
		$divisaoReversa = $container.querySelector('#divisao2'),
		$quadradoA = $container.querySelector('#quadradoA'),
		$quadradoB = $container.querySelector('#quadradoB'),
		$divisoresIntA = $container.querySelector('#divisoresIntA'),
		$divisoresIntB = $container.querySelector('#divisoresIntB'),
		$fatorialA = $container.querySelector('#fatorialA'),
		$fatorialB = $container.querySelector('#fatorialB');

	const soma = (a, b) => a + b
	const subtracao = (a, b) => a - b
	const subtracaoReversa = (b, a) => b - a
	const divisao = (a, b) => {
		if (b !== 0) {
			return a / b;
		} else {
			return 'Impossivel dividor por 0!';
		}
	}
	const divisaoReversa = (b, a) => {
		if (a !== 0) {
			return b / a;
		} else {
			return 'Impossivel dividor por 0!';
		}
	}
	const multiplicacao = (a, b) => a * b
	const quadrado = (num) => num ** 2
	const fatorial = (num) => {
		if (num <= 21) {
			let recursiveVal = 1;
			for (let i = 2; i <= num; i++) {
				recursiveVal *= i;
			}
			return recursiveVal;
		} else {
			return 'Numero muito grande (Maior que 21)';
		}
	}
	const divisoresInteirosA = (a) => {
		let arrInt = []
		
		for(let i = 0; i <= a; i++){
			if(a % i === 0) {
				arrInt.push(i);
			}
		}
		console.log(arrInt);
	}
	const divisoresInteirosB = (b) => {}

	const setActiveClassToLabel = (forAttr) => {
		document.querySelector(`[for="${forAttr}"]`).classList.add('active');
	};

	const setSoma = (a, b) => {
		$soma.value = soma(a, b);
		setActiveClassToLabel('soma');
	};
	const setSubtracao = (a, b) => {
		$subtracao.value = subtracao(a, b);
		setActiveClassToLabel('subtracao');
	};
	const setSubtracaoReversa = (b, a) => {
		$subtracaoReversa.value = subtracaoReversa(b, a);
		setActiveClassToLabel('subtracao2');
	};
	const setMultiplicacao = (a, b) => {
		$multiplicacao.value = multiplicacao(a, b);
		setActiveClassToLabel('multiplicacao');
	};
	const setDivisao = (a, b) => {
		$divisao.value = divisao(a, b);
		setActiveClassToLabel('divisao');
	};
	const setDivisaoReversa = (b, a) => {
		$divisaoReversa.value = divisaoReversa(b, a);
		setActiveClassToLabel('divisao2');
	};
	const setQuadradoA = (a) => {
		$quadradoA.value = quadrado(a);
		setActiveClassToLabel('quadradoA');
	};
	const setQuadradoB = (b) => {
		$quadradoB.value = quadrado(b);
		setActiveClassToLabel('quadradoB');
	};
	const setDivisoresIntA = (a) => {
		$divisoresIntA.value = divisoresInteirosA(a);
		setActiveClassToLabel('divisoresIntA');
	};
	const setDivisoresIntB = (b) => {
		$divisoresIntB.value = divisoresInteirosB(b);
		setActiveClassToLabel('divisoresIntB');
	};
	const setFatorialA = (a) => {
		$fatorialA.value = fatorial(a);
		setActiveClassToLabel('fatorialA');
	};
	const setFatorialB = (b) => {
		$fatorialB.value = fatorial(b);
		setActiveClassToLabel('fatorialB');
	};

	const setFields = (a, b) => {
		setSoma(a, b);
		setSubtracao(a, b);
		setSubtracaoReversa(b, a);
		setMultiplicacao(a, b);
		setDivisao(a, b);
		setDivisaoReversa(b, a);
		setQuadradoA(a);
		setQuadradoB(b);
		setDivisoresIntA(a);
		setDivisoresIntB(b);
		setFatorialA(a);
		setFatorialB(b);
	};

	$container.addEventListener('change', (ev) => {
		if ($numberA.value !== '' && $numberB.value !== '') {
			setFields(parseInt($numberA.value), parseInt($numberB.value));
		}
	});
})();
