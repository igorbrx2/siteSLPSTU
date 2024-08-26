console.log("Script carregado corretamente");

// COPIAR PIX

  document.getElementById('copyLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a navegação para "#" no link
    
    const textToCopy = '56.256.408/0001-83';
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Texto copiado com sucesso!');
    }).catch(function(error) {
      console.error('Erro ao copiar o texto: ', error);
    });
  });


// VIDEOS
document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = 'AIzaSyCYvN7-x4gcl4Vf1UH72YcfYgMGAgSytto'; // Substitua com sua chave API
    const CHANNEL_ID = 'UCGOV9SpaX3gSE4e6EZANX9g'; // Substitua com o ID do canal
    const MAX_RESULTS = 5;
    const mainVideoContainer = document.getElementById('main-video-container');
    const videoThumbnailsContainer = document.getElementById('video-thumbnails');
  
    async function fetchLatestVideos() {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`);
        const data = await response.json();
  
        data.items.forEach((item, index) => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;
          const videoThumbnail = item.snippet.thumbnails.high.url;
  
          if (index === 0) {
            // Embed the most recent video
            mainVideoContainer.innerHTML = `
              <div class="video-main">
                <iframe width="70%" height="450px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
              </div>
            `;
          } else {
            // Display thumbnails for the rest of the videos
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-thumbnail');
            videoElement.innerHTML = `
              <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="${videoThumbnail}" alt="${videoTitle}">
                <p class="montserrat-font" style="font-weight: bold; text-align: start; line-height: 1.1;">${videoTitle}</p>
              </a>
            `;
            videoThumbnailsContainer.appendChild(videoElement);
          }
        });
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        mainVideoContainer.innerHTML = '<p>Não foi possível carregar o vídeo. Tente novamente mais tarde.</p>';
      }
    }
  
    fetchLatestVideos();
  });  

// MODAIS DE APRESENTAÇÃO

    // conteúdo dinâmico dos candidatos
    const candidatos = {
    'sauloArcangeli': `
    <p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">Professor da UEMA, doutor em Políticas Públicas e servidor do Ministério Público do Trabalho. É sindicalista de entidades de trabalhadores e trabalhadoras e atua como membro dos movimentos sociais no Conselho da Cidade de São Luís, que delibera sobre as diretrizes para a formulação e implementação da política de desenvolvimento urbano e rural da nossa cidade.<br>
<br>A candidatura de Saulo Arcangeli à prefeitura de São Luís, um ativista presente nas principais lutas que ocorreram em São Luís nos últimos anos, é a expressão, no campo eleitoral, das reivindicações dos trabalhadores e da juventude da cidade, de uma maioria, pobre e periférica, que é excluída de políticas públicas adequadas de transporte e mobilidade urbana, saúde, educação, abastecimento de água, iluminação pública, trabalho, e que sofre com uma agressiva poluição ambiental e com as várias formas de opressão às mulheres, negros e negras e aos LGBTQIAP+.<br>
    </p>`,

    'jaciaraCastro': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;"">
    A candidata a vice-prefeita de São Luís é formada em Serviço Social pela Universidade Federal do Maranhão, empregada pública da Companhia de Saneamento Ambiental do Maranhão (CAEMA) e ativista do movimento de mulheres da cidade de São Luís.<br>
    
    <br>Atua, junto com os trabalhadores e trabalhadoras da companhia, pela restruturação e manutenção de uma CAEMA pública e estatal e, nestas eleições, será uma voz, juntamente com Saulo Arcangeli, pela permanência da companhia em São Luís. Jaciara tem uma voz firme no combate ao machismo e a violência contra as mulheres, atuando no Movimento Mulheres em Luta, MML.

</p>`,

'coletivoDasPretas': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">
  Um coletivo que reúne três mulheres negras, professora Ester Durans, professora aposentada Marina Martins e Kimberlly Serejo, estudante de Serviço Social da Universidade Federal do Maranhão, que colocam seus nomes à disposição para disputar uma vaga na Câmara Municipal de São Luís, em busca de garantias de políticas públicas à população desassistida, em defesa da educação, da juventude e das trabalhadoras e trabalhadores da periferia de nossa cidade.<br>

<br>O Coletivo das Pretas é uma candidatura coletiva classista, revolucionária e socialista, que defende um programa voltado para a classe trabalhadora, para a juventude  trabalhadora, preta e pobre, no combate às opressões machistas, racistas e LGBTfóbicas, na luta contra as desigualdades sociais e econômicas, e firmemente contra a violência às mulheres: encarceramento,  feminicídios e todas as mazelas cotidianas do capitalismo.<br> 

<br>Defendemos as políticas compensatórias e reparações históricas que garantam o acesso à educação, habitação, saúde, trabalho, emprego, renda, assistência social, segurança, cultura e lazer. Contudo, deixamos evidente que tais políticas no capitalismo são temporárias e não garantirão a total emancipação das mulheres e dos trabalhadores. É preciso destruir o sistema capitalista, que oprime, explora e humilha o nosso povo! É preciso construir a revolução socialista.<br>
  
  <br><strong>No Legislativo municipal, iremos elaborar e votar em projetos que garantam, entre outras pautas:
</strong><br>

  <br>-	Escolas socialmente referenciadas;<br>
  <br>-	Creches públicas e gratuitas em todos os bairros;<br>
  <br>-	Fim da escala de trabalho 6x1;<br>
  <br>-	Transporte público municipal de qualidade e com gratuidade para estudantes e desempregados;<br>
  <br>-	Respeito aos pisos salariais da Educação, da Saúde e da Segurança;<br>
</p>`,

'jayroMesquita': `<p class="montserrat-font" style="line-height: 1.3; font-size: 1.2rem;">
Sou Jayro Mesquita, trabalhador portuário e engenheiro civil, tenho 51 anos e milito no PSTU, com ações principalmente - mas não só - na área dos portos.
Candidato a vereador pela primeira vez, estarei focado na elaboração e votação de projetos que garantam pontos cruciais da minha luta e das pautas do PSTU, entre os quais:<br> 

<br>-	Implantação do passe livre para estudantes e desempregados;<br>
<br>-	Implantação de uma política de casas populares para moradores de área de risco e palafitas;<br>
<br>-	Fiscalização da aplicação de leis que garantam a vida e a saúde de mulheres e crianças, e elaboração de projetos com o teor da salvaguarda das minorias;
<br>
<br>-	Fiscalização rigorosa e punição para empresas, órgãos e indivíduos que agridam o meio ambiente da Ilha de São Luís;<br>
</p>`,

    };
    
    document.addEventListener('DOMContentLoaded', () => {
        const modalContainer = document.querySelector('.modalNando-container');
        const modalConteudo = document.getElementById('modalConteudo');
        const botaoFechar = document.getElementById('fecharModal');
        
        document.querySelectorAll('.card-candidato').forEach(candidato => {
            candidato.addEventListener('click', (event) => {
              event.preventDefault();
              const idCandidato = candidato.getAttribute('data-candidato');
              if (candidatos[idCandidato]) {
                modalConteudo.innerHTML = candidatos[idCandidato];
                modalContainer.style.display = 'flex';
              }
            });
          });

          botaoFechar.addEventListener('click', () => {
            modalContainer.style.display = 'none';
          });
        
          modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
              modalContainer.style.display = 'none';
            }
          });
        });

// QUEM ASSINOU OCULTAR EXIBIR

document.addEventListener('DOMContentLoaded', function () {
    const subscriberList = document.getElementById('subscriber-container');
    const btnQuemAssinou = document.querySelector('.btn-quemassinou');

    btnQuemAssinou.addEventListener('click', function () {
        if (subscriberList.style.display === 'none') {
            subscriberList.style.display = 'flex';
        } else {
            subscriberList.style.display = 'none';
        }
    });
});

const date = new Date();

// Definindo os compromissos diretamente no código
const compromissos = {
	"2024-08-10": ["Inauguração da sede do PSTU (Rua Santo Antônio, 697, Cidade Alta. Em Frente a Igreja do Galo)  - 10:00"],
    // Adicione mais compromissos conforme necessário
};

const findNearestDayWithAppointments = (selectedDate) => {
    let nearestDay = null;
    let nearestDayDiff = Infinity;
    const todayTime = selectedDate.getTime();

    for (let day in compromissos) {
        const dayDate = new Date(day);
        const diff = dayDate.getTime() - todayTime;

        if (diff >= 0 && diff < nearestDayDiff && compromissos[day].length > 0) {
            nearestDay = dayDate;
            nearestDayDiff = diff;
        }
    }

    return nearestDay;
};

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    document.querySelector('.date p').innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        const currentDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else if (compromissos[currentDate]) {
            days += `<div class="appointment">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

    updateEvents(new Date());
};

