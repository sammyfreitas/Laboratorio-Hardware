const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
let BUDGET = 2700;

const categories = [
  {id:'motherboard',name:'Placas-mãe',icon:'▦',desc:'Base do computador'},
  {id:'cpu',name:'Processadores',icon:'▣',desc:'Unidade de processamento'},
  {id:'ram',name:'Memórias',icon:'▤',desc:'Módulos RAM'},
  {id:'storage',name:'Armazenamento',icon:'▱',desc:'SSD e HD'},
  {id:'gpu',name:'Placas de vídeo',icon:'▰',desc:'Processamento gráfico'},
  {id:'cooler',name:'Coolers',icon:'✣',desc:'Refrigeração'},
  {id:'case',name:'Gabinetes',icon:'▥',desc:'Estrutura física'},
  {id:'psu',name:'Fontes',icon:'⚡',desc:'Alimentação elétrica'},
  {id:'monitor',name:'Monitores',icon:'▱',desc:'Dispositivo de saída'},
  {id:'keyboard',name:'Teclados',icon:'⌨',desc:'Dispositivo de entrada'},
  {id:'mouse',name:'Mouses',icon:'◉',desc:'Dispositivo de entrada'},
  {id:'headset',name:'Headsets',icon:'◖',desc:'Áudio e comunicação'},
  {id:'mousepad',name:'Mousepads',icon:'▭',desc:'Acessório da bancada'}
];

