const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasPraticamEsporte = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas) * 60)
    const porcentagemPraticamEsporte = ((pessoasPraticamEsporte / pessoasNoMundo) * 100).toFixed(2);

    const pessoasAssistemEsporte = (dados.total_pessoas_que_assistem_esportes / 1e9)
    const porcentagemAssistemEsporte = ((pessoasAssistemEsporte / pessoasNoMundo) * 100).toFixed(2);
    

    const paragrafo = document.createElement('p')
    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas, e que aproximadamente <span>${pessoasPraticamEsporte} bilhões</span> delas exercem algum tipo de esporte, passando, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> praticando, e que <span>${pessoasAssistemEsporte} bilhões</span> assistem esportes ?<br>Isso significa que aproximadamente <span>${porcentagemPraticamEsporte}%</span> da população tiverem acesso à educação, e que <span>${porcentagemAssistemEsporte}%</span> asssitem, ou seja, a população mundial gosta de esportes pois assitem, porém bem menos da metada de fato prática.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();