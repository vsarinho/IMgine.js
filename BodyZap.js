var TIME_LIMIT = 10;

var conqueredOrgans = [];

var organs = [
	{name:"Estômago",system:"digestório"},
	{name:"Fígado",system:"digestório"},
	{name:"Intestino delgado",system:"digestório"},
	{name:"Intestino grosso",system:"digestório"},
	{name:"Apêndice",system:"digestório"},
	
	{name:"Faringe",system:"respiratório"},
	{name:"Laringe",system:"respiratório"},
	{name:"Traquéia",system:"respiratório"},
	{name:"Brônquios",system:"respiratório"},
	{name:"Pulmão",system:"respiratório"}
];

var cards = [
	{system:"digestório", 
	question:"Para que serve a glote que fica na faringe?", 
	answer1:"A glote é uma cartilagem móvel que quando ocorre a deglutição fecha a abertura da laringe e força assim a passagem de alimentos para o esôfago.", 
	answer2:"É um órgão que fica no céu da boca, região denominado de palato, que auxilia no momento que é forçado o vomito.", 
	answer3:"A glote não tem interferência quando uma pessoa se engasga.",
	answer4:"A glote é uma glândula que tem função de produzir enzimas digestivas, que ajuda na digestão de proteínas.",
	answer5:"A glote é um órgão que apresenta uma função de absorção e digestão de lipídios e está presente no palato.",
	correctAnswer:"A glote é uma cartilagem móvel que quando ocorre a deglutição fecha a abertura da laringe e força assim a passagem de alimentos para o esôfago."},

	{system:"digestório", 
	question:"Qual órgão do sistema digestório é responsável pela absorção dos alimentos?", 
	answer1:"Estômago", 
	answer2:"Fígado", 
	answer3:"Intestino delgado",
	answer4:"Intestino grosso",
	answer5:"Pâncreas",
	correctAnswer:"Intestino delgado"},

	{system:"digestório", 
	question:"Qual órgão do sistema digestório é responsável pela desidratação dos restos alimentares tornando-os pastoso originando as fezes?", 
	answer1:"Estômago", 
	answer2:"Fígado", 
	answer3:"Intestino delgado",
	answer4:"Intestino grosso",
	answer5:"Pâncreas",
	correctAnswer:"Intestino grosso"},
	
	{system:"digestório", 
	question:"O que é a bile?", 
	answer1:"É uma enzima produzida pelo estomago com a função de digerir proteínas.", 
	answer2:"É o nome do suco produzido pelo fígado que apresenta uma coloração amarelo esverdeado e tem a função de transformar gotas grande de gorduras e pequenas.", 
	answer3:"É um suco digestivo produzido pelo Pâncreas com a função de digestão",
	answer4:"É uma enzima produzida nos rins que a função de filtrar o sangue.",
	answer5:"É o nome cientifico da saliva e tem a função de iniciar a digestão dos lipídios na boca.",
	correctAnswer:"É o nome do suco produzido pelo fígado que apresenta uma coloração amarelo esverdeado e tem a função de transformar gotas grande de gorduras e pequenas."},
	
	{system:"digestório", 
	question:"Qual dos órgãos abaixo realiza digestão mecânica?", 
	answer1:"Estômago", 
	answer2:"Esôfago", 
	answer3:"Intestino",
	answer4:"Fígado",
	answer5:"Dente",
	correctAnswer:"Dente"},

	{system:"digestório", 
	question:"A saliva e o Suco Pancreático contém:", 
	answer1:"Açucar que auxiliam a digestão", 
	answer2:"Águas e gorduras que ajudam a quebrar os alimentos.", 
	answer3:"Apenas água.",
	answer4:"Enzimas que ajudam a quebra os alimentos.",
	answer5:"Proteínas utilizadas para estimular a produção do suco gástrico.",
	correctAnswer:"Enzimas que ajudam a quebra os alimentos."},

	{system:"digestório", 
	question:"O Estômago é responsável:", 
	answer1:"Pela digestão mecânica e química dos alimentos.", 
	answer2:"Apenas pela digestão de gorduras.", 
	answer3:"Apenas pela digestão mecânica.",
	answer4:"Pela absorção de água e sais minerais.",
	answer5:"Apenas pela digestão e absorção de lipídios.",
	correctAnswer:"Pela digestão mecânica e química dos alimentos."},
	
	{system:"digestório", 
	question:"A Bile é produzida:", 
	answer1:"Na vesícula biliar e armazenada no fígado.", 
	answer2:"No duodeno.", 
	answer3:"No fígado e lançado no estômago.",
	answer4:"No estômago e armazenado na vesícula biliar.",
	answer5:"No fígado e armazenado na vesícula biliar.",
	correctAnswer:"No fígado e armazenado na vesícula biliar."},

	{system:"digestório", 
	question:"O bolo alimentar caminha pelo tubo digestivo graças a movimentos da parede desse tubo. Como é o nome desses movimentos?", 
	answer1:"Movimentos peristálticos.", 
	answer2:"A força da gravidade.", 
	answer3:"Movimento voluntário.",
	answer4:"Músculos abdominais.",
	answer5:"Músculos mastigatórios.",
	correctAnswer:"Movimentos peristálticos"},

	{system:"digestório", 
	question:"A formação de um novo ser humano se inicia a partir de divisões mitóticas da célula zigoto (ou célula ovo) que se originou da fecundação de um óvulo por um espermatozoide. Durante essas divisões as células formadas passam por algumas etapas, entre essas a Mórula, Blástula, Gástrula e Nêurula. Durante uma dessas etapas há a formação de uma cavidade denominada Arquêntero ou gastrocela. Essa cavidade é o esboço do futuro tubo digestivo do indivíduo. Qual etapa seria essa?", 
	answer1:"Mórula", 
	answer2:"Blástula", 
	answer3:"Gástrula",
	answer4:"Nóurula",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Gástrula"},

	{system:"digestório", 
	question:"Durante a formação do individuo as suas células passam por algumas etapas denominadas de Mórula, Blástula Gástrula e Nêurula. Durante a Gástrula surgem algumas regiões especificas: Blastóporo, Ectoderma, Gastrocela e Mesentoderma. De cada uma dessas regiões as células irão se diferenciar e formar os órgãos dos nossos sistemas. O tubo digestivo se forma em qual dessas regiões?", 
	answer1:"Blastóporo", 
	answer2:"Ectoderma", 
	answer3:"Gastrocela",
	answer4:"Mesentoderma",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Gastrocela"},

	{system:"digestório", 
	question:"O Blastóporo é uma região da Gástrula que pode originar duas estruturas diferentes do Sistema Digestivo, a depender do grupo de animais que o ser vivo pertence (deuterostômios ou protostômios). Quais são essas estruturas respectivamente?", 
	answer1:"Intestino grosso ou Intestino Delgado", 
	answer2:"Ânus ou Boca", 
	answer3:"Estômago ou fígado",
	answer4:"Estomago ou esôfago",
	answer5:"Intestinos ou Boca",
	correctAnswer:"Ânus ou Boca"},

	{system:"digestório", 
	question:"Na fase embrionária formam-se os epitélios glandulares que dão origem as glândulas. Quais dessas glândulas faz parte do Sistema Digestório?", 
	answer1:"Sudoríparas", 
	answer2:"Mamária", 
	answer3:"Tireóide",
	answer4:"Fígado",
	answer5:"Salivares",
	correctAnswer:"Salivares"},

	{system:"digestório", 
	question:"A maioria dos animais possuem três folhetos germinativos: Ectoderma, Mesoderma e Endoderma. Em quais desses folhetos são formadas as glândulas salivares?", 
	answer1:"Ectoderma", 
	answer2:"Mesoderma", 
	answer3:"Endoderma",
	answer4:"Entre o Mesoderma e Endoderma",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Endoderma"},

	{system:"digestório", 
	question:"Durante a formação dos seres humanos há a formação dos folhetos germinativos: Ectoderma, Mesoderma e Endoderma. Em quais desses são formados o pâncreas e o fígado?", 
	answer1:"Ectoderma", 
	answer2:"Mesoderma", 
	answer3:"Endoderma",
	answer4:"Entre o Ectoderma e o Mesoderma",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Endoderma"},

	{system:"digestório", 
	question:"O estômago é um órgão do Sistema Digestório que tem a capacidade de digerir moléculas presente no bolo alimentar. Essa característica é auxiliada pela presença de um pH ácido nessa região. Apesar desse pH baixo, a parede do estomago não é danificada, pois ela possui um Epitélio de Revestimento. Esse Epitélio de Revestimento pertence a qual Tecido?", 
	answer1:"Epitelial", 
	answer2:"Conjuntivo", 
	answer3:"Cartilaginoso",
	answer4:"Muscular",
	answer5:"Nervoso",
	correctAnswer:"Epitelial"},

	{system:"digestório", 
	question:"Nos órgãos do sistema digestório há presença de tecidos musculares, que auxiliam no seu funcionamento. Existem três tipos de tecido muscular: o estriado esquelético, estriado cardíaco e o liso. Das opções abaixo qual combinação de órgão e tecido muscular está correta?", 
	answer1:"Estômago e tecido estriado cardíaco", 
	answer2:"Fígado e tecido estriado", 
	answer3:"Intestino grosso e tecido estriado",
	answer4:"Intestino delgado e tecido liso",
	answer5:"Artéria e tecido estriado cardíaco",
	correctAnswer:"Intestino delgado e tecido liso"},

	{system:"digestório", 
	question:"O sistema digestório humano compõe-se de um longo tubo, com cerca de 9 m de comprimento, denominado de tubo digestório. Iniciando na boca e finalizando no ânus. No percorrer desse tubo há presença de algumas glândulas, quais são elas:", 
	answer1:"Glândula tireóide, glândulas salivares e fígado", 
	answer2:"Glândulas salivares, pâncreas e fígado", 
	answer3:"Glândula biliar, apêndice e fígado",
	answer4:"Glândulas salivares, vesícula biliar e estômago",
	answer5:"Apêndice, pâncreas e Glândulas salivares",
	correctAnswer:"Glândulas salivares, pâncreas e fígado"},

	{system:"digestório", 
	question:"O sistema digestório humano compõe-se de um longo tudo, denominado de tubo digestório. O início desse tubo é a boca onde se encontra os dentes, a língua e os canis provenientes das glândulas salivares. Qual é o nome da parte seguinte ao tubo digestório, após a boca?", 
	answer1:"Esôfago", 
	answer2:"Laringe", 
	answer3:"Faringe",
	answer4:"Estômago",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Faringe"},

	{system:"digestório", 
	question:"O início do tubo digestório é mais estreito e se dilata na porção do Estômago. Em ordem, quais são os nomes das regiões do tubo digestório anterior ao estômago?", 
	answer1:"Língua, laringe e faringe", 
	answer2:"Boca, laringe e faringe", 
	answer3:"Boca, esôfago e laringe",
	answer4:"Língua, esôfago e faringe",
	answer5:"Boca, faringe e esôfago",
	correctAnswer:"Boca, faringe e esôfago"},

	{system:"digestório", 
	question:"É função da saliva:", 
	answer1:"Digerir o amido", 
	answer2:"Desencadear o reflexo da sede", 
	answer3:"Umedecer a mucosa oral",
	answer4:"Lubrificar os dentes",
	answer5:"Todas as alternativas estão corretas",
	correctAnswer:"Todas as alternativas estão corretas"},
	
	{system:"digestório", 
	question:"A digestão de gorduras ocorre em qual parte do Intestino e pela ação de quais substâncias?", 
	answer1:"Cólon, lipase pancreática, bile", 
	answer2:"Estômago, lipase pancreática, bile", 
	answer3:"Duodeno, lipase gástrica, bile",
	answer4:"Estômago, lipase gástrica, saliva",
	answer5:"Duodeno, lipase pancreática, bile",
	correctAnswer:"Duodeno, lipase pancreática, bile"},

	{system:"digestório", 
	question:"O intestino delgado é um tubo com pouco mais de 6 m de comprimento por 4 cm de diâmetro, dividido em três regiões, quais os nomes dessas regiões?", 
	answer1:"Cárdia, pilórico e íleo", 
	answer2:"Apêndice, jejuno e ceco", 
	answer3:"Duodeno, jejuno e íleo",
	answer4:"Jejuno, apêndice e duodeno",
	answer5:"Duodeno, jejuno e apêndice",
	correctAnswer:"Duodeno, jejuno e íleo"},

	{system:"digestório", 
	question:"O intestino delgado é um tubo com pouco mais de 6 m de comprimento, dividido em três regiões, sendo a primeira denominada de Duodeno. Nessa região existe um canal colédono que traz as secreções produzidas por duas, das três glândulas do sistema digestórios. Quais são essas glândulas?", 
	answer1:"Salivar e fígado", 
	answer2:"Salivar e vesicular biliar", 
	answer3:"Salivar e pâncreas",
	answer4:"Fígado e pâncreas",
	answer5:"Vesícula biliar e fígado",
	correctAnswer:"Fígado e pâncreas"},

	{system:"digestório", 
	question:"O intestino grosso tem cerca de 50 cm de comprimento e entre 6 cm e 7 cm de diâmetro, sendo dividido em três partes. Quais são elas?", 
	answer1:"Cárdia, pilórico e reto", 
	answer2:"Apêndice, jejuno e íleo", 
	answer3:"Duodeno, jejuno e ceco",
	answer4:"Ceco, apêndice e jejuno",
	answer5:"Ceco, colo e reto",
	correctAnswer:"Ceco, colo e reto"},

	{system:"digestório", 
	question:"O intestino grosso é dividido em três partes, ceco, colo e reto. O ceco é uma bolsa de fundo cego, situada perto do intestino delgado. Ele não desempenha nenhuma função importante nos seres humanos, sendo considerado um órgão vestigial. Na extremidade fechada do ceco localiza-se uma estrutura na qual pode ocorrer o acúmulo de algumas estruturas alimentares que não são digeridas, causando um problema de saúde. Como é o nome dessa estrutura e desse problema de saúde?", 
	answer1:"Apêndice vermiforme e apendicite", 
	answer2:"Jejuno e apendicite", 
	answer3:"Íleo e pedras nos rins",
	answer4:"Duodeno e apendicite",
	answer5:"Apêndice vermiforme e pedras nos rins",
	correctAnswer:"Apêndice vermiforme e apendicite"},

	{system:"digestório", 
	question:"O pâncreas é uma glândula em formato triangular alongado, localizada sob o estômago, na alça do duodeno. Há dois tipos básicos de células secretoras no pâncreas: as exócrinas e endócrinas. Quais dessas glândulas secretam as substâncias de digestão e quais são essas substâncias.", 
	answer1:"Endócrinas e secretam os hormônios insulina e glucagon", 
	answer2:"Exócrinas e secretam bicarbonato e enzimas", 
	answer3:"Exócrinas e secretam os hormônios insulina e glucagon",
	answer4:"Endócrinas e secretam bicarbonato e enzimas",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Exócrinas e secretam bicarbonato e enzimas"},

	{system:"digestório", 
	question:"O fígado é a maior glândula de nosso corpo e está localizado no lado direito do abdómen, na altura das últimas costelas, imediatamente abaixo do diafragma. Ele participa do metabolismo de digestão no organismo com a liberação de uma substância. Qual é o nome da substância?", 
	answer1:"Insulina", 
	answer2:"Glucagon", 
	answer3:"Bile",
	answer4:"Bicarbonato",
	answer5:"Saliva",
	correctAnswer:"Bile"},

	{system:"digestório", 
	question:"Para as substâncias presentes nos alimentos serem absorvidas por nossas células, a comida passa por dois tipos de digestões a mecânica e química. Abaixo estão descritos alguns mecanismos da digestão e os respectivos locais onde ocorrem os processos. Qual combinação está correta?", 
	answer1:"Digestão química que ocorre na boca com o auxílio dos dentes e língua", 
	answer2:"Digestão mecânica que ocorre no tubo digestivo pela ação de algumas enzimas", 
	answer3:"Digestão química presente no esôfago por causa dos movimentos peristálticos",
	answer4:"Digestão química no Intestino delgado auxiliada pelo suco pancreático",
	answer5:"Digestão mecânica auxiliada pelas glândulas salivares no estômago",
	correctAnswer:"Digestão química no Intestino delgado auxiliada pelo suco pancreático"},

	{system:"digestório", 
	question:"É função do esôfago:", 
	answer1:"a deglutição", 
	answer2:"a mastigação", 
	answer3:"a degustação",
	answer4:"a digestão de carboidratos",
	answer5:"a digestão de proteínas",
	correctAnswer:"a deglutição"},

	{system:"digestório", 
	question:"Após a digestão o alimento é então absorvido pelas células presentes na parede do tubo digestivo. A maioria dos alimentos é absorvida no intestino delgado e grosso. Porém alguns tipos de alimentos têm a capacidade de serem absorvidos no estômago. Quais dos alimentos abaixo são absorvidos no estômago?", 
	answer1:"Álcool etílico, água e certos sais", 
	answer2:"Proteína e Lipídios", 
	answer3:"Carboidratos e proteínas",
	answer4:"Lipídios e água",
	answer5:"Sais e proteínas",
	correctAnswer:"Álcool etílico, água e certos sais"},

	{system:"digestório", 
	question:"Para uma adequada digestão há necessidade da combinação entre enzima e pH. Quais das combinações abaixo está INCORRETA conforme Enzima, pH ótimo e Substratos?", 
	answer1:"Amilase salivar, Neutro, Maltose e glicose", 
	answer2:"Pepsina, Básico, Lipídios", 
	answer3:"Lipase, Básico, Lipídios",
	answer4:"Pepsina, Áciido, Proteínas",
	answer5:"Lactase, Básico, Lactose",
	correctAnswer:"Pepsina, Áciido, Proteínas"},

	{system:"digestório", 
	question:"A superfície interna do intestino delgado possui milhões de pequenas dobras chamadas de vilosidades intestinais. As quais possuem dobrinhas microscópicas denominadas microvilosidades. Qual é a principal função dessas estruturas?", 
	answer1:"Produzir sucos digestivos", 
	answer2:"Diminuir o pH do intestino", 
	answer3:"Absorver nutrientes",
	answer4:"Neutralizar o pH do estômago",
	answer5:"Produção das fezes",
	correctAnswer:"Absorver nutrientes"},

	{system:"digestório", 
	question:"Os resíduos não aproveitados em uma alimentação levam cerca de 9 horas para chegar ao intestino grosso, onde permanecem alguns dias. Durante esse tempo ocorre absorção de água e sais e intensa proliferação de bactérias, as quais produzem substâncias úteis para o nosso organismo. Quais das substâncias abaixo não são produzidas por nossa flora intestinal?", 
	answer1:"Vitamina K", 
	answer2:"Vitamina B 12", 
	answer3:"Tiamina",
	answer4:"Riboflavina",
	answer5:"Bile",
	correctAnswer:"Bile"},

	{system:"digestório", 
	question:"Os carboidratos ao serem digeridos se transformam em glicídios passando então para o sangue que circula nos capilares sanguíneos. A união desses capilares forma a veia porta-hepática que transporta os nutrientes para uma glândula do nosso corpo, a qual absorve grande parte da glicose e a converte em glicogênio. Qual é o local do tubo digestivo que ocorre a absorção dos glicídios e o nome da glândula?", 
	answer1:"Estômago e pâncreas", 
	answer2:"Intestino grosso e pâncreas", 
	answer3:"Estômago e fígado",
	answer4:"Intestino delgado e fígado",
	answer5:"Intestino e apêndice",
	correctAnswer:"Intestino delgado e fígado"},

	{system:"digestório", 
	question:"Na região final do colo, há formação das fezes. Cerca de 30% da parte s󬩤a das fezes compõe-se de bactérias vivas e mortas e os 70% restantes são constituídos por sais, muco, fibras de celulose e outros componentes não digeridos. Sendo assim, se uma pessoa elimina 10g de fezes, quantas gramas serão de bactérias?", 
	answer1:"3g", 
	answer2:"5g", 
	answer3:"7g",
	answer4:"2g",
	answer5:"8g",
	correctAnswer:"3g"},
	
	{system:"digestório", 
	question:"O processo da digestão é controlado pelo sistema nervoso autônomo e por hormônios. A visão o cheiro e o sabor do alimento estimulam o sistema nervoso central a enviar estímulos às glândulas salivares e as glândulas estomacais, estimulando-as a produzir algumas substâncias. Quais são os nomes dessas substâncias?", 
	answer1:"Bile e suco pancreático", 
	answer2:"Saliva e suco gástrico", 
	answer3:"Saliva e bile",
	answer4:"Secretina e suco gástrico",
	answer5:"Saliva e secretina",
	correctAnswer:"Saliva e suco gástrico"},

	{system:"digestório", 
	question:"O bolo alimentar após passar pelo estômago recebe o nome de quimo. A entrada do quimo no duodeno estimula células da parede intestinal a liberar no sangue o hormônio secretina. Qual seria a função desse hormônio?", 
	answer1:"Liberar a produção de saliva e do suco pancreático", 
	answer2:"Aumentar o pH do intestino para uma melhor digestão das proteínas", 
	answer3:"Estimula a liberação do suco pancreático e a produção de bile",
	answer4:"Estimular a liberação de saliva e suco pancreático",
	answer5:"Inibir a produção de suco gástrico e aumentar assim o pH do estômago",
	correctAnswer:"Estimula a liberação do suco pancreático e a produção de bile"},

	{system:"digestório", 
	question:"A vesicular biliar para liberar a bile necessita receber um sinal do hormônio colecistoquinina ou pancreozimina. Assim que esse hormônio atinge a vesícula biliar, pela corrente sanguínea, ela se contrai e libera a bile. O que tem que estar presente no tubo digestivo para ocorrer a liberação da colecistoquinina?", 
	answer1:"A presença de um pH baixo no duodeno", 
	answer2:"A presença de secretina na corrente sanguínea", 
	answer3:"O pâncreas está com o volume acima do normal",
	answer4:"A presença de gorduras ou proteínas parcialmente digeridas no quimo",
	answer5:"A presença do FSH no sangue",
	correctAnswer:"A presença de gorduras ou proteínas parcialmente digeridas no quimo"},

	{system:"digestório", 
	question:"Quando se come um cozido, as batatas e a carne começam a ser digeridas respectivamente aonde?", 
	answer1:"No pâncreas e na boca", 
	answer2:"Na boca e no duodeno", 
	answer3:"No estômago e no duodeno",
	answer4:"No intestino e no estômago",
	answer5:"Na boca e no estômago",
	correctAnswer:"Na boca e no estômago"},

// Respiratório

	{system:"respiratório", 
	question:"O objetivo primordial do Sistema respiratório é possibilitar a respiração celular e pulmonar. Entre as reações descritas abaixo qual relaciona de forma correta os reagentes e os produtos da respiração celular?", 
	answer1:"Reagentes: O2 + H2O + C6H1206; Produtor: CO2 + energia + H20", 
	answer2:"Reagentes: CO2 + C6H1206; Produtor: energia + H20", 
	answer3:"Reagentes: O2 + H2O; Produtor: C6H1206 + energia",
	answer4:"Reagentes: CO2 + energia; Produtor: H20 + C6H1206",
	answer5:"Reagentes: energia + H20+ O2; Produtor: H20 + C6H1206",
	correctAnswer:"Reagentes: O2 + H2O + C6H1206; Produtor: CO2 + energia + H20"},

	{system:"respiratório", 
	question:"O corpo humano realiza diversos metabolismos relacionados aos seus Sistemas, entre eles o respiratório, o urinário, o digestório, entre outros. Todas essas reações ocorrem de forma micro nas células em estruturas específicas denominadas de organelas. Das organelas descridas abaixo qual tem a função da respiração celular?", 
	answer1:"Ribossomos", 
	answer2:"Mitocôndrias", 
	answer3:"Lisossomos",
	answer4:"Complexo de Golgi",
	answer5:"Retículo endoplasmático liso",
	correctAnswer:"Mitocôndrias"},

	{system:"respiratório", 
	question:"O termo respiração é empregado em dois níveis: celular e pulmonar. Entre as estruturas descritas abaixo qual tem a relação com esses níveis de respiração respectivamente?", 
	answer1:"Pulmão e ribossomos", 
	answer2:"Lisossomos e brônquio", 
	answer3:"Mitocôndrias e pulmão",
	answer4:"Mitocôndrias e esôfago",
	answer5:"Brônquio e Pulmão",
	correctAnswer:"Mitocôndrias e pulmão"},

	{system:"respiratório", 
	question:"Dos órgãos descritos abaixo qual não faz parte do Sistema respiratório?", 
	answer1:"Boca", 
	answer2:"Laringe", 
	answer3:"Brônquio",
	answer4:"esôfago",
	answer5:"Pulmão",
	correctAnswer:"esôfago"},

	{system:"respiratório", 
	question:"Qual das afirmações a seguir é verdadeira durante a inspiração?", 
	answer1:"A pressão intrapleural é positiva", 
	answer2:"A pressão intrapleural tem valor igual a zero", 
	answer3:"A pressão intrapleural é igual à pressão atmosférica",
	answer4:"A pressão intrapleural é mais negativa do que durante a expiração",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"A pressão intrapleural é mais negativa do que durante a expiração"},

	{system:"respiratório", 
	question:"A entrada da laringe é chamada de glote e apresenta uma estrutura cartilaginosa que funciona como uma válvula que evita que os alimentos entrem na laringe. Qual é o nome dessa cartilagem?", 
	answer1:"Epiglote", 
	answer2:"Faringe", 
	answer3:"Prega vocal",
	answer4:"Septo nasal",
	answer5:"Proeminência laríngea",
	correctAnswer:"Epiglote"},

	{system:"respiratório", 
	question:"Existem duas opções de entrada de ar no nosso organismo, a boca e as cavidades nasais. Após a passagem por uma dessas vias o ar entre na faringe, que é um tubo que faz parte do Sistema Digestório e Respiratório. A faringe conduz alimentos e água para o esôfago e ar para a laringe. Na entrada da laringe existe uma cartilagem, denominada epiglote, que evita a entrada de água e alimentos pelo tubo errado. Qual é o nome da entrada da laringe?", 
	answer1:"Faringe", 
	answer2:"Glote", 
	answer3:"Prega vocal",
	answer4:"Septo nasal",
	answer5:"Proeminência laríngea",
	correctAnswer:"Glote"},

	{system:"respiratório", 
	question:"A passagem de ar pela laringe pode produzir sons que possibilita a fala. Porém não é apenas a laringe que apresenta essa função e sim um conjunto de elementos. Quais são eles?", 
	answer1:"A boca, o esôfago e a laringe", 
	answer2:"A boca, a língua, e a faringe", 
	answer3:"A boca, a laringe, a língua e o nariz",
	answer4:"A boca, o nariz, a faringe e laringe",
	answer5:"A boca, a língua, o pulmão e o esôfago",
	correctAnswer:"A boca, a laringe, a língua e o nariz"},

	{system:"respiratório", 
	question:"A fala é a ação da combinação entre a laringe, a boca, a língua e o nariz. Das estruturas descritas abaixo qual delas estão presentes na laringe que auxilia no mecanismo da fala?", 
	answer1:"Epiglote", 
	answer2:"Glote", 
	answer3:"Língua",
	answer4:"Pregas vocais",
	answer5:"Septo nasal",
	correctAnswer:"Pregas vocais"},

	{system:"respiratório", 
	question:"Ao passar a mão no pescoço a pessoa pode sentir a presença de anéis nessa região os quais tem como função manter essa estrutura sempre aberta para a passagem de ar. Como é o nome dessa estrutura que faz parte do sistema respiratório?", 
	answer1:"Pregas vocais", 
	answer2:"Septo nasal", 
	answer3:"Epiglote",
	answer4:"Glote",
	answer5:"Traqueia",
	correctAnswer:"Traqueia"},

	{system:"respiratório", 
	question:"A traqueia é um tubo de aproximadamente 1,5 cm de diâmetro por 10 cm de comprimento, com paredes reforçadas por anéis cartilaginosos. Qual é a função desses anéis?", 
	answer1:"Manter a traqueia sempre aberta para a passagem de ar", 
	answer2:"Evitar que alimentos entrem na traqueia", 
	answer3:"Auxiliar as vibrações das pregas vocais auxiliando na fala",
	answer4:"Auxiliar no refluxo de alimentos que tenham entrado pelo canal errado",
	answer5:"Permitir as trocas gasosas",
	correctAnswer:"Manter a traqueia sempre aberta para a passagem de ar"},

	{system:"respiratório", 
	question:"Abaixo estão descritas algumas estruturas do Sistema respiratório e as suas respectivas funções. Qual dessas associações não está correta conforme Estrutura e Função?", 
	answer1:"Epiglote: Controla a passagem de ar para a traqueia impedindo a passagem de alimento", 
	answer2:"Septo nasal: Impede a passagem de alimentos do esôfago para a laringe", 
	answer3:"Anéis da traqueia: Permite a abertura da traqueia para a passagem de ar",
	answer4:"Pregas vocais: Auxilia na fala",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Septo nasal: Impede a passagem de alimentos do esôfago para a laringe"},

	{system:"respiratório", 
	question:"A traqueia divide-se em dois tubos curtos com anéis cartilaginosos, semelhantes aos da traqueia, que penetram nos pulmões. Qual é o nome desse tubo?", 
	answer1:"Faringe", 
	answer2:"Laringe", 
	answer3:"Brônquios",
	answer4:"Bronquíolos",
	answer5:"Alvéolos",
	correctAnswer:"Brônquios"},

	{system:"respiratório", 
	question:"Em algumas regiões do Sistema respiratório há presença de um epitélio ciliado, rico em células produtoras de muco. Partículas de poeiras e bactérias em suspensão no ar inalado aderem a esse muco sendo “varridas” em direção à garganta pelo batimento dos cílios. Qual das estruturas abaixo não possui esse epitélio.", 
	answer1:"Traqueia", 
	answer2:"Brônquios", 
	answer3:"Alvéolos",
	answer4:"Bronquíolos",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Alvéolos"},

	{system:"respiratório", 
	question:"Na traqueia, brônquios e bronquíolos há a produção de muco e a presença de um epitélio ciliado. Qual é a função desse epitélio?", 
	answer1:"Manter a traqueia sempre aberta para a passagem de ar", 
	answer2:"Evitar que alimentos entrem na traqueia", 
	answer3:"Auxiliar as vibrações das pregas vocais auxiliando na fala",
	answer4:"Eliminar partículas de poeiras e bactérias que tenham entrado na traqueia",
	answer5:"Auxiliar no refluxo de alimentos que tenham entrado pelo canal errado",
	correctAnswer:"Eliminar partículas de poeiras e bactérias que tenham entrado na traqueia"},

	{system:"respiratório", 
	question:"Existem alguns problemas de saúde que ocorrer o acúmulo de água no espaço pleural. Em qual região do corpo humano encontramos as pleuras parietal e visceral?", 
	answer1:"Laringe", 
	answer2:"Faringe", 
	answer3:"Esôfago",
	answer4:"Traqueia",
	answer5:"Pulmões",
	correctAnswer:"Pulmões"},

	{system:"respiratório", 
	question:"Existe uma região do sistema respiratório, a qual está em contato com o sistema circulatório, possibilitando que ocorra o processo de trocas gasosas. Qual é o nome dessa região?", 
	answer1:"Alvéolos pulmonares", 
	answer2:"Laringe", 
	answer3:"Faringe",
	answer4:"Brônquios",
	answer5:"Bronquíolos",
	correctAnswer:"Alvéolos pulmonares"},

	{system:"respiratório", 
	question:"Nos alvéolos pulmonares ocorre a junção de dois tipos de sistemas: respiratório e circulatório. É nessa região que ocorrem as trocas gasosas. O gás carbônico presente em concentração relativamente alta no sangue difunde-se para os alvéolos e o gás oxigênio faz o caminho inverso. Qual é o nome desse processo de trocas gasosas?", 
	answer1:"Osmose", 
	answer2:"Hematose", 
	answer3:"Bomba de sangue",
	answer4:"Inspiração",
	answer5:"Expiração",
	correctAnswer:"Hematose"},

	{system:"respiratório", 
	question:"As células eucarióticas animais são envolvidas por uma membrana denominada plasmática que apresenta a função transportar substâncias entre os meio intra e extracelular e permite uma diferença de concentrações moleculares entre esses meios. Dos transportes descritos abaixo qual está relacionado a trocas de gases na hematose?", 
	answer1:"Osmose", 
	answer2:"Bomba de sódio e potássio", 
	answer3:"Difusão simples",
	answer4:"Transporte ativo",
	answer5:"Difusão facilitada",
	correctAnswer:"Difusão simples"},

	{system:"respiratório", 
	question:"Entre os tipos de transporte que ocorrem na membrana plasmática encontramos a difusão simples, a qual ocorre no processo da Hematose. O que permite o funcionamento desse tipo de transporte e o que é transportado na hematose:", 
	answer1:"Há transporte de água pela diferença de concentração", 
	answer2:"Há transporte de gases contra o gradiente de concentração", 
	answer3:"Há transporte de nutrientes do local mais concentrado para o menos concentrado",
	answer4:"Há transporte de gases a favor do gradiente de concentração",
	answer5:"Há transporte de sódio e potássio contra o gradiente de concentração",
	correctAnswer:"Há transporte de gases a favor do gradiente de concentração"},

	{system:"respiratório", 
	question:"A ventilação pulmonar permite o bom funcionamento energético do organismo. Entre os mecanismos citados abaixo, qual NÃO faz parte da ventilação pulmonar?", 
	answer1:"A renovação do ar dos pulmões", 
	answer2:"A troca de gases", 
	answer3:"A eliminação do excesso de gás carbônico",
	answer4:"Garante o suprimento contínuo de gás oxigênio",
	answer5:"A eliminação, em alta concentração, do gás oxigênio",
	correctAnswer:"A eliminação, em alta concentração, do gás oxigênio"},

	{system:"respiratório", 
	question:"Dos processos citados abaixo, qual NÃO faz parte da fisiologia do Sistema respiratório?", 
	answer1:"A inspiração com a eliminação do gás carbônico em alta concentração pelas cavidades nasais", 
	answer2:"O relaxamento do diafragma permitindo a expiração", 
	answer3:"A contração da musculatura do diafragma permitindo a inspiração",
	answer4:"A hematose com a troca de gases a favor do gradiente de concentração",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"A inspiração com a eliminação do gás carbônico em alta concentração pelas cavidades nasais"},

	{system:"respiratório", 
	question:"Qual das afirmações a seguir é verdadeira durante a inspiração?", 
	answer1:"A pressão intrapleural é positiva", 
	answer2:"A pressão intrapleural tem valor igual a zero", 
	answer3:"A pressão intrapleural é igual à pressão atmosférica",
	answer4:"A pressão intrapleural é mais negativa do que durante a expiração",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"A pressão intrapleural é mais negativa do que durante a expiração"},

	{system:"respiratório", 
	question:"Considere as seguintes etapas do processo respiratório no homem:\n"+
"I. Durante a inspiração, o diafragma se contrai e desce aumentando o volume da caixa torácica.\n"+
"II. Quando a pressão interna na caixa torácica diminui e se torna menor que a pressão do ar atmosférico, o ar penetra nos pulmões.\n"+
"III. Durante a expiração, o volume torácico aumenta, e a pressão interna se torna menor que a pressão do ar atmosférico.\n"+
"IV. Quando o diafragma relaxa, ele reduz o volume torácico e empurra o ar usado para fora dos pulmões. Assinale as opções corretas:", 
	answer1:"I e II", 
	answer2:"II, III e IV", 
	answer3:"I, II e III",
	answer4:"I, II e IV",
	answer5:"I e III",
	correctAnswer:"I, II e IV"},

	{system:"respiratório", 
	question:"Dos mecanismos citados abaixo qual explica melhor o funcionamento da inspiração?", 
	answer1:"A contração dos músculos intercostal com o relaxamento do diafragma aumenta o volume do tórax", 
	answer2:"O relaxamento do diafragma com a contração dos músculos intercostal", 
	answer3:"O relaxamento dos músculos intercostal e diafragma diminuindo o volume torácico",
	answer4:"O diafragma se contrai e desce aumentando o volume da caixa torácica",
	answer5:"A contração da musculatura cardíaca aumentando a volume torácico",
	correctAnswer:"O diafragma se contrai e desce aumentando o volume da caixa torácica"},

	{system:"respiratório", 
	question:"O aumento do volume do tórax, durante o processo de respiração, por causa da contração muscular, favorece que mecanismo e por qual motivo isso ocorre?", 
	answer1:"Permiti a saída de gases por causa de diferença de concentração", 
	answer2:"Possibilita a saída de gases por causa da pressão torácica", 
	answer3:"Há eliminação de gases por causa do acumulo de gás carbônico durante a respiração celular",
	answer4:"Permite a entrada, apenas do GÁS oxigênio, por causa de diferença de concentração",
	answer5:"Permite a entrada de gases por causa da diferença de pressão intra e extratorácica",
	correctAnswer:"Permite a entrada de gases por causa da diferença de pressão intra e extratorácica"},

	{system:"respiratório", 
	question:"Existe a possibilidade de aumentarmos ou diminuirmos, de maneira voluntária, a nossa frequência respiratória. Entretanto, esse processo é primordialmente de controle involuntário, sendo controlado por qual sistema?", 
	answer1:"Sistema nervoso", 
	answer2:"Sistema endócrino", 
	answer3:"Sistema osmótico",
	answer4:"Sistema digestivo",
	answer5:"Sistema circulatório",
	correctAnswer:"Sistema nervoso"},

	{system:"respiratório", 
	question:"O sistema nervoso controla nossa frequência cardíaca independente de nossa vontade. Esse controle é realizado em qual região do sistema nervoso?", 
	answer1:"Neurohipófise", 
	answer2:"Tronco encefálico", 
	answer3:"Adenohipófise",
	answer4:"Cerebelo",
	answer5:"Tálamo",
	correctAnswer:"Tronco encefálico"},

	{system:"respiratório", 
	question:"O processo físico que rege as trocas gasosas entre o alvéolo capilar e o vaso sanguíneo é:", 
	answer1:"Transporte ativo primário", 
	answer2:"Osmose", 
	answer3:"Difusão simples",
	answer4:"Transporte ativo secundário",
	answer5:"Difusão facilitada",
	correctAnswer:"Difusão facilitada"},

	{system:"respiratório", 
	question:"Se houver diminuição da concentração de gás oxigênio no sangue, o sistema nervoso entra em ação para alterar a frequência respiratória. Como isso ocorre?", 
	answer1:"Liberação de prolactina que estimula a contração dos músculos respiratórios", 
	answer2:"Liberação de gás carbônico no sangue e com isso o aumento da hematose", 
	answer3:"Produção de mensageiro químico diminuindo a frequência respiratória",
	answer4:"Detecção por receptores químicos nas artérias fazendo o sistema nervoso aumentar a frequência respiratória",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"Detecção por receptores químicos nas artérias fazendo o sistema nervoso aumentar a frequência respiratória"},

	{system:"respiratório", 
	question:"Após a hematose o gás oxigênio é transportado para as células, para que ocorra a respiração celular, por que tipo de células sanguíneas?", 
	answer1:"Plaquetas", 
	answer2:"Linfócitos", 
	answer3:"Plasma",
	answer4:"Leucócitos",
	answer5:"Hemácias",
	correctAnswer:"Hemácias"},

	{system:"respiratório", 
	question:"Cada hemácias pode transportar 1 bilhão de moléculas de gás oxigênio. Sabendo que cada hemácia possui 250 milhões de moléculas de hemoglobina, quantas moléculas de gás oxigênio cada hemoglobina pode transportar?", 
	answer1:"4", 
	answer2:"8", 
	answer3:"6",
	answer4:"2",
	answer5:"10",
	correctAnswer:"4"},

	{system:"respiratório", 
	question:"O gás oxigênio é transportado pelas hemácias pela proteína hemoglobina, formando o complexo oxiemoglobina. Já o gás carbônico pode ser transportado em três conformações diferentes. Quais das descritas abaixo está INCORRETA?", 
	answer1:"Dissolvido no plasma pela forma de íons HCO 3 -", 
	answer2:"ίn H + dissolvido no Plasma", 
	answer3:"Carboemoglobina na hemoglobina",
	answer4:"CO2 no plasma",
	answer5:"Nenhuma das respostas propostas",
	correctAnswer:"ίn H + dissolvido no Plasma"},

	{system:"respiratório", 
	question:"Qual é o nome do tubo oco constituído por cartilagem, em que se localizam as pregas vocais?", 
	answer1:"Faringe", 
	answer2:"Glote", 
	answer3:"Laringe",
	answer4:"Traqueia",
	answer5:"Bronquíolos",
	correctAnswer:"Laringe"},

	{system:"respiratório", 
	question:"Se aspirarmos com força um canudinho de refresco de paredes moles, estas encostam uma na outra e o canudinho fecha-se. O que evita situação semelhante em certas vias respiratórias é a presença de?", 
	answer1:"Células achatadas", 
	answer2:"Cílios", 
	answer3:"Muco",
	answer4:"Reforço de cartilagem",
	answer5:"Músculo",
	correctAnswer:"Reforço de cartilagem"},

	{system:"respiratório", 
	question:"O transporte de CO2 pelo sangue, dos tecidos aos alvéolos ocorre:", 
	answer1:"Totalmente pelo plasma sanguíneo, na forma de ácido carbônico", 
	answer2:"Predominantemente no interior das plaquetas sanguíneas", 
	answer3:"Totalmente no interior das hemácias, na forma de oxiemoglobina",
	answer4:"50% pelo plasma e 50% no interior das hemácias, na forma de oxiemoglobina",
	answer5:"70% pelos plasma na forma de HCO3-, 23% pela hemácias na forma de carboemoglobina e 7% na forma de CO2 pelo plasma",
	correctAnswer:"70% pelos plasma na forma de HCO3-, 23% pela hemácias na forma de carboemoglobina e 7% na forma de CO2 pelo plasma"},


	{system:"respiratório", 
	question:"A sequência das estruturas do sistema respiratório pulmonar é:", 
	answer1:"Fossas nasais - faringe - laringe - traqueia - brônquios", 
	answer2:"Fossas nasais - laringe - esôfago - brônquios - traqueia", 
	answer3:"Fossas nasais - laringe - faringe - traqueia - brônquios",
	answer4:"Fossas nasais - faringe - esôfago - traqueia - brônquios",
	answer5:"Fossas nasais - faringe - traqueia - laringe ֠brônquios",
	correctAnswer:"Fossas nasais - faringe - laringe - traqueia - brônquios"},

	{system:"respiratório", 
	question:"Os pulmões possuem algumas diferenças anatômicas. Comparando-se o pulmão direito com o pulmão esquerdo, observamos a existência de um número diferente de lobos pulmonares. Esta diferença está indicada na seguinte alternativa:", 
	answer1:"No lado esquerdo, o pulmão possui três lobos", 
	answer2:"O pulmão esquerdo possui um lobo superior e um lobo inferior", 
	answer3:"O pulmão direito possui apenas dois lobos",
	answer4:"O pulmão direito possui dois lobos laterais e um lobo medial",
	answer5:"O pulmão esquerdo é duas vezes maior do que o pulmão direito",
	correctAnswer:"O pulmão esquerdo possui um lobo superior e um lobo inferior"},

	{system:"respiratório", 
	question:"A respiração pulmonar funciona por dois mecanismos: a inspiração e a expiração. Na expiração NÃO ocorre:", 
	answer1:"Relaxamento do diafragma", 
	answer2:"Diminuição do volume pulmonar", 
	answer3:"Contração da musculatura diafragmática",
	answer4:"Aumento da pressão intratorácica em relação à pressão atmosférica",
	answer5:"Eliminação de dióxido de carbono",
	correctAnswer:"Contração da musculatura diafragmática"},


	{system:"respiratório", 
	question:"Qual das cartilagens da laringe produz a proeminência anterior da laringe conhecida pelo nome de 'pomo de Adão’?", 
	answer1:"Epiglote", 
	answer2:"Tireóide", 
	answer3:"Cricóide",
	answer4:"Laríngea",
	answer5:"Septo",
	correctAnswer:"Laríngea"}
	
];


exports.setGameConfig = function(gameConfig){
	gameConfig.splashText = "Olá!! Teste seus conhecimentos de fisiologia no BodyZap!\n\nEscolha uma opção:";
	gameConfig.aboutText = "Versão para serviços de IM do jogo Body desenvolvida pelo prof. D.Sc. Victor Sarinho (UEFS - Brazil). "
};
		
exports.startGameStatus = function(jidServer, jidClient, gameStatus){
	clearGameStatus(gameStatus);		
		
	gameStatus.statusId = "timer";
	
	gameStatus.startUp = new Date();
	gameStatus.timeLimit = new Date(gameStatus.startUp.getTime());	
	gameStatus.timeLimit.setMinutes(gameStatus.timeLimit.getMinutes() + TIME_LIMIT);
		
	var secs = Math.round((gameStatus.timeLimit.getTime() / 1000) - (gameStatus.startUp.getTime() / 1000));
	var minutes = Math.floor(secs / 60);
	var seconds = (secs % 60);
	if (seconds < 10) seconds = "0"+seconds;
		
	gameStatus.message = "Vc tem "+minutes+":"+seconds+" minutos para conquistar "+organs.length+" órgãos do Body!! Boa sorte!!";
			
	gameStatus.score = 0; 
	gameStatus.lastCard = null;
	
	if (conqueredOrgans[jidServer] === null || conqueredOrgans[jidServer] === undefined)
		conqueredOrgans[jidServer] = {};
	
	conqueredOrgans[jidServer][jidClient] = [];
}
	
exports.updateGameStatus = function(jidServer, jidClient, gameStatus, command){
	try {
		var secs = Math.round((gameStatus.timeLimit.getTime() / 1000) - ((new Date()) / 1000));	
		var minutes = Math.floor(secs / 60);
		var seconds = (secs % 60);
		if (seconds < 10) seconds = "0"+seconds;	
		
		var totalOrgans = organs.length;
		var totalConqueredOrgans = conqueredOrgans[jidServer][jidClient].length;
			
		console.log("gameStatus.statusId:"+gameStatus.statusId);
		if (secs > 0) {					
			if (gameStatus.statusId == "timer") {
				gameStatus.statusId = "card";
				
				gameStatus.score++;			
				gameStatus.lastCard = cards[Math.floor(Math.random()*cards.length-1)];
				gameStatus.message = "";
				gameStatus.menuText = gameStatus.score+"ª pergunta: "+gameStatus.lastCard.question;
				gameStatus.option1 = gameStatus.lastCard.answer1;
				gameStatus.option2 = gameStatus.lastCard.answer2;
				gameStatus.option3 = gameStatus.lastCard.answer3;
				gameStatus.option4 = gameStatus.lastCard.answer4;
				gameStatus.option5 = gameStatus.lastCard.answer5;	
			}
			else if (gameStatus.statusId == "card") {	
				
				if (command == gameStatus.lastCard.correctAnswer) {
					// se acertou então ...
					var newOrgan = null;
					for (var x = 0; x < organs.length && newOrgan == null; x++) {
						var found = false;
						for (var y = 0; y < conqueredOrgans[jidServer][jidClient].length && newOrgan == null; y++){								
							if (conqueredOrgans[jidServer][jidClient][y] == organs[x])
								found = true;
						}
						
						if (!found){
							newOrgan = organs[x];
						}
					}
					
					if (newOrgan !== null){
						conqueredOrgans[jidServer][jidClient].push(newOrgan);					
						totalConqueredOrgans++;
						console.log("newOrgan:");
						console.dir(newOrgan);
					}
										
					if (totalConqueredOrgans == totalOrgans) {
						// conquistou todos os orgaos então gravar mensagem de fim de partida
						gameStatus.statusId = "end";
						gameStatus.endMessage = "Parabéns!! Vc conquistou o Body em "+minutes+":"+seconds+" minutos e "+gameStatus.score+" tentativas!";
						gameStatus.score = gameStatus.score * secs;	
						gameStatus.highScoreText = "Informe um NOME para ser adicionado na lista de Melhores Resultados:";						
					}
					else {
						// parabenizar e exibir orgao conquistado; statusId = feedback	
						clearGameStatus(gameStatus);						
						gameStatus.statusId = "feedback";
						gameStatus.message = "Parabéns, vc acertou!! Como prêmio vc conquistou o órgão:"+newOrgan.name+".";						
					}
				}
				else {
					// se errou então informar erro e exibir orgao perdido; statusId = feedback				
					clearGameStatus(gameStatus);				
					gameStatus.statusId = "feedback";
					
					gameStatus.message = "Que pena, vc errou!! A resposta correta é: "+gameStatus.lastCard.correctAnswer;
					
					var lostOrgan = conqueredOrgans[jidServer][jidClient].pop();
					
					if (lostOrgan !== null & lostOrgan !== undefined)
						gameStatus.message += ". Como punição vc perdeu o órgão:" +lostOrgan.name+".";					
				}
			}	
			else if (gameStatus.statusId == "feedback") {
				// exibir timer; statusId = timer	
				clearGameStatus(gameStatus);				
				gameStatus.statusId = "timer";											
				gameStatus.message = "Restam "+minutes+":"+seconds+" minutos e "+(totalOrgans - totalConqueredOrgans)+" órgão(s) para conquistar o Body!!";									
			}	
		}
		else {
			// tempo acabou então gravar mensagem de fim de partida
			clearGameStatus(gameStatus);
			gameStatus.statusId = "end";				
			gameStatus.endMessage = "Que pena, o tempo acabou!! Vc conquistou apenas "+totalConqueredOrgans+" órgão(s) do Body!!";		
		}
	}
	catch (err){
		console.log(err.message);
	}	
}

function clearGameStatus(gs){	
	gs.statusId = "";	
	gs.message = "";
	gs.imagePath = "";
	gs.promptText = "";
	gs.menuText = "";
	gs.option1 = "";
	gs.option2 = "";
	gs.option3 = "";
	gs.option4 = ""; 
	gs.option5 = "";
	gs.endMessage = "";
	gs.highScoreText = "";	
}