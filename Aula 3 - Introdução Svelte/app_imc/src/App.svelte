<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classificacao = "";
	let showDescription = false;
	let tips = "";
	let color = "";

	// Função para alternar a exibição da descrição do IMC
	function toggleDescription() {
		showDescription = !showDescription;
	}

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
			color = "blue";
			tips = [
				"Considere aumentar a ingestão de calorias saudáveis.",
				"Inclua alimentos ricos em nutrientes, como proteínas magras e carboidratos complexos.",
				"Consulte um profissional de saúde para orientação personalizada.",
			];
		}else if(imc <= 24.9){
			classificacao = "Peso ideal (parabens)";
			color = "green";
			tips = [
				"Continue mantendo uma dieta equilibrada e saudável.",
				"Mantenha um estilo de vida ativo com exercícios regulares.",
			];
		}else if(imc <= 29.9){
			classificacao = "Levemente acima do peso";
			color = "orange";
			tips = [
				"Aumente a atividade física para queimar calorias extras.",
				"Faça escolhas alimentares conscientes, optando por porções menores.",
			];
		}else if(imc <= 34.9){
			classificacao = "Obesidade grau I";
			color = "red";
			tips = [
				"Converse com um profissional de saúde para criar um plano de dieta e exercícios.",
				"Priorize alimentos frescos e naturais, evitando alimentos ultraprocessados.",
			];
		}else if(imc <= 39.9){
			classificacao = "Obesidade grau II (severa)";
			color = "darkred";
			tips = [
				"Busque orientação médica para abordar problemas de saúde relacionados.",
				"Procure um nutricionista para criar um plano de refeições personalizado.",
			];
		}else{
			classificacao = "Obesidade III (morbida)"
			color = "purple";
			tips = [
				"Procure ajuda médica para discutir opções de tratamento.",
				"Foque em fazer mudanças sustentáveis na dieta e no estilo de vida.",
			];
		}
	}
  </script>
  
  <body>
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
		<p>Sua classificação é <span style="color: {color}">{classificacao}</span></p>
		{/if}
		<button on:click={toggleDescription}>O que é IMC?</button>
		{#if showDescription}
			<div>
				<!-- Descrição do IMC -->
				<p>
				O Índice de Massa Corporal (IMC) é uma medida que avalia a relação entre o peso
				e a altura de uma pessoa. Ele é usado para determinar se uma pessoa está dentro
				de faixas consideradas saudáveis em termos de peso.
				</p>
				<p>
				O IMC pode ser útil para identificar riscos para a saúde associados ao peso,
				mas é importante lembrar que ele não leva em consideração fatores individuais
				como composição corporal e distribuição de gordura.
				</p>
				<h2>Dicas para Melhorar o IMC</h2>
				<ul>
					{#if imc > 0}
						{#each tips as tip}
						<li>{tip}</li>
						{/each}
					{/if}
				</ul>
			</div>
		{/if}
	</main>
  </body>

  <style>
	body {
		background-color: #e6f7ff; 
		background-image: url('https://img.freepik.com/vetores-premium/a-saude-de-fundo-abstrato-azul_66029-25.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}


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