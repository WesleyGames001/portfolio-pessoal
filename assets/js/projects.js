const data = {
    invyctusmc: {
        name: "InvyctusMC",
        image: "assets/images/invyctus-300x300.png",
        video: "https://www.youtube.com/embed/yyNuRP_Demk",

        description: [
            "O projeto InvyctusMC é uma rede de servidores de Minecraft criada por mim no primeiro semestre de 2017. Todos os sistemas foram estruturados e desenvolvidos por mim. O primeiro servidor, chamado RankUP Custom, tem como objetivo alcançar o maior nível possível e inclui vários recursos como caixas misteriosas, correios, máquinas, mineração com picaretas especiais, missões, spawners entre outros. O lançamento do servidor ocorreu no final do segundo semestre de 2017, com uma média inicial de 40 jogadores simultâneos, que aumentou gradualmente até alcançar o máximo de 90 jogadores nos últimos meses.",
            "O segundo servidor lançado foi apenas um protótipo de SkyWars, em que os jogadores nascem separadamente em suas ilhas com itens aleatórios e lutam até que o último fique de pé. Infelizmente, o sistema não passou da versão beta e o servidor foi encerrado.",
            "Devido a problemas organizacionais e financeiros, o projeto foi fechado indeterminadamente no final de 2018. Mais tarde, ele inspirou a criação do SmeltingMC, sua continuidade."
        ],

        informations: [
            {
                title: "Anos de operação",
                description: [
                    "2017-2018"
                ]
            },
            {
                title: "Meus cargos",
                description: [
                    "Fundador & CTO",
                    "Desenvolvedor Chefe"
                ]
            },
            {
                title: "Jogadores simultâneos",
                description: [
                    "40-90 players"
                ]
            }
        ]
    },

    smeltingmc: {
        name: "SmeltingMC",
        image: "assets/images/smelting-300x300.png",
        video: "https://www.youtube.com/embed/-Q1bT6M3v9E",

        description: [
            "O projeto SmeltingMC é uma rede de servidores de Minecraft criada pela antiga equipe do InvyctusMC. A maior parte dos sistemas do InvyctusMC foram reutilizados, mas foram otimizados e novos foram criados.",
            "O único servidor ativo foi o RankUP Heads, cujo objetivo é alcançar o maior nível possível usando cabeças de monstros e dinheiro. Ele inclui vários sistemas especiais, como caixas misteriosas, correios, máquinas, minas privadas, mineração com picaretas especiais, missões e spawners que dropam cabeças.",
            "O lançamento do servidor ocorreu no início de 2019, com uma média inicial de 80 jogadores simultâneos e aumentou exponencialmente até alcançar o máximo de 190 jogadores nos últimos dias.",
            "Devido a novos objetivos pessoais, eu saí da equipe alguns meses após o lançamento, o que acabou resultando no fechamento do projeto logo em seguida."
        ],
        informations: [
            {
                title: "Ano de operação",
                description: [
                    "2019"
                ]
            },
            {
                title: "Meus cargos",
                description: [
                    "CTO",
                    "Desenvolvedor Chefe",
                    "Gerente de Projeto"
                ]
            },
            {
                title: "Jogadores simultâneos",
                description: [
                    "80-190 players"
                ]
            }
        ]
    }
}

const parent = document.getElementById("projects-show-more");

const project_name = document.getElementById("project-name");
const project_image = document.getElementById("project-image");
const project_video = document.getElementById("project-video");
const project_description = document.getElementById("project-description");
const project_informations = document.getElementById("project-informations");

function closeProject() {
    parent.style.display = "none";

    console.log("a tela de projeto foi fechada");
}

function updateProject(id) {
    parent.style.display = "flex";

    project_name.textContent = data[id].name;
    project_image.src = data[id].image;
    project_video.src = data[id].video;

    project_description.innerHTML = "";
    project_informations.innerHTML = "";

    for (let text of data[id].description) {
        let p = document.createElement("p");

        p.appendChild(document.createTextNode(text));

        project_description.appendChild(p);
    }

    for (let pack of data[id].informations) {
        let div = document.createElement("div");
        let title = document.createElement("h1");

        title.appendChild(document.createTextNode(pack.title));

        div.appendChild(title);

        for (let text of pack.description) {
            let p = document.createElement("p");

            p.appendChild(document.createTextNode(text));

            div.appendChild(p);
        }

        project_informations.appendChild(div);
    }

    console.log("a tela de projeto foi aberta");
}
