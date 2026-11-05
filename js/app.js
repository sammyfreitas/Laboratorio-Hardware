const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const BUDGET = 2500;

const categories = [
  {id:'motherboard',name:'Placas-mãe',icon:'▦',desc:'Base do computador'},
  {id:'cpu',name:'Processadores',icon:'▣',desc:'Unidade de processamento'},
  {id:'ram',name:'Memórias',icon:'▤',desc:'Módulos RAM'},
  {id:'storage',name:'Armazenamento',icon:'▱',desc:'SSD e HD'},
  {id:'gpu',name:'Placas de vídeo',icon:'▰',desc:'Processamento gráfico'},
  {id:'cooler',name:'Coolers',icon:'✣',desc:'Refrigeração'}
];

const products = [
  {id:'mb-h610',category:'motherboard',name:'Teclabs EDU-H610M',price:649.9,icon:'▦',short:'Micro-ATX • LGA1700 • DDR4',specs:{Socket:'LGA1700',Chipset:'H610','Memória':'2 × DDR4, máximo 64 GB','Velocidade':'até 3200 MT/s','Armazenamento':'1 × M.2 NVMe + 4 × SATA','Formato':'Micro-ATX'},notes:'Compatível com processadores Intel de 12ª e 13ª gerações cadastrados no laboratório.'},
  {id:'mb-a320',category:'motherboard',name:'Teclabs EDU-A320M',price:459.9,icon:'▦',short:'Micro-ATX • AM4 • DDR4',specs:{Socket:'AM4',Chipset:'A320','Memória':'2 × DDR4, máximo 32 GB','Velocidade':'até 2933 MT/s','Armazenamento':'1 × M.2 + 4 × SATA','Formato':'Micro-ATX'},notes:'Plataforma econômica. Alguns processadores exigem atualização de BIOS.'},
  {id:'cpu-i3',category:'cpu',name:'CoreLab i3-12100',price:689.9,icon:'▣',short:'LGA1700 • 4 núcleos • vídeo integrado',socket:'LGA1700',specs:{Socket:'LGA1700','Núcleos / threads':'4 / 8','Frequência':'3,3–4,3 GHz','Vídeo integrado':'Sim','Consumo':'60 W'},notes:'Escolha equilibrada para escritório, estudos e atividades administrativas.'},
  {id:'cpu-r5',category:'cpu',name:'RyzenLab R5-4600G',price:729.9,icon:'▣',short:'AM4 • 6 núcleos • vídeo integrado',socket:'AM4',specs:{Socket:'AM4','Núcleos / threads':'6 / 12','Frequência':'3,7–4,2 GHz','Vídeo integrado':'Sim','Consumo':'65 W'},notes:'Boa opção para computadores sem placa de vídeo dedicada.'},
  {id:'ram-8-3200',category:'ram',name:'Teclabs RAM 8 GB',price:159.9,icon:'▤',short:'DDR4 • 3200 MT/s • 1 módulo',memoryType:'DDR4',modules:1,specs:{Tipo:'DDR4','Capacidade':'8 GB','Velocidade':'3200 MT/s','Módulos':'1 × 8 GB','Tensão':'1,2 V'},notes:'Um único módulo funciona em single-channel. Outro módulo igual poderá ser adicionado depois.'},
  {id:'ram-16-3200',category:'ram',name:'Teclabs RAM Kit 16 GB',price:299.9,icon:'▤',short:'DDR4 • 3200 MT/s • 2 módulos',memoryType:'DDR4',modules:2,specs:{Tipo:'DDR4','Capacidade':'16 GB','Velocidade':'3200 MT/s','Módulos':'2 × 8 GB','Tensão':'1,2 V'},notes:'Kit preparado para dual-channel, desde que os dois módulos sejam instalados nos slots indicados no manual.'},
  {id:'ram-16-ddr5',category:'ram',name:'Teclabs RAM 16 GB D5',price:389.9,icon:'▤',short:'DDR5 • 4800 MT/s • 1 módulo',memoryType:'DDR5',modules:1,specs:{Tipo:'DDR5','Capacidade':'16 GB','Velocidade':'4800 MT/s','Módulos':'1 × 16 GB','Tensão':'1,1 V'},notes:'O entalhe físico é diferente do DDR4. Não pode ser instalado em uma placa DDR4.'},
  {id:'ssd-480',category:'storage',name:'Teclabs SSD 480',price:219.9,icon:'▱',short:'SSD SATA • 480 GB',specs:{Interface:'SATA III','Capacidade':'480 GB','Leitura':'até 550 MB/s','Formato':'2,5 polegadas'},notes:'Exige cabo SATA de dados e alimentação da fonte.'},
  {id:'nvme-500',category:'storage',name:'Teclabs NVMe 500',price:269.9,icon:'▱',short:'SSD M.2 NVMe • 500 GB',specs:{Interface:'PCIe 3.0 ×4','Capacidade':'500 GB','Leitura':'até 2500 MB/s','Formato':'M.2 2280'},notes:'Instalado diretamente no slot M.2 compatível da placa-mãe.'},
  {id:'gpu-basic',category:'gpu',name:'Teclabs Vision 4G',price:799.9,icon:'▰',short:'4 GB • PCIe x16 • 75 W',specs:{Memória:'4 GB GDDR6','Interface':'PCIe x16','Consumo':'75 W','Saídas':'HDMI e DisplayPort'},notes:'Opcional para o desafio atual porque os processadores disponíveis possuem vídeo integrado.'},
  {id:'cooler-box',category:'cooler',name:'Teclabs Air 95',price:99.9,icon:'✣',short:'Cooler a ar • 95 W',specs:{Tipo:'Ar','Capacidade térmica':'95 W','Conector':'CPU_FAN 4 pinos','Pasta térmica':'Incluída'},notes:'Compatibilidade depende do kit de fixação correspondente ao socket.'}
];