const products = [
  {id:'mb-h510',category:'motherboard',name:'Teclabs EDU-H510M',price:439.9,icon:'▦',short:'Micro-ATX • LGA1200 • DDR4',socket:'LGA1200',memoryType:'DDR4',maxRam:64,platform:'intel',specs:{Socket:'LGA1200',Chipset:'H510','Memória':'2 × DDR4, máximo 64 GB','Velocidade':'até 3200 MT/s','Armazenamento':'1 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Placa Intel econômica para processadores de 10ª e 11ª gerações.'},
  {id:'mb-b560',category:'motherboard',name:'Teclabs PRO-B560M',price:579.9,icon:'▦',short:'Micro-ATX • LGA1200 • DDR4',socket:'LGA1200',memoryType:'DDR4',maxRam:128,platform:'intel',specs:{Socket:'LGA1200',Chipset:'B560','Memória':'4 × DDR4, máximo 128 GB','Velocidade':'até 3200 MT/s','Armazenamento':'2 × M.2 + 6 × SATA','Formato':'Micro-ATX'},notes:'Placa Intel intermediária com quatro slots de memória.'},
  {id:'mb-b660',category:'motherboard',name:'Teclabs PRO-B660M',price:789.9,icon:'▦',short:'Micro-ATX • LGA1700 • DDR4',socket:'LGA1700',memoryType:'DDR4',maxRam:128,platform:'intel',specs:{Socket:'LGA1700',Chipset:'B660','Memória':'4 × DDR4, máximo 128 GB','Velocidade':'até 3200 MT/s','Armazenamento':'2 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Placa Intel intermediária para computadores de maior desempenho.'},
  {id:'mb-b760',category:'motherboard',name:'Teclabs MAX-B760M',price:949.9,icon:'▦',short:'Micro-ATX • LGA1700 • DDR5',socket:'LGA1700',memoryType:'DDR5',maxRam:192,platform:'intel',specs:{Socket:'LGA1700',Chipset:'B760','Memória':'4 × DDR5, máximo 192 GB','Velocidade':'até 6000 MT/s','Armazenamento':'3 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Placa Intel avançada. Exige memória DDR5.'},
  {id:'mb-h610',category:'motherboard',name:'Teclabs EDU-H610M',price:649.9,icon:'▦',short:'Micro-ATX • LGA1700 • DDR4',socket:'LGA1700',memoryType:'DDR4',maxRam:64,platform:'intel',specs:{Socket:'LGA1700',Chipset:'H610','Memória':'2 × DDR4, máximo 64 GB','Velocidade':'até 3200 MT/s','Armazenamento':'1 × M.2 NVMe + 4 × SATA','Formato':'Micro-ATX'},notes:'Compatível com processadores Intel de 12ª e 13ª gerações cadastrados no laboratório.'},
  {id:'mb-a320',category:'motherboard',name:'Teclabs EDU-A320M',price:459.9,icon:'▦',short:'Micro-ATX • AM4 • DDR4',socket:'AM4',memoryType:'DDR4',maxRam:32,platform:'amd',specs:{Socket:'AM4',Chipset:'A320','Memória':'2 × DDR4, máximo 32 GB','Velocidade':'até 2933 MT/s','Armazenamento':'1 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Plataforma econômica. Alguns processadores exigem atualização de BIOS.'},
  {id:'mb-b450',category:'motherboard',name:'Teclabs PRO-B450M',price:579.9,icon:'▦',short:'Micro-ATX • AM4 • DDR4',socket:'AM4',memoryType:'DDR4',maxRam:64,platform:'amd',specs:{Socket:'AM4',Chipset:'B450','Memória':'2 × DDR4, máximo 64 GB','Velocidade':'até 3200 MT/s','Armazenamento':'1 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Placa intermediária com maior capacidade de memória.'},
  {id:'cpu-i3-10105',category:'cpu',name:'CoreLab i3-10105',price:479.9,icon:'▣',short:'LGA1200 • 4 núcleos • vídeo integrado',socket:'LGA1200',specs:{Socket:'LGA1200','Núcleos / threads':'4 / 8','Frequência':'3,7–4,4 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Intel Core i3 econômico para placas H510 e B560.'},
  {id:'cpu-i5-11400',category:'cpu',name:'CoreLab i5-11400',price:699.9,icon:'▣',short:'LGA1200 • 6 núcleos • vídeo integrado',socket:'LGA1200',specs:{Socket:'LGA1200','Núcleos / threads':'6 / 12','Frequência':'2,6–4,4 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Intel Core i5 para multitarefa em placas LGA1200.'},
  {id:'cpu-i3',category:'cpu',name:'CoreLab i3-12100',price:689.9,icon:'▣',short:'LGA1700 • 4 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'4 / 8','Frequência':'3,3–4,3 GHz','Vídeo integrado':'Sim','Consumo':'60 W'},notes:'Escolha equilibrada para escritório, estudos e atividades administrativas.'},
  {id:'cpu-r5',category:'cpu',name:'RyzenLab R5-4600G',price:729.9,icon:'▣',short:'AM4 • 6 núcleos • vídeo integrado',socket:'AM4',specs:{Socket:'AM4','Núcleos / threads':'6 / 12','Frequência':'3,7–4,2 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Boa opção para computadores sem placa de vídeo dedicada.'},
  {id:'cpu-i5',category:'cpu',name:'CoreLab i5-12400',price:929.9,icon:'▣',short:'LGA1700 • 6 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'6 / 12','Frequência':'2,5–4,4 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Processador intermediário para multitarefa.'},
  {id:'cpu-i7-12700',category:'cpu',name:'CoreLab i7-12700',price:1499.9,icon:'▣',short:'LGA1700 • 12 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'12 / 20','Frequência':'2,1–4,9 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Intel Core i7 de alto desempenho para criação e multitarefa pesada.'},
  {id:'cpu-i5-13400',category:'cpu',name:'CoreLab i5-13400',price:1199.9,icon:'▣',short:'LGA1700 • 10 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'10 / 16','Frequência':'2,5–4,6 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Intel Core i5 de 13ª geração.'},
  {id:'cpu-i7-13700',category:'cpu',name:'CoreLab i7-13700',price:1899.9,icon:'▣',short:'LGA1700 • 16 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'16 / 24','Frequência':'2,1–5,2 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Opção Intel avançada para o orçamento de R$ 4.000.'},
  {id:'ram-8-3200',category:'ram',name:'Teclabs RAM 8 GB',price:159.9,icon:'▤',short:'DDR4 • 3200 MT/s • 1 módulo',memoryType:'DDR4',modules:1,specs:{Tipo:'DDR4','Capacidade':'8 GB','Velocidade':'3200 MT/s','Módulos':'1 × 8 GB','Tensão':'1,2 V'},notes:'Um único módulo funciona em single-channel. Outro módulo igual poderá ser adicionado depois.'},
  {id:'ram-16-3200',category:'ram',name:'Teclabs RAM Kit 16 GB',price:299.9,icon:'▤',short:'DDR4 • 3200 MT/s • 2 módulos',memoryType:'DDR4',modules:2,specs:{Tipo:'DDR4','Capacidade':'16 GB','Velocidade':'3200 MT/s','Módulos':'2 × 8 GB','Tensão':'1,2 V'},notes:'Kit preparado para dual-channel, desde que os dois módulos sejam instalados nos slots indicados no manual.'},
  {id:'ram-16-single',category:'ram',name:'Teclabs RAM 16 GB',price:279.9,icon:'▤',short:'DDR4 • 3200 MT/s • 1 módulo',memoryType:'DDR4',modules:1,specs:{Tipo:'DDR4','Capacidade':'16 GB','Velocidade':'3200 MT/s','Módulos':'1 × 16 GB','Tensão':'1,2 V'},notes:'Módulo único com possibilidade de expansão futura.'},
  {id:'ram-32-single',category:'ram',name:'Teclabs RAM 32 GB',price:499.9,icon:'▤',short:'DDR4 • 3200 MT/s • 1 módulo',memoryType:'DDR4',modules:1,specs:{Tipo:'DDR4','Capacidade':'32 GB','Velocidade':'3200 MT/s','Módulos':'1 × 32 GB','Tensão':'1,2 V'},notes:'Alta capacidade em um único slot.'},
  {id:'ram-32-kit',category:'ram',name:'Teclabs RAM Kit 32 GB',price:539.9,icon:'▤',short:'DDR4 • 3200 MT/s • 2 módulos',memoryType:'DDR4',modules:2,specs:{Tipo:'DDR4','Capacidade':'32 GB','Velocidade':'3200 MT/s','Módulos':'2 × 16 GB','Tensão':'1,2 V'},notes:'Kit dual-channel com dois módulos de 16 GB.'},
  {id:'ram-64-kit',category:'ram',name:'Teclabs RAM Kit 64 GB',price:899.9,icon:'▤',short:'DDR4 • 3200 MT/s • 2 módulos',memoryType:'DDR4',modules:2,specs:{Tipo:'DDR4','Capacidade':'64 GB','Velocidade':'3200 MT/s','Módulos':'2 × 32 GB','Tensão':'1,2 V'},notes:'Capacidade máxima das placas compatíveis de 64 GB.'},
  {id:'ram-16-ddr5',category:'ram',name:'Teclabs RAM 16 GB D5',price:389.9,icon:'▤',short:'DDR5 • 4800 MT/s • 1 módulo',memoryType:'DDR5',modules:1,specs:{Tipo:'DDR5','Capacidade':'16 GB','Velocidade':'4800 MT/s','Módulos':'1 × 16 GB','Tensão':'1,1 V'},notes:'O entalhe físico é diferente do DDR4. Não pode ser instalado em uma placa DDR4.'},
  {id:'ssd-480',category:'storage',name:'Teclabs SSD 480',price:219.9,icon:'▱',short:'SSD SATA • 480 GB',specs:{Interface:'SATA III','Capacidade':'480 GB','Leitura':'até 550 MB/s','Formato':'2,5 polegadas'},notes:'Exige cabo SATA de dados e alimentação da fonte.'},
  {id:'hdd-1tb',category:'storage',name:'Teclabs HDD 1 TB',price:249.9,icon:'▱',short:'HD SATA • 1 TB • 7200 RPM',specs:{Interface:'SATA III','Capacidade':'1 TB','Rotação':'7200 RPM','Formato':'3,5 polegadas'},notes:'Exige cabo SATA de dados e alimentação SATA da fonte.'},
  {id:'ssd-960',category:'storage',name:'Teclabs SSD 960',price:379.9,icon:'▱',short:'SSD SATA • 960 GB',specs:{Interface:'SATA III','Capacidade':'960 GB','Leitura':'até 550 MB/s','Formato':'2,5 polegadas'},notes:'SSD SATA de maior capacidade.'},
  {id:'nvme-500',category:'storage',name:'Teclabs NVMe 500',price:269.9,icon:'▱',short:'SSD M.2 NVMe • 500 GB',specs:{Interface:'PCIe 3.0 ×4','Capacidade':'500 GB','Leitura':'até 2500 MB/s','Formato':'M.2 2280'},notes:'Instalado diretamente no slot M.2 compatível da placa-mãe.'},
  {id:'nvme-1tb',category:'storage',name:'Teclabs NVMe 1 TB',price:449.9,icon:'▱',short:'SSD M.2 NVMe • 1 TB',specs:{Interface:'PCIe 4.0 ×4','Capacidade':'1 TB','Leitura':'até 5000 MB/s','Formato':'M.2 2280'},notes:'Armazenamento rápido instalado diretamente na placa-mãe.'},
  {id:'gpu-basic',category:'gpu',name:'Teclabs Vision 4G',price:799.9,icon:'▰',short:'4 GB • PCIe x16 • 75 W',specs:{Memória:'4 GB GDDR6','Interface':'PCIe x16','Consumo':'75 W','Saídas':'HDMI e DisplayPort'},notes:'Opcional para o desafio atual porque os processadores disponíveis possuem vídeo integrado.'},
  {id:'gpu-economy',category:'gpu',name:'Teclabs Start 2G',price:499,icon:'▰',short:'2 GB • PCIe x16 • 30 W',specs:{Memória:'2 GB GDDR5','Interface':'PCIe x16','Consumo':'30 W','Saídas':'HDMI, DVI e VGA','Alimentação extra':'Não'},notes:'Modelo econômico para vídeo, escritório e computadores com orçamento reduzido. Não exige conector adicional da fonte.'},
  {id:'gpu-plus',category:'gpu',name:'Teclabs Play 6G',price:1099.9,icon:'▰',short:'6 GB • PCIe x16 • 120 W',specs:{Memória:'6 GB GDDR6','Interface':'PCIe x16','Consumo':'120 W','Saídas':'HDMI e DisplayPort','Alimentação extra':'8 pinos'},notes:'Modelo para jogos e criação, exigindo alimentação adicional.'},
  {id:'cooler-box',category:'cooler',name:'Teclabs Air 95',price:99.9,icon:'✣',short:'Cooler a ar • 95 W',specs:{Tipo:'Ar','Capacidade térmica':'95 W','Conector':'CPU_FAN 4 pinos','Pasta térmica':'Incluída'},notes:'Compatibilidade depende do kit de fixação correspondente ao socket.'}
  ,{id:'cooler-pro',category:'cooler',name:'Teclabs Air Pro 150',price:189.9,icon:'✣',short:'Cooler torre • 150 W',specs:{Tipo:'Ar','Capacidade térmica':'150 W','Conector':'CPU_FAN 4 pinos','Ventoinha':'120 mm'},notes:'Cooler torre para processadores de maior desempenho.'},
  {id:'case-office',category:'case',name:'Teclabs Office Mini',price:179.9,short:'Gabinete compacto • Micro-ATX',specs:{Formato:'Mini Tower','Placas':'Micro-ATX e Mini-ITX','Ventoinhas':'até 3 × 120 mm','Baias':'2 × 2,5″ + 1 × 3,5″'},notes:'Gabinete econômico para computadores de escritório.'},
  {id:'case-air',category:'case',name:'Teclabs Air Flow',price:289.9,short:'Mid Tower • frente ventilada',specs:{Formato:'Mid Tower','Placas':'ATX, Micro-ATX e Mini-ITX','Ventoinhas':'3 incluídas','Lateral':'Vidro temperado'},notes:'Boa circulação de ar para configurações intermediárias.'},
  {id:'case-rgb',category:'case',name:'Teclabs Vision RGB',price:449.9,short:'Mid Tower • vidro • RGB',specs:{Formato:'Mid Tower','Placas':'ATX, Micro-ATX e Mini-ITX','Ventoinhas':'4 ARGB incluídas','Lateral':'Vidro temperado'},notes:'Gabinete gamer com iluminação e espaço para placas de vídeo maiores.'},
  {id:'psu-400',category:'psu',name:'Teclabs Power 400',price:199.9,short:'400 W • bivolt',watts:400,specs:{Potência:'400 W','Certificação':'Eficiência básica','Conectores':'ATX, CPU, SATA e PCIe','Tensão':'Bivolt automático'},notes:'Indicada para computadores sem placa de vídeo de alto consumo.'},
  {id:'psu-550',category:'psu',name:'Teclabs Power 550 Bronze',price:329.9,short:'550 W • 80 Plus Bronze',watts:550,specs:{Potência:'550 W','Certificação':'80 Plus Bronze','Conectores':'ATX, CPU, SATA e 2 × PCIe','Tensão':'Bivolt automático'},notes:'Fonte equilibrada para computadores intermediários.'},
  {id:'psu-750',category:'psu',name:'Teclabs Power 750 Gold',price:559.9,short:'750 W • modular • Gold',watts:750,specs:{Potência:'750 W','Certificação':'80 Plus Gold','Cabeamento':'Modular','Conectores':'ATX, CPU, SATA e 4 × PCIe'},notes:'Fonte de maior eficiência para placas de vídeo e processadores avançados.'},
  {id:'monitor-19',category:'monitor',name:'Teclabs View 19',price:429.9,short:'19″ • HD • 60 Hz',specs:{Tela:'19 polegadas','Resolução':'1366 × 768','Frequência':'60 Hz','Entradas':'HDMI e VGA'},notes:'Monitor econômico para atividades de escritório.'},
  {id:'monitor-24',category:'monitor',name:'Teclabs View 24 IPS',price:699.9,short:'24″ • Full HD • IPS',specs:{Tela:'24 polegadas IPS','Resolução':'1920 × 1080','Frequência':'75 Hz','Entradas':'HDMI e DisplayPort'},notes:'Monitor equilibrado para estudo, programação e criação.'},
  {id:'monitor-27',category:'monitor',name:'Teclabs Play 27',price:1099.9,short:'27″ • QHD • 165 Hz',specs:{Tela:'27 polegadas','Resolução':'2560 × 1440','Frequência':'165 Hz','Entradas':'2 × HDMI e DisplayPort'},notes:'Monitor de alta frequência para jogos.'},
  {id:'keyboard-basic',category:'keyboard',name:'Teclabs Key Office',price:49.9,short:'ABNT2 • USB • membrana',specs:{Layout:'ABNT2','Conexão':'USB','Tipo':'Membrana','Teclado numérico':'Sim'},notes:'Teclado completo para tarefas administrativas.'},
  {id:'keyboard-slim',category:'keyboard',name:'Teclabs Key Slim',price:89.9,short:'ABNT2 • compacto • silencioso',specs:{Layout:'ABNT2','Conexão':'USB','Tipo':'Membrana silenciosa','Perfil':'Baixo'},notes:'Modelo compacto para bancadas com pouco espaço.'},
  {id:'keyboard-mech',category:'keyboard',name:'Teclabs Key Mech RGB',price:249.9,short:'Mecânico • ABNT2 • RGB',specs:{Layout:'ABNT2','Conexão':'USB','Tipo':'Mecânico','Iluminação':'RGB'},notes:'Teclado mecânico para jogos e uso intensivo.'},
  {id:'mouse-basic',category:'mouse',name:'Teclabs Mouse 1200',price:29.9,short:'Óptico • USB • 1200 DPI',specs:{Sensor:'Óptico','Resolução':'1200 DPI','Botões':'3','Conexão':'USB'},notes:'Mouse simples para escritório e estudos.'},
  {id:'mouse-wireless',category:'mouse',name:'Teclabs Mouse Air',price:69.9,short:'Sem fio • 1600 DPI',specs:{Sensor:'Óptico','Resolução':'1600 DPI','Botões':'4','Conexão':'Receptor USB 2,4 GHz'},notes:'Mouse sem fio para uma bancada mais organizada.'},
  {id:'mouse-gamer',category:'mouse',name:'Teclabs Mouse Pulse RGB',price:149.9,short:'Gamer • 7200 DPI • RGB',specs:{Sensor:'Óptico','Resolução':'até 7200 DPI','Botões':'7','Conexão':'USB'},notes:'Mouse com botões programáveis para jogos.'},
  {id:'headset-basic',category:'headset',name:'Teclabs Talk',price:79.9,short:'Estéreo • P2 • microfone',specs:{Áudio:'Estéreo','Conexão':'2 × P2','Microfone':'Ajustável','Controle':'No cabo'},notes:'Headset para aulas, reuniões e atendimento.'},
  {id:'headset-usb',category:'headset',name:'Teclabs Sound USB',price:159.9,short:'USB • microfone • controle',specs:{Áudio:'Estéreo','Conexão':'USB','Microfone':'Com redução de ruído','Controle':'No cabo'},notes:'Headset USB que dispensa conectores de áudio separados.'},
  {id:'headset-rgb',category:'headset',name:'Teclabs Arena RGB',price:259.9,short:'Surround virtual • USB • RGB',specs:{Áudio:'Surround virtual 7.1','Conexão':'USB','Microfone':'Removível','Iluminação':'RGB'},notes:'Modelo para jogos e comunicação.'},
  {id:'mousepad-small',category:'mousepad',name:'Teclabs Pad S',price:24.9,short:'250 × 210 mm • tecido',specs:{Tamanho:'250 × 210 mm','Superfície':'Tecido','Base':'Borracha antiderrapante'},notes:'Mousepad compacto para escritório.'},
  {id:'mousepad-large',category:'mousepad',name:'Teclabs Desk Pad',price:69.9,short:'700 × 300 mm • deskmat',specs:{Tamanho:'700 × 300 mm','Superfície':'Tecido','Base':'Borracha antiderrapante'},notes:'Acomoda teclado e mouse na mesma superfície.'},
  {id:'mousepad-rgb',category:'mousepad',name:'Teclabs Pad RGB XL',price:129.9,short:'800 × 300 mm • RGB',specs:{Tamanho:'800 × 300 mm','Superfície':'Tecido','Iluminação':'RGB USB'},notes:'Mousepad grande com iluminação periférica.'}
];

const state={category:'motherboard',selected:{},socketOpen:false,ramOpen:false,cpuInstalled:false,thermalPasteApplied:false,motherboardPowerConnected:false,ramInstalledSlots:{},storageInstalled:false,sataDataConnected:false,sataPowerConnected:false,coolerInstalled:false,coolerLatchOpen:false,coolerSecured:false,gpuInstalled:false,activePart:null,rotations:{},booted:false,postPassed:false};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];

function renderCategories(){
  $('#categoryShelf').innerHTML=categories.map(c=>`<section class="catalog-row"><div class="category-card"><b>${c.icon} ${c.name}</b><small>${c.desc}</small></div><div class="row-products">${products.filter(p=>p.category===c.id).map(productCard).join('')}</div></section>`).join('');
  bindProductActions();
}

function renderProducts(){
  renderCategories();
}
function productCard(p){
  return `<article class="product-box"><div class="product-visual visual-${p.category} ${p.category==='motherboard'?'board-platform-'+p.platform:''}">${productVisual(p)}</div><span class="catalog-type">${partType(p)}</span><h4>${p.name}</h4><p>${p.short}</p><div class="product-price">${money.format(p.price)}</div><div class="product-actions"><button data-manual="${p.id}">Ver detalhes</button><button class="buy" data-buy="${p.id}" ${state.selected[p.category]?.id===p.id?'disabled':''}>${state.selected[p.category]?.id===p.id?'Escolhido':'Escolher'}</button></div></article>`;
}
function bindProductActions(){
  $$('[data-manual]').forEach(b=>b.onclick=()=>openManual(b.dataset.manual));
  $$('[data-buy]').forEach(b=>b.onclick=()=>selectProduct(b.dataset.buy));
}

function productVisual(p){
  if(p.category==='motherboard')return '<div class="mini-board"><i></i><i></i><i></i><b></b><span></span><em></em></div>';
  if(p.category==='cpu')return '<div class="mini-cpu"><span>CPU</span></div>';
  if(p.category==='ram')return `<div class="mini-ram"><i></i><i></i><i></i><i></i><i></i><b>DDR4</b></div>`;
  if(p.category==='storage'&&p.id.startsWith('nvme'))return '<div class="mini-nvme"><i></i><i></i><i></i><b>NVMe</b></div>';
  if(p.category==='storage'&&p.id.startsWith('hdd'))return '<div class="mini-drive hdd"><i></i><b>HDD</b></div>';
  if(p.category==='storage')return '<div class="mini-drive ssd"><b>SSD</b><span>SATA</span></div>';
  if(p.category==='gpu')return '<div class="mini-gpu"><i></i><b>GPU</b><span></span></div>';
  if(p.category==='cooler')return '<div class="mini-cooler"><i>✣</i><b></b></div>';
  if(p.category==='case')return '<div class="mini-case"><i></i><b></b><span></span></div>';
  if(p.category==='psu')return '<div class="mini-psu"><i>✣</i><b>POWER</b></div>';
  if(p.category==='monitor')return '<div class="mini-monitor"><i>TECLABS</i><b></b></div>';
  if(p.category==='keyboard')return '<div class="mini-keyboard">⌨</div>';
  if(p.category==='mouse')return '<div class="mini-mouse"><i></i></div>';
  if(p.category==='headset')return '<div class="mini-headset">◖ ◗</div>';
  return '<div class="mini-mousepad">TECLABS</div>';
}

function openManual(id){
  const p=products.find(x=>x.id===id);
  $('#manualContent').innerHTML=`<span class="eyebrow">MINI MANUAL</span><h2>${p.name}</h2><div class="manual-price">${money.format(p.price)}</div><p>${p.short}</p><div class="manual-specs">${Object.entries(p.specs).map(([k,v])=>`<div><small>${k}</small><strong>${v}</strong></div>`).join('')}</div><p><strong>Dica:</strong> ${p.notes}</p>`;
  $('#manualDialog').showModal();
}

function selectProduct(id){
  const p=products.find(x=>x.id===id); const old=state.selected[p.category]; state.selected[p.category]=p;
  if(totalUsed()>BUDGET){ if(old)state.selected[p.category]=old;else delete state.selected[p.category]; toast('Esta escolha ultrapassa o orçamento disponível.',true); return; }
  const board=state.selected.motherboard;
  if(board && p.category==='cpu' && p.socket!==board.socket) toast('Atenção: o processador escolhido não é compatível com o socket da placa-mãe.',true);
  if(board && p.category==='ram' && p.memoryType!==board.memoryType) toast(`Atenção: esta placa aceita ${board.memoryType}; o módulo escolhido é ${p.memoryType}.`,true);
  if(board && p.category==='ram' && Number.parseInt(p.specs.Capacidade)>board.maxRam) toast(`Atenção: esta placa-mãe suporta no máximo ${board.maxRam} GB de memória.`,true);
  renderProducts();renderSelected();updateBudget();
}

function totalUsed(){return Object.values(state.selected).reduce((s,p)=>s+p.price,0)}
function virtualPcData(stage='hardware'){
  const selected=Object.fromEntries(Object.entries(state.selected).map(([category,p])=>[category,{id:p.id,name:p.name,price:p.price,specs:p.specs}]));
  return {version:'1.0.0',updatedAt:new Date().toISOString(),stage,budget:BUDGET,total:totalUsed(),selected,assembly:{cpu:state.cpuInstalled,ram:Object.keys(state.ramInstalledSlots).length,storage:state.storageInstalled,gpu:state.gpuInstalled,cooler:state.coolerInstalled,thermalPaste:state.thermalPasteApplied,atx24:state.motherboardPowerConnected,sataData:state.sataDataConnected,sataPower:state.sataPowerConnected},firmware:{mode:'UEFI',postPassed:state.postPassed,secureBoot:false,tpm:state.selected.motherboard?.id==='mb-b760'},operatingSystem:null};
}
function saveVirtualPc(stage='hardware'){try{localStorage.setItem('teclabsVirtualPc',JSON.stringify(virtualPcData(stage)));}catch(error){console.warn('Não foi possível salvar o computador virtual.',error)}}
function updateBudget(){const used=totalUsed();$('#budgetTotal').textContent=money.format(BUDGET);$('#budgetUsed').textContent=money.format(used);$('#budgetRemaining').textContent=money.format(BUDGET-used);$('#budgetProgress').style.width=`${Math.min(100,used/BUDGET*100)}%`;$$('[data-budget]').forEach(b=>b.classList.toggle('active',Number(b.dataset.budget)===BUDGET));}
function renderSelected(){
  const list=Object.values(state.selected); $('#selectedList').innerHTML=list.length?list.map(p=>`<div class="selected-item"><b>${p.name}</b><small>${money.format(p.price)}</small><button data-remove="${p.category}" aria-label="Remover">×</button></div>`).join(''):'<p class="empty-message">Sua bancada ainda está vazia.</p>';
  $$('[data-remove]').forEach(b=>b.onclick=()=>{delete state.selected[b.dataset.remove];renderSelected();renderProducts();updateBudget();});
  $('#goBench').disabled=!(state.selected.motherboard&&state.selected.cpu&&state.selected.ram);
  saveVirtualPc('seleção');
}

function renderOsJourney(){
  saveVirtualPc('pronto-para-instalacao');
  const pc=virtualPcData('pronto-para-instalacao'),s=pc.selected;
  $('#virtualPcSummary').innerHTML=`<span class="eyebrow">COMPUTADOR VIRTUAL SALVO</span><h3>${s.case?.name||'Gabinete ainda não selecionado'}</h3><div><b>Placa-mãe</b><span>${s.motherboard?.name||'—'}</span></div><div><b>Processador</b><span>${s.cpu?.name||'—'}</span></div><div><b>Memória</b><span>${s.ram?.name||'—'}</span></div><div><b>Armazenamento</b><span>${s.storage?.name||'—'}</span></div><div><b>Fonte</b><span>${s.psu?.name||'—'}</span></div><div><b>Total</b><span>${money.format(pc.total)}</span></div>`;
}

function switchView(view){
  $$('.view').forEach(v=>v.classList.remove('active')); $$('.step').forEach(s=>s.classList.toggle('active',s.dataset.view===view)); $(`#${view}View`).classList.add('active');
  if(view==='bench')renderBench(); if(view==='boot')renderBoot(); if(view==='os')renderOsJourney(); window.scrollTo({top:0,behavior:'smooth'});
}

function compatibility(){const b=state.selected.motherboard,c=state.selected.cpu,r=state.selected.ram;return {cpu:c.socket===b.socket,ram:r.memoryType===b.memoryType&&Number.parseInt(r.specs.Capacidade)<=b.maxRam};}
function partType(p){return {motherboard:'Placa-mãe',cpu:'Processador',ram:'Memória RAM',storage:p.id.startsWith('nvme')?'SSD NVMe':p.id.startsWith('hdd')?'HD SATA':'SSD SATA',gpu:'Placa de vídeo (GPU)',cooler:'Cooler do processador',case:'Gabinete',psu:'Fonte de alimentação',monitor:'Monitor',keyboard:'Teclado',mouse:'Mouse',headset:'Headset',mousepad:'Mousepad'}[p.category]||'Componente'}

function renderBench(){
  $('#benchBoardModel').textContent=state.selected.motherboard?.name.replace('Teclabs ','')||'EDU-H610M';
  $('#motherboard').classList.remove('platform-intel','platform-amd');
  $('#motherboard').classList.add(`platform-${state.selected.motherboard?.platform||'intel'}`);
  const installed={cpu:state.cpuInstalled,storage:state.storageInstalled,cooler:state.coolerInstalled,gpu:state.gpuInstalled};
  const regularParts=[state.selected.cpu,state.selected.storage,state.selected.cooler,state.selected.gpu].filter(p=>p&&!installed[p.category]);
  const installedRamIds=Object.values(state.ramInstalledSlots);
  const ramParts=state.selected.ram?Array.from({length:state.selected.ram.modules||1},(_,i)=>({...state.selected.ram,instanceId:`${state.selected.ram.id}::${i+1}`,name:`${state.selected.ram.name} — módulo ${i+1}`})).filter(p=>!installedRamIds.includes(p.instanceId)):[];
  const parts=[...regularParts,...ramParts];
  $('#partsTray').innerHTML=parts.length?parts.map(p=>{const id=p.instanceId||p.id;return `<div class="draggable-part ${state.activePart===id?'selected':''} ${state.rotations[id]?'rotated':''}" draggable="true" data-part="${id}"><span class="part-type">${partType(p)}</span><div class="part-shape ${p.category}">${p.category==='cpu'?'CPU':p.category==='ram'?'DDR4':p.category==='cooler'?'✣':p.category==='gpu'?'GPU':p.id.startsWith('hdd')?'HD':'SSD'}</div><b>${p.name}</b><button class="rotate-part" type="button" data-rotate="${id}">Girar ↻</button></div>`}).join(''):'<p class="empty-message">Todas as peças escolhidas foram instaladas.</p>';
  $$('.draggable-part').forEach(el=>{el.onclick=()=>{state.activePart=el.dataset.part;renderBench();highlightZones();};el.ondragstart=e=>{state.activePart=el.dataset.part;e.dataTransfer.setData('text/plain',el.dataset.part);highlightZones();};});
  $$('[data-rotate]').forEach(button=>button.onclick=e=>{e.stopPropagation();const id=button.dataset.rotate;state.activePart=id;state.rotations[id]=!state.rotations[id];renderBench();highlightZones();});
  ['cpuSocket','ramSlotA2','ramSlotB2','coolerMount','m2Slot','sataBay','pcieSlot'].forEach(id=>{const z=$('#'+id);z.ondragover=e=>e.preventDefault();z.ondrop=e=>{e.preventDefault();installPart(e.dataTransfer.getData('text/plain'),z.dataset.accept,z.dataset.storage,z.dataset.ramSlot)};z.onclick=()=>state.activePart&&installPart(state.activePart,z.dataset.accept,z.dataset.storage,z.dataset.ramSlot);});
  $('#cpuSocket').classList.toggle('open',state.socketOpen);$$('.ram-slot').forEach(slot=>slot.classList.toggle('open',state.ramOpen));
  $('#openSocket').textContent=state.socketOpen?'Fechar socket':'Abrir socket';
  $('#openRam').textContent=state.ramOpen?'Fechar travas da RAM':'Abrir travas da RAM';
  ['cpuSocket','ramSlotA2','ramSlotB2','coolerMount','m2Slot','sataBay','pcieSlot'].forEach(id=>$('#'+id).querySelectorAll('.installed-part').forEach(x=>x.remove()));
  if(state.cpuInstalled)$('#cpuSocket').insertAdjacentHTML('beforeend','<div class="installed-part cpu">CPU</div>');
  Object.keys(state.ramInstalledSlots).forEach(slot=>$('#ramSlot'+slot).insertAdjacentHTML('beforeend',`<button class="installed-part ram removable-ram" type="button" data-remove-ram="${slot}" title="Retirar memória do slot ${slot}">RAM <small>Retirar</small></button>`));
  $$('[data-remove-ram]').forEach(button=>button.onclick=e=>{e.stopPropagation();removeRam(button.dataset.removeRam);});
  $('#coolerMount').classList.toggle('active',state.cpuInstalled&&!state.coolerInstalled);
  $('#coolerMount').classList.toggle('latch-open',state.coolerLatchOpen);
  $('#openCoolerLatch').textContent=state.coolerLatchOpen?'Fechar trava do cooler':'Abrir trava do cooler';
  $('#applyThermalPaste').classList.toggle('used',state.thermalPasteApplied);
  $('#applyThermalPaste').querySelector('small').textContent=state.thermalPasteApplied?'Aplicada corretamente ✓':'Aplicar sobre a CPU';
  $('#connectBoardPower').classList.toggle('used',state.motherboardPowerConnected);
  $('#connectBoardPower').classList.toggle('connected',state.motherboardPowerConnected);
  if(state.coolerInstalled){$('#coolerMount').classList.add('active');$('#coolerMount').insertAdjacentHTML('beforeend','<div class="installed-part cooler">✣</div>');}
  if(state.storageInstalled){const target=state.selected.storage.id.startsWith('nvme')?'m2Slot':'sataBay';$('#'+target).insertAdjacentHTML('beforeend','<div class="installed-part storage">SSD</div>');}
  const sataSelected=state.selected.storage&&!state.selected.storage.id.startsWith('nvme');
  $('#sataConnections').hidden=!sataSelected;
  $('#connectSataData').classList.toggle('connected',state.sataDataConnected);
  $('#connectSataPower').classList.toggle('connected',state.sataPowerConnected);
  $('#sataDataStatus').textContent=state.sataDataConnected?'Dados: SSD ↔ SATA 1 conectado ✓':'Dados: aguardando ligação';
  $('#sataPowerStatus').textContent=state.sataPowerConnected?'Energia: fonte ↔ SSD conectado ✓':'Energia: aguardando ligação';
  if(state.gpuInstalled)$('#pcieSlot').insertAdjacentHTML('beforeend','<div class="installed-part gpu">GPU</div>');
  updateChecklist();
}

function removeRam(slot){
  if(!state.ramOpen){toast('Abra as travas da RAM antes de retirar o módulo. Isso libera o pente sem forçar o slot.',true);return}
  if(!state.ramInstalledSlots[slot])return;
  delete state.ramInstalledSlots[slot];
  state.activePart=null;
  toast(`Memória retirada do slot ${slot} e devolvida à bandeja.`);
  renderBench();
}

function basePart(id){return products.find(x=>x.id===id.split('::')[0])}
function highlightZones(){$$('.drop-zone').forEach(z=>z.classList.remove('ready'));const p=basePart(state.activePart||'');if(p)$$(`.drop-zone[data-accept="${p.category}"]`).forEach(z=>z.classList.add('ready'));}
function installPart(id,target,storageTarget,ramSlot){
  const p=basePart(id); if(!p||p.category!==target){toast('Essa peça não pertence a este encaixe.',true);return}
  if(target==='cpu'&&!state.socketOpen){toast('Abra a trava e a tampa do socket antes de instalar o processador.',true);return}
  if(target==='ram'&&!state.ramOpen){toast('Abra as travas do slot de memória antes de instalar o módulo.',true);return}
  if(target==='ram'&&state.ramInstalledSlots[ramSlot]){toast(`O slot ${ramSlot} já está ocupado.`,true);return}
  if(target==='cooler'&&!state.cpuInstalled){toast('Instale o processador antes de posicionar o cooler.',true);return}
  if(target==='cooler'&&!state.thermalPasteApplied){toast('Aplique a pasta térmica sobre o processador antes do cooler. Ela preenche microespaços e ajuda a transferir o calor para o dissipador.',true);return}
  if(target==='cooler'&&!state.coolerLatchOpen){toast('Abra a trava do suporte antes de posicionar o cooler.',true);return}
  if(target==='storage'){
    const needs=p.id.startsWith('nvme')?'nvme':'sata';
    if(needs!==storageTarget){toast(needs==='nvme'?'Este SSD deve ser instalado no slot M.2 NVMe.':'Este SSD SATA deve ser instalado na baia indicada.',true);return}
  }
  if(state.rotations[id]){toast('O entalhe ou a marca de referência está na posição errada. Gire a peça.',true);return}
  const comp=compatibility(); if((target==='cpu'||target==='ram')&&!comp[target]){toast(target==='cpu'?'O socket do processador não é compatível com esta placa.':'Este módulo de memória não é compatível com o slot DDR4.',true);return}
  if(target==='cpu')state.cpuInstalled=true;else if(target==='ram')state.ramInstalledSlots[ramSlot]=id;else if(target==='storage')state.storageInstalled=true;else if(target==='cooler')state.coolerInstalled=true;else if(target==='gpu')state.gpuInstalled=true;state.activePart=null;toast(target==='ram'?`Módulo instalado corretamente no slot ${ramSlot}.`:target==='cooler'?'Cooler posicionado. Agora feche a trava de fixação.':`${p.name} instalado corretamente.`);renderBench();
}

function ramComplete(){return Object.keys(state.ramInstalledSlots).length===(state.selected.ram?.modules||0)}
function updateChecklist(){const required=state.selected.ram?.modules||0,installed=Object.keys(state.ramInstalledSlots).length,ramDone=ramComplete()&&required>0;const sata=state.selected.storage&&!state.selected.storage.id.startsWith('nvme');const map={socket:state.socketOpen,cpu:state.cpuInstalled,'thermal-paste':state.thermalPasteApplied,'board-power':state.motherboardPowerConnected,'ram-open':state.ramOpen,ram:ramDone,storage:state.selected.storage?state.storageInstalled:true,'sata-data':!sata||state.sataDataConnected,'sata-power':!sata||state.sataPowerConnected,cooler:state.selected.cooler?state.coolerInstalled:true,'cooler-secured':state.selected.cooler?state.coolerSecured:true,gpu:state.selected.gpu?state.gpuInstalled:true};Object.entries(map).forEach(([k,v])=>$(`[data-check="${k}"]`).classList.toggle('done',v));$$('[data-check="sata-data"],[data-check="sata-power"]').forEach(el=>el.hidden=!sata);$('[data-check="ram-open"]').textContent=state.ramOpen?'Travas da RAM abertas':'Travas da RAM fechadas';$('[data-check="ram"]').textContent=`Memórias instaladas (${installed}/${required})`;$('#testAssembly').disabled=!(state.cpuInstalled&&state.thermalPasteApplied&&state.motherboardPowerConnected&&ramDone&&(!state.selected.storage||state.storageInstalled)&&(!sata||(state.sataDataConnected&&state.sataPowerConnected))&&(!state.selected.cooler||state.coolerSecured)&&(!state.selected.gpu||state.gpuInstalled));}

function renderBoot(){state.booted=false;state.postPassed=false;$('#pcCase').classList.remove('running');$('#monitorScreen').className='monitor-screen';$('#monitorScreen').innerHTML='<span>Pressione o botão de energia</span>';saveVirtualPc('post');}
function powerOn(){if(state.booted)return;state.booted=true;$('#pcCase').classList.add('running');const screen=$('#monitorScreen');screen.innerHTML='<span>TECLABS UEFI<br><br>Executando POST...</span>';setTimeout(()=>{const comp=compatibility();const sata=state.selected.storage&&!state.selected.storage.id.startsWith('nvme');const passed=state.cpuInstalled&&ramComplete()&&comp.cpu&&comp.ram&&state.thermalPasteApplied&&state.motherboardPowerConnected&&(!state.selected.storage||state.storageInstalled)&&(!sata||(state.sataDataConnected&&state.sataPowerConnected))&&(!state.selected.cooler||state.coolerSecured)&&(!state.selected.gpu||state.gpuInstalled);state.postPassed=passed;if(passed){const checks=[`Processador: ${state.selected.cpu.name} ✓`,`Memória RAM: ${state.selected.ram.name} (${state.selected.ram.modules||1} módulo(s)) ✓`,`Pasta térmica aplicada ✓`,`Cooler instalado e fixado ✓`,`Alimentação ATX 24 pinos ✓`,state.selected.storage?`Armazenamento: ${state.selected.storage.name} ✓`:'Armazenamento: não selecionado',...(sata?['Cabo SATA de dados ✓','Alimentação do SSD SATA ✓']:[]),state.selected.gpu?`Placa de vídeo: ${state.selected.gpu.name} ✓`:'Vídeo integrado ✓'];screen.classList.add('success');screen.innerHTML=`<span>TECLABS UEFI<br><br>1 BIPE CURTO ✓<br>${checks.join('<br>')}<br><br>Montagem aprovada!</span>`;$('#bootReport').innerHTML=`<span class="eyebrow">POST CONCLUÍDO • 1 BIPE CURTO</span><h2>O computador passou por todos os testes.</h2><ul class="test-results">${checks.map(item=>`<li>${item}</li>`).join('')}</ul><p>Compatibilidade, instalação, refrigeração, alimentação e conexões foram verificadas com sucesso.</p><button id="continueJourney" class="button primary" type="button">Continuar para instalação do sistema →</button>`;$('#continueJourney').onclick=()=>switchView('os');saveVirtualPc('post-aprovado');}else{screen.classList.add('error');screen.innerHTML='<span>FALHA NO POST<br><br>BIPES DE DIAGNÓSTICO<br>Verifique a montagem</span>';$('#bootReport').innerHTML='<span class="eyebrow">DIAGNÓSTICO NECESSÁRIO</span><h2>O computador não completou todos os testes.</h2><p>Dica: volte à bancada e confira componentes, refrigeração, alimentação e conexões.</p><div class="beep-diagnostic">Bipes contínuos normalmente indicam problema de memória; ausência de bipes pode indicar alimentação ou painel frontal. Os padrões variam conforme o fabricante da BIOS.</div>';saveVirtualPc('post-falhou');}},1500);}

function toast(message,error=false){const t=$('#toast');t.textContent=message;t.className=`toast show ${error?'error':''}`;clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),3500);}
function playBeeps(kind){
  const patterns={ok:[.12],ram:[.16,.16,.16,.16],video:[.55,.14,.14],power:[]},messages={ok:'1 bipe curto: POST concluído sem falhas.',ram:'Bipes contínuos: verifique se a memória está instalada e bem encaixada.',video:'1 bipe longo e 2 curtos: verifique a placa de vídeo. O padrão pode variar conforme a BIOS.',power:'Sem bipe: verifique fonte, cabo de energia, conector ATX e painel frontal.'};
  const sequence=patterns[kind]||[];toast(messages[kind]||'Código de diagnóstico.');if(!sequence.length)return;
  const Audio=window.AudioContext||window.webkitAudioContext,ctx=new Audio();let at=ctx.currentTime+.04;sequence.forEach(duration=>{const oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.frequency.value=kind==='video'?720:880;gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(.16,at+.01);gain.gain.exponentialRampToValueAtTime(.0001,at+duration);oscillator.connect(gain).connect(ctx.destination);oscillator.start(at);oscillator.stop(at+duration+.02);at+=duration+.13;});
}
function reset(){BUDGET=2700;Object.assign(state,{category:'motherboard',selected:{},socketOpen:false,ramOpen:false,cpuInstalled:false,thermalPasteApplied:false,motherboardPowerConnected:false,ramInstalledSlots:{},storageInstalled:false,sataDataConnected:false,sataPowerConnected:false,coolerInstalled:false,coolerLatchOpen:false,coolerSecured:false,gpuInstalled:false,activePart:null,rotations:{},booted:false,postPassed:false});localStorage.removeItem('teclabsVirtualPc');renderCategories();renderProducts();renderSelected();updateBudget();switchView('store');toast('Laboratório reiniciado.');}

$('#closeManual').onclick=()=>$('#manualDialog').close();$('#goBench').onclick=()=>switchView('bench');$('#openSocket').onclick=()=>{state.socketOpen=!state.socketOpen;toast(state.socketOpen?'Socket aberto. Alinhe o triângulo do processador.':'Socket fechado.');renderBench();};$('#openRam').onclick=()=>{state.ramOpen=!state.ramOpen;toast(state.ramOpen?'Travas dos dois slots de memória abertas.':'Travas das memórias fechadas.');renderBench();};$('#testAssembly').onclick=()=>switchView('boot');$('#powerButton').onclick=powerOn;$('#resetButton').onclick=reset;$('#themeToggle').onclick=()=>{const light=document.documentElement.dataset.theme==='light';document.documentElement.dataset.theme=light?'dark':'light';$('#themeToggle').textContent=light?'☾':'☀';};$$('.step').forEach(s=>s.onclick=()=>{if(s.dataset.view==='bench'&&!state.selected.motherboard)return toast('Escolha as peças antes de ir para a bancada.',true);if(s.dataset.view==='boot'&&!(state.cpuInstalled&&ramComplete()))return toast('Instale todos os módulos do kit antes do teste.',true);if(s.dataset.view==='os'&&!state.postPassed)return toast('Conclua a montagem e passe pelo POST antes de instalar o sistema.',true);switchView(s.dataset.view);});
$$('[data-beep]').forEach(button=>button.onclick=()=>playBeeps(button.dataset.beep));
$$('[data-journey]').forEach(link=>link.onclick=()=>saveVirtualPc(link.dataset.journey));

$('#openCoolerLatch').onclick=()=>{if(!state.cpuInstalled)return toast('Instale o processador antes de preparar o suporte do cooler.',true);if(state.coolerLatchOpen){state.coolerLatchOpen=false;state.coolerSecured=state.coolerInstalled;toast(state.coolerInstalled?'Trava fechada. Cooler fixado corretamente.':'Trava do suporte fechada.');}else{state.coolerLatchOpen=true;state.coolerSecured=false;toast(state.coolerInstalled?'Trava do cooler aberta.':'Trava do suporte aberta. Posicione o cooler com o cabo voltado para CPU_FAN.');}renderBench();};
$('#connectSataData').onclick=()=>{if(!state.storageInstalled)return toast('Instale o SSD SATA na baia antes de conectar o cabo de dados.',true);state.sataDataConnected=!state.sataDataConnected;toast(state.sataDataConnected?'Cabo SATA ligado à placa-mãe e ao SSD.':'Cabo SATA desconectado.');renderBench();};
$('#connectSataPower').onclick=()=>{if(!state.storageInstalled)return toast('Instale o SSD SATA na baia antes de conectar a alimentação.',true);state.sataPowerConnected=!state.sataPowerConnected;toast(state.sataPowerConnected?'Cabo de alimentação da fonte conectado ao SSD.':'Alimentação do SSD desconectada.');renderBench();};
$('#applyThermalPaste').onclick=()=>{if(!state.cpuInstalled)return toast('Instale e trave o processador no socket antes de aplicar a pasta térmica. Aplicá-la antes pode sujar os contatos.',true);if(state.coolerInstalled)return toast('O cooler já está instalado. Remova-o antes de reaplicar a pasta térmica.',true);state.thermalPasteApplied=true;toast('Pasta térmica aplicada sobre a CPU. Agora abra o suporte e instale o cooler.');renderBench();};
$('#connectBoardPower').onclick=()=>{state.motherboardPowerConnected=!state.motherboardPowerConnected;toast(state.motherboardPowerConnected?'Cabo ATX de 24 pinos conectado à placa-mãe.':'Cabo ATX desconectado.');renderBench();};

$$('[data-budget]').forEach(button=>button.onclick=()=>{const next=Number(button.dataset.budget);if(totalUsed()>next)return toast('O valor já utilizado é maior que esse orçamento. Remova uma peça antes de reduzir.',true);BUDGET=next;updateBudget();toast(`Orçamento inicial alterado para ${money.format(BUDGET)}.`);});

renderCategories();renderProducts();renderSelected();updateBudget();
