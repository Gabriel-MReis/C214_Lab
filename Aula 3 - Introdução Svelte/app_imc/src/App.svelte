<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classificacao = "";

	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		classificacaoIMC(imc);
	  } else {
		imc = 0;
	  }
	}

	function classificacaoIMC(imc){
		if (imc <= 18.5){
			classificacao = "Abaixo do peso";
		}else if(imc <= 24.9){
			classificacao = "Peso ideal (parabens)";
		}else if(imc <= 29.9){
			classificacao = "Levemente acima do peso";
		}else if(imc <= 34.9){
			classificacao = "Obesidade grau I";
		}else if(imc <= 39.9){
			classificacao = "Obesidade grau II (severa)";
		}else{
			classificacao = "Obesidade III (morbida)"
		}
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc}</p>
	  <p>{classificacao}</p>
	{/if}
  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}
  </style>
  