const state={category:'motherboard',selected:{},socketOpen:false,ramOpen:false,cpuInstalled:false,thermalPasteApplied:false,motherboardPowerConnected:false,ramInstalledSlots:{},storageInstalled:false,sataDataConnected:false,sataPowerConnected:false,coolerInstalled:false,coolerLatchOpen:false,coolerSecured:false,gpuInstalled:false,activePart:null,rotations:{},booted:false};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];

function renderCategories(){
  $('#categoryShelf').innerHTML=categories.map(c=>`<button class="category-card ${state.category===c.id?'active':''}" data-category="${c.id}"><b>${c.icon} ${c.name}</b><small>${c.desc}</small></button>`).join('');
  $$('.category-card').forEach(b=>b.onclick=()=>{state.category=b.dataset.category;renderCategories();renderProducts();});
}

function renderProducts(){
  const category=categories.find(c=>c.id===state.category); const list=products.filter(p=>p.category===state.category);
  $('#shelfTitle').textContent=category.name; $('#shelfCount').textContent=`${list.length} modelos disponíveis`;
  $('#productShelf').innerHTML=list.map(p=>`<article class="product-box"><div class="product-visual">${p.icon}</div><h4>${p.name}</h4><p>${p.short}</p><div class="product-price">${money.format(p.price)}</div><div class="product-actions"><button data-manual="${p.id}">Ver detalhes</button><button class="buy" data-buy="${p.id}" ${state.selected[p.category]?.id===p.id?'disabled':''}>${state.selected[p.category]?.id===p.id?'Escolhido':'Escolher'}</button></div></article>`).join('');
  $$('[data-manual]').forEach(b=>b.onclick=()=>openManual(b.dataset.manual));
  $$('[data-buy]').forEach(b=>b.onclick=()=>selectProduct(b.dataset.buy));
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
  if(board && p.category==='cpu' && ((board.id==='mb-h610'&&p.socket!=='LGA1700')||(board.id==='mb-a320'&&p.socket!=='AM4'))) toast('Atenção: o processador escolhido não é compatível com a placa-mãe.',true);
  if(board && p.category==='ram' && p.memoryType!=='DDR4') toast('Atenção: esta placa aceita DDR4; o módulo escolhido é DDR5.',true);
  renderProducts();renderSelected();updateBudget();
}

function totalUsed(){return Object.values(state.selected).reduce((s,p)=>s+p.price,0)}
function updateBudget(){const used=totalUsed();$('#budgetUsed').textContent=money.format(used);$('#budgetRemaining').textContent=money.format(BUDGET-used);$('#budgetProgress').style.width=`${Math.min(100,used/BUDGET*100)}%`;}
function renderSelected(){
  const list=Object.values(state.selected); $('#selectedList').innerHTML=list.length?list.map(p=>`<div class="selected-item"><b>${p.name}</b><small>${money.format(p.price)}</small><button data-remove="${p.category}" aria-label="Remover">×</button></div>`).join(''):'<p class="empty-message">Sua bancada ainda está vazia.</p>';
  $$('[data-remove]').forEach(b=>b.onclick=()=>{delete state.selected[b.dataset.remove];renderSelected();renderProducts();updateBudget();});
  $('#goBench').disabled=!(state.selected.motherboard&&state.selected.cpu&&state.selected.ram);
}