const updateEvents = (selectedDate) => {
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    let events = compromissos[formattedDate] || [];
    const eventsDiv = document.querySelector('.events');

    if (events.length === 0) {
        const nearestDay = findNearestDayWithAppointments(selectedDate);
        if (nearestDay) {
            const nearestDate = `${nearestDay.getFullYear()}-${String(nearestDay.getMonth() + 1).padStart(2, '0')}-${String(nearestDay.getDate()).padStart(2, '0')}`;
            events = compromissos[nearestDate] || [];
            eventsDiv.innerHTML = `<h3 style="text-align: center; font-size: 1.2rem; margin: 10px auto;">Compromissos para ${nearestDay.getDate()}</h3>` + events.map(event => `<div>${event}</div>`).join('');
        } else {
            eventsDiv.innerHTML = "<h3 style='text-align: center; font-size: 1.2rem; margin: 10px auto;'>Sem compromissos</h3>";
        }
    } else {
        eventsDiv.innerHTML = `<h3 style="text-align: center; font-size: 1.2rem; margin: 10px auto;">Compromissos para ${selectedDate.getDate()}</h3>` + events.map(event => `<div>${event}</div>`).join('');
    }
};

document.querySelectorAll('.days').forEach(day => {
    day.addEventListener('click', (e) => {
        if (e.target.classList.contains('prev-date') || e.target.classList.contains('next-date')) return;
        const selectedDay = parseInt(e.target.innerHTML);
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), selectedDay);
        updateEvents(selectedDate);
    });
});

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

// MENU RESPONSIVO

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeclass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeclass);
        this.mobileMenu.classList.toggle(this.activeclass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "#nav-list",
    "#nav-list li"
);
mobileNavbar.init();

// ROLAGEM
document.querySelector('a[href="#pre-candidaturas"]').addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector('#pre-candidaturas');
    const offset = 100; // ajuste conforme necessário
    const topPosition = targetSection.offsetTop - offset;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });  
 });


