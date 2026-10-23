/* Logica deterministica, nessuna chiamata AI, nessun salvataggio sul server. */
(() => {
  'use strict';
  const C=window.SALES_CONFIG;
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state={step:'home',mode:null,profile:{},screen:{},answers:{}};
  const pages=['home','profile','questions','result'];
  function show(page){state.step=page;pages.forEach(p=>$(p).classList.toggle('hidden',p!==page));$('bar').style.width=({home:0,profile:33,questions:66,result:100}[page])+'%';$('resetBtn').classList.toggle('hidden',page==='home');$('backBtn').classList.toggle('hidden',page==='home');window.scrollTo(0,0);}
  $('resetBtn').onclick=()=>location.reload();
  $('backBtn').onclick=()=>show(state.step==='result'?'questions':state.step==='questions'?'profile':'home');
  document.querySelectorAll('[data-mode]').forEach(btn=>btn.onclick=()=>{state.mode=btn.dataset.mode;$('contextLabel').textContent=state.mode==='known'?'Problema / esigenza che conosci già':'Quello che sai già del cliente';show('profile');});
  $('questionsBtn').onclick=()=>{
    const company=$('company').value.trim(), sector=$('sector').value.trim();
    if(!company||!sector){alert('Inserisci almeno nome azienda e settore.');return;}
    state.profile={company,sector,business:$('business').value,employees:$('employees').value,maturity:$('maturity').value,context:$('context').value.trim()};
    renderScreen();show('questions');
  };
  function optionsHTML(options,value){return '<option value="">Seleziona una risposta</option>'+options.map((o,i)=>`<option value="${i}" ${value===String(i)?'selected':''}>${esc(o[0])}</option>`).join('');}
  function renderScreen(){
    $('questionList').innerHTML='<h2>1. Individua le aree di interesse</h2><p class="hint">Seleziona una risposta per ogni area. Il sistema approfondisce soltanto le aree in cui emerge un bisogno.</p>'+C.areas.map((area,i)=>`<div class="q"><div class="qn">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(area.screen)}</h3><p>${esc(area.title)}</p><div class="choice"><select aria-label="${esc(area.title)}" data-screen="${esc(area.id)}">${optionsHTML(C.screenOptions,state.screen[area.id])}</select></div></div></div>`).join('');
    document.querySelectorAll('[data-screen]').forEach(el=>el.onchange=()=>{state.screen[el.dataset.screen]=el.value;renderDetail();});renderDetail();
  }
  function renderDetail(){
    const selected=C.areas.filter(a=>C.screenOptions[Number(state.screen[a.id])]?.[1]>0);
    const container=$('detailQuestions');
    if(!selected.length){container.innerHTML='<div class="notice">Seleziona una o più aree con un bisogno reale per ricevere domande mirate. Se nessuna area presenta problemi, il risultato sarà “nessuna soluzione prioritaria”.</div>';return;}
    container.innerHTML='<h2>2. Approfondisci le esigenze emerse</h2><p class="hint">Le domande sono specifiche per le aree selezionate. Puoi lasciare una risposta vuota se non la conosci.</p>'+selected.map(area=>`<div class="related"><h3>${esc(area.title)}</h3>${area.details.map(q=>`<label style="margin-top:16px">${esc(q.title)}<select data-detail="${esc(q.id)}">${optionsHTML(q.options,state.answers[q.id])}</select></label>`).join('')}</div>`).join('');
    document.querySelectorAll('[data-detail]').forEach(el=>el.onchange=()=>{state.answers[el.dataset.detail]=el.value;});
  }
  function rank(){
    return C.areas.map(area=>{
      const screenIndex=state.screen[area.id];const primary=screenIndex===''||screenIndex===undefined?null:C.screenOptions[Number(screenIndex)]?.[1];
      const detailAnswers=area.details.map(q=>({q,index:state.answers[q.id]})).filter(item=>item.index!==undefined&&item.index!=='');
      const detailScore=detailAnswers.reduce((n,{q,index})=>n+q.options[Number(index)][1],0);
      const score=(primary||0)+detailScore;const max=5+4*area.details.length;
      const percent=Math.round(score/max*100);
      const complete=(primary!==null?1:0)+detailAnswers.length;
      const evidence=[...(primary>0?[area.title]:[]),...detailAnswers.filter(({q,index})=>q.options[Number(index)][1]>0).map(({q})=>q.title)];
      return {...C.services.find(s=>s.id===area.id),score,percent,complete,maxQuestions:1+area.details.length,evidence};
    }).sort((a,b)=>b.score-a.score||b.complete-a.complete||a.name.localeCompare(b.name));
  }
  $('analyzeBtn').onclick=()=>{
    const ranking=rank(),best=ranking[0],valid=best&&best.score>=5;const primary=valid?best:null;
    $('confidence').textContent=valid?(best.complete<2?'DA APPROFONDIRE':best.percent>=75?'PERTINENZA ALTA':'SOLUZIONE DA VALUTARE'):'NESSUN FIT CERTO';
    $('productName').textContent=primary?primary.name:'Nessun servizio prioritario';
    $('reason').textContent=primary?`${primary.summary} La proposta è coerente con le esigenze selezionate per ${state.profile.company}. Punteggio indicativo: ${primary.percent}% (${primary.score} su ${5+4*2} punti possibili).`:'Le risposte non evidenziano ancora una necessità sufficientemente chiara per raccomandare un servizio a catalogo. Approfondire il contesto prima di proporre un progetto custom.';
    $('signals').innerHTML=primary?primary.evidence.map(x=>`<span class="signal">✓ ${esc(x)}</span>`).join(''):'<span class="signal">Informazioni insufficienti o nessuna priorità emersa</span>';
    $('siteLink').innerHTML=primary&&primary.url?`<a class="link-button" href="${esc(primary.url)}" target="_blank" rel="noopener noreferrer">Apri il sito ufficiale ↗</a>`:primary?'<span class="hint">Sito prodotto non ancora disponibile</span>':'';
    $('pitch').textContent=primary?primary.pitch:'Verificare con il cliente eventuali criticità non ancora considerate nel questionario.';
    $('nextSteps').innerHTML=(primary?primary.steps:['Raccogliere dettagli sul problema principale','Verificare se esiste una soluzione a catalogo','Solo in mancanza di un fit reale, valutare un progetto custom']).map(s=>`<li>${esc(s)}</li>`).join('');
    const alternatives=ranking.filter(s=>s.id!==primary?.id&&s.score>=5).slice(0,2);
    $('alternatives').innerHTML=alternatives.length?alternatives.map(s=>`<div class="alt-row"><strong>${esc(s.name)} (${s.percent}%)</strong><span>${esc(s.summary)} ${s.url?`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Visita sito ↗</a>`:''}</span></div>`).join(''):'<p class="hint">Nessun servizio complementare con segnali sufficienti.</p>';
    show('result');
  };
  function bindMics(){document.querySelectorAll('.mic').forEach(btn=>btn.onclick=e=>{e.preventDefault();const R=window.SpeechRecognition||window.webkitSpeechRecognition;if(!R){alert('Dettatura non disponibile in questo browser.');return;}const target=$(btn.dataset.target),r=new R();r.lang='it-IT';r.onresult=ev=>{target.value+=(target.value?' ':'')+ev.results[0][0].transcript;};r.onerror=()=>alert('Trascrizione non riuscita');r.onend=()=>{btn.textContent='🎙 Detta';btn.classList.remove('on');};btn.textContent='● Ascolto';btn.classList.add('on');r.start();});}
  bindMics();show('home');
})();