function switchView(view){
  $$('.view').forEach(v=>v.classList.remove('active')); $$('.step').forEach(s=>s.classList.toggle('active',s.dataset.view===view)); $(`#${view}View`).classList.add('active');
  if(view==='bench')renderBench(); if(view==='boot')renderBoot(); window.scrollTo({top:0,behavior:'smooth'});
}

function compatibility(){const b=state.selected.motherboard,c=state.selected.cpu,r=state.selected.ram;return {cpu:(b.id==='mb-h610'&&c.socket==='LGA1700')||(b.id==='mb-a320'&&c.socket==='AM4'),ram:r.memoryType==='DDR4'};}

function renderBench(){
  $('#benchBoardModel').textContent=state.selected.motherboard?.name.replace('Teclabs ','')||'EDU-H610M';
  const installed={cpu:state.cpuInstalled,storage:state.storageInstalled,cooler:state.coolerInstalled,gpu:state.gpuInstalled};
  const regularParts=[state.selected.cpu,state.selected.storage,state.selected.cooler,state.selected.gpu].filter(p=>p&&!installed[p.category]);
  const installedRamIds=Object.values(state.ramInstalledSlots);
  const ramParts=state.selected.ram?Array.from({length:state.selected.ram.modules||1},(_,i)=>({...state.selected.ram,instanceId:`${state.selected.ram.id}::${i+1}`,name:`${state.selected.ram.name} — módulo ${i+1}`})).filter(p=>!installedRamIds.includes(p.instanceId)):[];
  const parts=[...regularParts,...ramParts];
  $('#partsTray').innerHTML=parts.length?parts.map(p=>{const id=p.instanceId||p.id;return `<div class="draggable-part ${state.activePart===id?'selected':''} ${state.rotations[id]?'rotated':''}" draggable="true" data-part="${id}"><div class="part-shape ${p.category}">${p.category==='cpu'?'CPU':p.category==='ram'?'DDR4':p.category==='cooler'?'✣':p.category==='gpu'?'GPU':'SSD'}</div><b>${p.name}</b><button class="rotate-part" type="button" data-rotate="${id}">Girar ↻</button></div>`}).join(''):'<p class="empty-message">Todas as peças escolhidas foram instaladas.</p>';
  $$('.draggable-part').forEach(el=>{el.onclick=()=>{state.activePart=el.dataset.part;renderBench();highlightZones();};el.ondragstart=e=>{state.activePart=el.dataset.part;e.dataTransfer.setData('text/plain',el.dataset.part);highlightZones();};});
  $$('[data-rotate]').forEach(button=>button.onclick=e=>{e.stopPropagation();const id=button.dataset.rotate;state.activePart=id;state.rotations[id]=!state.rotations[id];renderBench();highlightZones();});
  ['cpuSocket','ramSlotA2','ramSlotB2','coolerMount','m2Slot','sataBay','pcieSlot'].forEach(id=>{const z=$('#'+id);z.ondragover=e=>e.preventDefault();z.ondrop=e=>{e.preventDefault();installPart(e.dataTransfer.getData('text/plain'),z.dataset.accept,z.dataset.storage,z.dataset.ramSlot)};z.onclick=()=>state.activePart&&installPart(state.activePart,z.dataset.accept,z.dataset.storage,z.dataset.ramSlot);});
  $('#cpuSocket').classList.toggle('open',state.socketOpen);$$('.ram-slot').forEach(slot=>slot.classList.toggle('open',state.ramOpen));
  ['cpuSocket','ramSlotA2','ramSlotB2','coolerMount','m2Slot','sataBay','pcieSlot'].forEach(id=>$('#'+id).querySelectorAll('.installed-part').forEach(x=>x.remove()));
  if(state.cpuInstalled)$('#cpuSocket').insertAdjacentHTML('beforeend','<div class="installed-part cpu">CPU</div>');
  Object.keys(state.ramInstalledSlots).forEach(slot=>$('#ramSlot'+slot).insertAdjacentHTML('beforeend','<div class="installed-part ram">RAM</div>'));
  $('#coolerMount').classList.toggle('active',state.cpuInstalled&&!state.coolerInstalled);
  $('#coolerMount').classList.toggle('latch-open',state.coolerLatchOpen);
  $('#openCoolerLatch').textContent=state.coolerSecured?'Cooler travado':state.coolerInstalled?'Fechar trava do cooler':state.coolerLatchOpen?'Fechar trava do suporte':'Abrir trava do cooler';
  $('#openCoolerLatch').disabled=state.coolerSecured;
  $('#applyThermalPaste').classList.toggle('used',state.thermalPasteApplied);
  $('#applyThermalPaste').querySelector('small').textContent=state.thermalPasteApplied?'Aplicada corretamente ✓':'Aplicar sobre a CPU';
  $('#connectBoardPower').classList.toggle('used',state.motherboardPowerConnected);
  $('#connectBoardPower').querySelector('small').textContent=state.motherboardPowerConnected?'Conectado ao ATX 24 pinos ✓':'Alimentação da placa-mãe';
  if(state.coolerInstalled){$('#coolerMount').classList.add('active');$('#coolerMount').insertAdjacentHTML('beforeend','<div class="installed-part cooler">✣</div>');}
  if(state.storageInstalled){const target=state.selected.storage.id.startsWith('nvme')?'m2Slot':'sataBay';$('#'+target).insertAdjacentHTML('beforeend','<div class="installed-part storage">SSD</div>');}
  const sataSelected=state.selected.storage&&!state.selected.storage.id.startsWith('nvme');
  $('#sataConnections').hidden=!sataSelected;
  $('#connectSataData').classList.toggle('connected',state.sataDataConnected);
  $('#connectSataData').textContent=state.sataDataConnected?'Cabo de dados conectado ✓':'Conectar cabo de dados';
  $('#connectSataPower').classList.toggle('connected',state.sataPowerConnected);
  $('#connectSataPower').textContent=state.sataPowerConnected?'Alimentação conectada ✓':'Conectar alimentação';
  if(state.gpuInstalled)$('#pcieSlot').insertAdjacentHTML('beforeend','<div class="installed-part gpu">GPU</div>');
  updateChecklist();
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
function updateChecklist(){const required=state.selected.ram?.modules||0,installed=Object.keys(state.ramInstalledSlots).length,ramDone=ramComplete()&&required>0;const sata=state.selected.storage&&!state.selected.storage.id.startsWith('nvme');const map={socket:state.socketOpen,cpu:state.cpuInstalled,'thermal-paste':state.thermalPasteApplied,'board-power':state.motherboardPowerConnected,'ram-open':state.ramOpen,ram:ramDone,storage:state.selected.storage?state.storageInstalled:true,'sata-data':!sata||state.sataDataConnected,'sata-power':!sata||state.sataPowerConnected,cooler:state.selected.cooler?state.coolerInstalled:true,'cooler-secured':state.selected.cooler?state.coolerSecured:true,gpu:state.selected.gpu?state.gpuInstalled:true};Object.entries(map).forEach(([k,v])=>$(`[data-check="${k}"]`).classList.toggle('done',v));$$('[data-check="sata-data"],[data-check="sata-power"]').forEach(el=>el.hidden=!sata);$('[data-check="ram"]').textContent=`Memórias instaladas (${installed}/${required})`;$('#testAssembly').disabled=!(state.cpuInstalled&&state.thermalPasteApplied&&state.motherboardPowerConnected&&ramDone&&(!state.selected.storage||state.storageInstalled)&&(!sata||(state.sataDataConnected&&state.sataPowerConnected))&&(!state.selected.cooler||state.coolerSecured)&&(!state.selected.gpu||state.gpuInstalled));}

function renderBoot(){state.booted=false;$('#pcCase').classList.remove('running');$('#monitorScreen').className='monitor-screen';$('#monitorScreen').innerHTML='<span>Pressione o botão de energia</span>';}
function powerOn(){if(state.booted)return;state.booted=true;$('#pcCase').classList.add('running');const screen=$('#monitorScreen');screen.innerHTML='<span>TECLABS UEFI<br><br>Executando POST...</span>';setTimeout(()=>{const comp=compatibility();if(state.cpuInstalled&&ramComplete()&&comp.cpu&&comp.ram){screen.classList.add('success');screen.innerHTML='<span>TECLABS UEFI<br><br>CPU detectada ✓<br>Memórias detectadas ✓<br><br>Montagem inicial aprovada!</span>';$('#bootReport').innerHTML='<span class="eyebrow">MISSÃO CONCLUÍDA</span><h2>O computador passou pelo primeiro teste.</h2><p>Você escolheu componentes compatíveis e instalou a quantidade correta de módulos de memória. Nas próximas versões entraremos com pasta térmica, fonte, cabos e diagnóstico por bipes.</p>';}else{screen.classList.add('error');screen.innerHTML='<span>FALHA NO POST<br><br>Componente não detectado</span>';$('#bootReport').innerHTML='<span class="eyebrow">DIAGNÓSTICO NECESSÁRIO</span><h2>O computador não completou o POST.</h2><p>Dica: volte à bancada, confira a compatibilidade e verifique se todos os módulos do kit foram instalados.</p>'; }},1500);}

function toast(message,error=false){const t=$('#toast');t.textContent=message;t.className=`toast show ${error?'error':''}`;clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),3500);}
function reset(){Object.assign(state,{category:'motherboard',selected:{},socketOpen:false,ramOpen:false,cpuInstalled:false,thermalPasteApplied:false,motherboardPowerConnected:false,ramInstalledSlots:{},storageInstalled:false,sataDataConnected:false,sataPowerConnected:false,coolerInstalled:false,coolerLatchOpen:false,coolerSecured:false,gpuInstalled:false,activePart:null,rotations:{},booted:false});renderCategories();renderProducts();renderSelected();updateBudget();switchView('store');toast('Laboratório reiniciado.');}

$('#closeManual').onclick=()=>$('#manualDialog').close();$('#goBench').onclick=()=>switchView('bench');$('#openSocket').onclick=()=>{state.socketOpen=!state.socketOpen;toast(state.socketOpen?'Socket aberto. Alinhe o triângulo do processador.':'Socket fechado.');renderBench();};$('#openRam').onclick=()=>{state.ramOpen=!state.ramOpen;toast(state.ramOpen?'Travas dos dois slots de memória abertas.':'Travas das memórias fechadas.');renderBench();};$('#testAssembly').onclick=()=>switchView('boot');$('#powerButton').onclick=powerOn;$('#resetButton').onclick=reset;$('#themeToggle').onclick=()=>{const light=document.documentElement.dataset.theme==='light';document.documentElement.dataset.theme=light?'dark':'light';$('#themeToggle').textContent=light?'☾':'☀';};$$('.step').forEach(s=>s.onclick=()=>{if(s.dataset.view==='bench'&&!state.selected.motherboard)return toast('Escolha as peças antes de ir para a bancada.',true);if(s.dataset.view==='boot'&&!(state.cpuInstalled&&ramComplete()))return toast('Instale todos os módulos do kit antes do teste.',true);switchView(s.dataset.view);});

$('#openCoolerLatch').onclick=()=>{if(!state.cpuInstalled)return toast('Instale o processador antes de preparar o suporte do cooler.',true);if(state.coolerInstalled&&state.coolerLatchOpen){state.coolerLatchOpen=false;state.coolerSecured=true;toast('Trava do cooler fechada. Cooler fixado corretamente.');}else if(!state.coolerInstalled){state.coolerLatchOpen=!state.coolerLatchOpen;toast(state.coolerLatchOpen?'Trava do suporte aberta. Posicione o cooler com o cabo voltado para CPU_FAN.':'Trava do suporte fechada.');}renderBench();};
$('#connectSataData').onclick=()=>{if(!state.storageInstalled)return toast('Instale o SSD SATA na baia antes de conectar o cabo de dados.',true);state.sataDataConnected=!state.sataDataConnected;toast(state.sataDataConnected?'Cabo SATA ligado à placa-mãe e ao SSD.':'Cabo SATA desconectado.');renderBench();};
$('#connectSataPower').onclick=()=>{if(!state.storageInstalled)return toast('Instale o SSD SATA na baia antes de conectar a alimentação.',true);state.sataPowerConnected=!state.sataPowerConnected;toast(state.sataPowerConnected?'Cabo de alimentação da fonte conectado ao SSD.':'Alimentação do SSD desconectada.');renderBench();};
$('#applyThermalPaste').onclick=()=>{if(!state.cpuInstalled)return toast('Instale e trave o processador no socket antes de aplicar a pasta térmica. Aplicá-la antes pode sujar os contatos.',true);if(state.coolerInstalled)return toast('O cooler já está instalado. Remova-o antes de reaplicar a pasta térmica.',true);state.thermalPasteApplied=true;toast('Pasta térmica aplicada sobre a CPU. Agora abra o suporte e instale o cooler.');renderBench();};
$('#connectBoardPower').onclick=()=>{state.motherboardPowerConnected=!state.motherboardPowerConnected;toast(state.motherboardPowerConnected?'Cabo ATX de 24 pinos conectado à placa-mãe.':'Cabo ATX desconectado.');renderBench();};

renderCategories();renderProducts();renderSelected();updateBudget();
