const STORAGE_KEY = 'ticking.prototype.v1';
const CURRENT_VERSION = '0.3.4';

const seed = {
  settings: { version: CURRENT_VERSION },
  dailySites: [
    { name: 'Fratello', url: 'https://www.fratellowatches.com/' },
    { name: 'Monochrome', url: 'https://monochrome-watches.com/' },
    { name: 'Worn & Wound', url: 'https://wornandwound.com/' },
    { name: 'Hodinkee', url: 'https://www.hodinkee.com/' },
    { name: 'Time+Tide', url: 'https://timeandtidewatches.com/' }
  ],
  brands: [
    { id: 'b1', name: 'Serica', country: 'France', website: 'https://www.serica-watches.com/', status: 'Follow' },
    { id: 'b2', name: 'Traska', country: 'United States', website: 'https://www.traskawatch.com/', status: 'Interesting' },
    { id: 'b3', name: 'Sinn', country: 'Germany', website: 'https://www.sinn.de/en/', status: 'Follow' }
  ],
  watches: [
    { id: 'w1', brandId: 'b1', model: '6190', variant: 'Commando', referenceNumber: '', type: ['Field'], complications: ['Time only'], movement: 'Soprod', diameter: 37.7, thickness: 10.4, lugToLug: null, lugWidth: null, waterResistance: 200, material: 'Stainless Steel', crystal: 'Sapphire', price: 990, currency: 'EUR', statuses: ['Interested', 'See in Person'], tags: ['Field', 'Design reference'], note: 'Strong proportions and restrained typography.', officialUrl: 'https://www.serica-watches.com/' },
    { id: 'w2', brandId: 'b2', model: 'Venturer', variant: 'Bottle Green', referenceNumber: '', type: ['GMT', 'Field'], complications: ['GMT', 'Date'], movement: 'Miyota 9075', diameter: 38.5, thickness: 10, lugToLug: 46, lugWidth: 20, waterResistance: 150, material: 'Stainless Steel', crystal: 'Sapphire', price: 720, currency: 'USD', statuses: ['Consider Buying', 'Watching'], tags: ['GMT', 'Under $2,000'], note: 'Excellent everyday proportions. Compare bracelet and clasp in person.', officialUrl: 'https://www.traskawatch.com/' },
    { id: 'w3', brandId: 'b3', model: '556 I', variant: 'Black', referenceNumber: '', type: ['Pilot', 'Tool'], complications: ['Date'], movement: 'Sellita SW200-1', diameter: 38.5, thickness: 11, lugToLug: 45.7, lugWidth: 20, waterResistance: 200, material: 'Stainless Steel', crystal: 'Sapphire', price: 1990, currency: 'CAD', statuses: ['Owned'], tags: ['Tool watch'], note: 'Collection anchor.', officialUrl: 'https://www.sinn.de/en/' }
  ],
  myWatches: [
    { id: 'mw1', watchId: 'w3', purchaseDate: '2025-03-11', purchasePrice: 1750, currency: 'CAD', seller: 'Local dealer', box: true, papers: true, currentStrap: 'Bracelet', notes: 'Keeps excellent time.' }
  ],
  releases: [
    { id: 'r1', brandId: 'b2', title: 'Venturer GMT refresh', announcementDate: '2026-08-12', saleDate: '2026-08-22', type: 'Collection refresh', price: 720, currency: 'USD', status: 'Watching' },
    { id: 'r2', brandId: 'b1', title: 'New 6190 variant', announcementDate: '2026-08-09', saleDate: '2026-09-05', type: 'New colourway', price: 990, currency: 'EUR', status: 'Interested' }
  ],
  inbox: [
    { id: 'i1', type: 'Link', title: 'Hands-on with a compact GMT', url: 'https://example.com/compact-gmt', source: 'example.com', savedAt: '2026-08-16T13:24:00-04:00', status: 'Interested', tags: ['GMT'], note: '' },
    { id: 'i2', type: 'Reference', title: 'Interesting pilot handset', url: 'https://example.com/pilot-hands', source: 'example.com', savedAt: '2026-08-15T20:10:00-04:00', status: '', tags: ['Hands', 'Design reference'], note: 'Worth revisiting for legibility.' }
  ],
  library: [
    { id: 'l1', type: 'Article', title: 'Why 38 mm tool watches work so well', url: 'https://example.com/38mm-tool-watches', source: 'example.com', savedAt: '2026-08-14T09:15:00-04:00', readStatus: 'Unread', tags: ['Proportions', 'Tool watch'], articleState: 'ready' },
    { id: 'l2', type: 'Snippet', title: 'Miyota 9075 notes', url: 'https://example.com/miyota-9075', source: 'example.com', savedAt: '2026-08-13T18:30:00-04:00', readStatus: '', tags: ['GMT', 'Movement'], selectedText: 'Traveller GMT functionality is the key reason this movement is interesting.' }
  ],
  collections: [
    { id: 'c1', name: 'Possible Next Watch', description: 'Serious candidates worth revisiting.', itemCount: 4 },
    { id: 'c2', name: 'Great Dial Designs', description: 'Typography, colour and layout references.', itemCount: 11 },
    { id: 'c3', name: 'Tanager Research', description: 'Useful references for a utilitarian, design-forward tool watch.', itemCount: 18 }
  ],
  reminders: [
    { id: 'rm1', date: '2026-08-22', text: 'Check Venturer availability and Canadian landed cost.', target: 'Traska Venturer', done: false },
    { id: 'rm2', date: '2026-10-18', text: 'Try the Serica 6190 in person.', target: 'Toronto watch show', done: false }
  ],
  lookup: {
    statuses: ['Interested', 'Researching', 'Consider Buying', 'See in Person', 'Watching', 'Owned', 'Formerly Owned', 'Not for Me'],
    watchTypes: ['Diver', 'Field', 'Pilot', 'Dress', 'GMT', 'Chronograph', 'Tool', 'Sports'],
    complications: ['Date', 'Day', 'GMT', 'Chronograph', 'Moonphase', 'Power Reserve', 'World Time', 'Alarm', 'Time only'],
    materials: ['Stainless Steel', 'Titanium', 'Bronze', 'Ceramic', 'Carbon'],
    crystals: ['Sapphire', 'Mineral', 'Hesalite', 'Acrylic'],
    movements: ['Miyota 9075', 'Miyota 9015', 'Sellita SW200-1', 'Sellita SW300-1', 'Sellita SW330-2', 'ETA 2824-2', 'Soprod'],
    tags: ['GMT', 'Field', 'Pilot', 'Ceramic', 'Great handset', 'Design reference', 'Tool watch', 'Under $2,000', 'Movement', 'Proportions']
  }
};

function clone(v) { return JSON.parse(JSON.stringify(v)); }
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(seed);
    const saved = JSON.parse(raw);
    const merged = {
      ...clone(seed),
      ...saved,
      settings: { ...(seed.settings || {}), ...(saved.settings || {}), version: CURRENT_VERSION },
      lookup: { ...clone(seed.lookup), ...(saved.lookup || {}) }
    };
    for (const key of ['dailySites','brands','watches','myWatches','releases','inbox','library','collections','reminders']) {
      if (!Array.isArray(merged[key])) merged[key] = clone(seed[key]);
    }
    return merged;
  } catch {
    return clone(seed);
  }
}
function saveLocalState() { state.settings.version = CURRENT_VERSION; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function saveState() {
  saveLocalState();
  queueCloudSave();
}
function mergeIncomingState(saved) {
  const merged = {
    ...clone(seed),
    ...(saved || {}),
    settings: { ...(seed.settings || {}), ...((saved || {}).settings || {}), version: CURRENT_VERSION },
    lookup: { ...clone(seed.lookup), ...((saved || {}).lookup || {}) }
  };
  for (const key of ['dailySites','brands','watches','myWatches','releases','inbox','library','collections','reminders']) {
    if (!Array.isArray(merged[key])) merged[key] = clone(seed[key]);
  }
  return merged;
}
let state = loadState();

const CLOUD_CONFIG_KEY = 'ticking.supabase.config';
const DEFAULT_CLOUD_CONFIG = {
  url: 'https://appesztafatypbxzdunr.supabase.co',
  key: 'sb_publishable_70RugEcKQxZWUa5eQfmyeg_y7AkVz9V'
};
const MEDIA_BUCKET = 'ticking-media';
const cloud = {
  client: null,
  user: null,
  syncTimer: null,
  lastSync: null,
  lastError: null,
  initialized: false,
};

function getCloudConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY) || '{}');
    return { ...DEFAULT_CLOUD_CONFIG, ...saved };
  } catch { return { ...DEFAULT_CLOUD_CONFIG }; }
}
function setCloudConfig(url, key) {
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify({ url: url.trim().replace(/\/$/,''), key: key.trim() }));
}
function cloudConfigured() {
  const cfg = getCloudConfig();
  return !!(cfg.url && cfg.key);
}
function cloudReady() { return !!(cloud.client && cloud.user); }
function closeCloudDialog() {
  const d = document.getElementById('cloudDialog');
  if (d?.open) d.close();
}
function cloudLabel() {
  if (!cloudConfigured()) return 'Cloud: Local';
  if (!cloud.client) return 'Cloud: Offline';
  if (!cloud.user) return 'Cloud: Sign in';
  if (cloud.lastError) return 'Cloud: Error';
  return cloud.lastSync ? 'Cloud: Synced' : 'Cloud: Connected';
}
function updateCloudUI(message='') {
  const statusBtn = document.getElementById('cloudStatus');
  if (statusBtn) statusBtn.textContent = cloudLabel();
  const mobileStatusBtn = document.getElementById('cloudStatusMobile');
  if (mobileStatusBtn) mobileStatusBtn.textContent = cloud.user ? 'Cloud ✓' : 'Cloud';
  const loggedOut = document.getElementById('cloudAuthLoggedOut');
  const loggedIn = document.getElementById('cloudAuthLoggedIn');
  loggedOut?.classList.toggle('hidden', !!cloud.user);
  loggedIn?.classList.toggle('hidden', !cloud.user);
  const email = document.getElementById('cloudAccountEmail');
  if (email) email.textContent = cloud.user?.email || '';
  const sync = document.getElementById('cloudLastSync');
  if (sync) sync.textContent = cloud.lastSync ? `Last synced ${new Intl.DateTimeFormat('en-CA',{hour:'numeric',minute:'2-digit',month:'short',day:'numeric'}).format(cloud.lastSync)}` : 'Not synced yet';
  const msg = document.getElementById('cloudMessage');
  if (msg) msg.textContent = message || (cloud.user ? 'Your Ticking data is private to this signed-in account.' : cloudConfigured() ? 'Connection saved. Sign in to enable private cloud sync.' : 'Ticking is currently using local browser storage.');
}
async function initCloud({ load=true }={}) {
  cloud.initialized = true;
  const cfg = getCloudConfig();
  if (!cfg.url || !cfg.key || !window.supabase?.createClient) { updateCloudUI(); return false; }
  try {
    cloud.client = window.supabase.createClient(cfg.url, cfg.key, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    const { data, error } = await cloud.client.auth.getUser();
    if (error && !String(error.message||'').toLowerCase().includes('session')) throw error;
    cloud.user = data?.user || null;
    cloud.client.auth.onAuthStateChange((event, session) => {
      cloud.user = session?.user || null;
      updateCloudUI();
      if (cloud.user && event === 'SIGNED_IN') closeCloudDialog();
      if (cloud.user && event !== 'INITIAL_SESSION') setTimeout(()=>loadCloudState({ createIfMissing:true, quiet:true }), 0);
    });
    updateCloudUI();
    if (load && cloud.user) await loadCloudState({ createIfMissing:true, quiet:true });
    return true;
  } catch (error) {
    cloud.lastError = error;
    cloud.client = null; cloud.user = null;
    updateCloudUI(`Cloud connection error: ${error.message || error}`);
    return false;
  }
}
function queueCloudSave() {
  if (!cloudReady()) return;
  clearTimeout(cloud.syncTimer);
  cloud.syncTimer = setTimeout(()=>cloudSaveNow({ quiet:true }), 650);
}
async function cloudSaveNow({ quiet=false }={}) {
  if (!cloudReady()) return false;
  try {
    const payload = { user_id: cloud.user.id, data: state, updated_at: new Date().toISOString() };
    const { error } = await cloud.client.from('app_state').upsert(payload, { onConflict:'user_id' });
    if (error) throw error;
    cloud.lastSync = new Date(); cloud.lastError = null; updateCloudUI(quiet ? '' : 'Synced to Supabase.');
    return true;
  } catch (error) {
    cloud.lastError = error; updateCloudUI(`Sync failed: ${error.message || error}`);
    if (!quiet) alert(`Ticking could not sync to Supabase.\n\n${error.message || error}`);
    return false;
  }
}
async function loadCloudState({ createIfMissing=false, quiet=false }={}) {
  if (!cloudReady()) return false;
  try {
    const { data, error } = await cloud.client.from('app_state').select('data,updated_at').eq('user_id', cloud.user.id).maybeSingle();
    if (error) throw error;
    if (data?.data) {
      state = mergeIncomingState(data.data);
      saveLocalState();
      cloud.lastSync = data.updated_at ? new Date(data.updated_at) : new Date();
      render(); updateCloudUI(quiet ? '' : 'Loaded the cloud copy.');
      return true;
    }
    if (createIfMissing) return await cloudSaveNow({ quiet });
    updateCloudUI('No cloud copy exists yet.');
    return false;
  } catch (error) {
    cloud.lastError = error; updateCloudUI(`Cloud load failed: ${error.message || error}`);
    if (!quiet) alert(`Ticking could not load its Supabase data.\n\n${error.message || error}`);
    return false;
  }
}
async function signInCloud() {
  if (!cloud.client) { alert('Save your Supabase Project URL and publishable key first.'); return; }
  const email = document.getElementById('cloudEmail').value.trim();
  const password = document.getElementById('cloudPassword').value;
  if (!email || !password) { alert('Enter your email and password.'); return; }
  const { data, error } = await cloud.client.auth.signInWithPassword({ email, password });
  if (error) { updateCloudUI(`Sign-in failed: ${error.message}`); return; }
  cloud.user = data.user; updateCloudUI('Signed in. Loading your Ticking data…');
  document.getElementById('cloudPassword').value = '';
  closeCloudDialog();
  await loadCloudState({ createIfMissing:true, quiet:true });
}
async function signUpCloud() {
  if (!cloud.client) { alert('Save your Supabase Project URL and publishable key first.'); return; }
  const email = document.getElementById('cloudEmail').value.trim();
  const password = document.getElementById('cloudPassword').value;
  if (!email || !password) { alert('Enter an email and password.'); return; }
  const { data, error } = await cloud.client.auth.signUp({ email, password });
  if (error) { updateCloudUI(`Account creation failed: ${error.message}`); return; }
  if (data.session) {
    cloud.user = data.user; updateCloudUI('Account created and signed in.');
    document.getElementById('cloudPassword').value = '';
    closeCloudDialog();
    await loadCloudState({ createIfMissing:true, quiet:true });
  } else updateCloudUI('Account created. Check your email to confirm it, then sign in.');
}
async function signOutCloud() {
  if (cloud.client) await cloud.client.auth.signOut();
  cloud.user = null; cloud.lastSync = null; updateCloudUI('Signed out. Local browser data is still available.');
}
async function compressImageFile(file, { maxWidth=2200, quality=.84 }={}) {
  if (!file?.type?.startsWith('image/')) return file;
  if (file.type === 'image/gif' || file.type === 'image/svg+xml') return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxWidth / bitmap.width);
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
    canvas.getContext('2d').drawImage(bitmap, 0, 0, width, height); bitmap.close?.();
    const blob = await new Promise(resolve=>canvas.toBlob(resolve, 'image/webp', quality));
    return blob || file;
  } catch { return file; }
}
async function uploadMedia(file, folder='watch-images') {
  if (!cloudReady()) throw new Error('Ticking Cloud must be connected and signed in before uploading images.');
  const compact = await compressImageFile(file);
  const ext = compact.type === 'image/webp' ? 'webp' : (file.name.split('.').pop() || 'bin').toLowerCase();
  const safeBase = (file.name.replace(/\.[^.]+$/,'') || 'image').replace(/[^a-z0-9_-]+/gi,'-').slice(0,80);
  const path = `${cloud.user.id}/${folder}/${Date.now()}-${safeBase}.${ext}`;
  const { error } = await cloud.client.storage.from(MEDIA_BUCKET).upload(path, compact, { contentType: compact.type || file.type, upsert:false, cacheControl:'3600' });
  if (error) throw error;
  return path;
}
async function hydrateMediaImages(root=document) {
  if (!cloudReady()) return;
  const nodes = [...root.querySelectorAll('img[data-media-path]:not([data-media-hydrated])')];
  await Promise.all(nodes.map(async img => {
    img.dataset.mediaHydrated = '1';
    const { data, error } = await cloud.client.storage.from(MEDIA_BUCKET).download(img.dataset.mediaPath);
    if (error || !data) { img.classList.add('media-error'); return; }
    img.src = URL.createObjectURL(data);
  }));
}
async function processArticleCapture(item) {
  if (!item || item.type !== 'Article' || !item.url) return;
  if (!cloudReady()) { item.articleState = 'pending'; saveState(); return; }
  item.articleState = 'processing'; item.articleError = ''; saveState(); render();
  try {
    const { data, error } = await cloud.client.functions.invoke('capture-article', { body:{ url:item.url } });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    Object.assign(item, {
      title: data.title || item.title,
      url: data.sourceUrl || item.url,
      source: data.siteName || item.source || sourceFromUrl(item.url),
      readerHtml: data.html || '',
      readerText: data.textContent || '',
      readerByline: data.byline || '',
      readerExcerpt: data.excerpt || '',
      readerPublishedTime: data.publishedTime || '',
      articleState: 'ready',
      articleError: ''
    });
    saveState(); render();
  } catch (error) {
    item.articleState = 'error'; item.articleError = error.message || String(error); saveState(); render();
  }
}
function setupCloudUI() {
  const d = document.getElementById('cloudDialog');
  const openCloudDialog = ()=>{
    const cfg=getCloudConfig(); document.getElementById('cloudUrl').value=cfg.url||''; document.getElementById('cloudKey').value=cfg.key||''; updateCloudUI(); d.showModal();
  };
  document.getElementById('cloudStatus')?.addEventListener('click',openCloudDialog);
  document.getElementById('cloudStatusMobile')?.addEventListener('click',openCloudDialog);
  document.getElementById('saveCloudConfig')?.addEventListener('click',async()=>{
    setCloudConfig(document.getElementById('cloudUrl').value, document.getElementById('cloudKey').value);
    cloud.client=null; cloud.user=null; updateCloudUI('Connecting…'); await initCloud({load:true});
  });
  document.getElementById('cloudSignIn')?.addEventListener('click',signInCloud);
  document.getElementById('cloudSignUp')?.addEventListener('click',signUpCloud);
  document.getElementById('cloudSignOut')?.addEventListener('click',signOutCloud);
  document.getElementById('cloudSync')?.addEventListener('click',()=>cloudSaveNow({quiet:false}));
  document.getElementById('cloudLoad')?.addEventListener('click',async()=>{
    if (confirm('Load the Supabase copy and replace this browser’s current Ticking data?')) await loadCloudState({quiet:false});
  });
}

let currentView = 'Home';
let currentCaptureType = 'Link';
let editorSelections = { types: new Set(), complications: new Set(), statuses: new Set() };

const navItems = ['Home', 'Inbox', 'My Watches', 'Watches', 'Brands', 'Releases', 'Library', 'Collections', 'Reminders'];
const nav = document.getElementById('nav');
const content = document.getElementById('content');
const search = document.getElementById('globalSearch');
const captureDialog = document.getElementById('captureDialog');
const captureForm = document.getElementById('captureForm');
const watchEditorDialog = document.getElementById('watchEditorDialog');
const watchEditorForm = document.getElementById('watchEditorForm');
const ownershipDialog = document.getElementById('ownershipDialog');
const ownershipForm = document.getElementById('ownershipForm');

function uid(prefix) { return `${prefix}${Date.now()}${Math.random().toString(36).slice(2,7)}`; }
function brandName(id) { return state.brands.find(b => b.id === id)?.name || 'Unknown brand'; }
function brandByName(name='') { return state.brands.find(b => b.name.trim().toLowerCase() === name.trim().toLowerCase()); }
function watchLabel(w) { return `${brandName(w.brandId)} ${w.model}${w.variant ? ` ${w.variant}` : ''}`.trim(); }
function watchByLabel(label='') { return state.watches.find(w => watchLabel(w).toLowerCase() === label.trim().toLowerCase()); }
function formatPrice(v, currency) { return Number(v) > 0 ? new Intl.NumberFormat('en-CA', { style:'currency', currency: currency || 'CAD', maximumFractionDigits: 0 }).format(Number(v)) : '—'; }
function fmtDate(v) { if (!v) return '—'; return new Intl.DateTimeFormat('en-CA', { month:'short', day:'numeric', year:'numeric' }).format(new Date(v + (v.length === 10 ? 'T12:00:00' : ''))); }
function sourceFromUrl(url) { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; } }
function escapeHtml(s='') { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }
function numOrNull(value) { const n = Number(value); return value === '' || Number.isNaN(n) ? null : n; }
function normalizeUrl(raw='') { try { const u = new URL(raw); u.hash=''; return u.href.replace(/\/$/,'').toLowerCase(); } catch { return raw.trim().replace(/\/$/,'').toLowerCase(); } }
function addUnique(array, value) { if (value && !array.some(x => x.toLowerCase() === value.toLowerCase())) array.push(value); }
function splitTags(value='') { return [...new Set(value.split(',').map(x=>x.trim()).filter(Boolean))]; }
function watchGlyph(className='watch-glyph') {
  return `<svg viewBox="0 0 24 24" class="${className}" aria-hidden="true"><path d="M12 10v2.2l1.6 1m2.53-5.54-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/><circle cx="12" cy="12" r="6"/></svg>`;
}

function ensureBrand(name) {
  const clean = name.trim();
  if (!clean) return null;
  let brand = brandByName(clean);
  if (!brand) {
    brand = { id: uid('b'), name: clean, country: '', website: '', status: 'Interesting' };
    state.brands.push(brand);
  }
  return brand;
}

function renderNav() {
  nav.innerHTML = navItems.map(item => {
    const count = item === 'Inbox' ? state.inbox.length : item === 'Reminders' ? state.reminders.filter(r => !r.done).length : '';
    const short = item === 'My Watches' ? 'Mine' : item;
    return `<button data-view="${item}" data-short="${escapeHtml(short.slice(0,2))}" class="${currentView === item ? 'active' : ''}"><span>${item}</span><span class="count">${count}</span></button>`;
  }).join('');
  nav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { currentView = btn.dataset.view; search.value=''; render(); }));
}

function header(title, eyebrow='Ticking', action='') {
  return `<div class="page-head"><div><div class="eyebrow">${escapeHtml(eyebrow)}</div><h1>${escapeHtml(title)}</h1></div>${action}</div>`;
}
function watchCard(w) {
  if (!w) return '';
  return `<div class="card watch-card clickable" data-watch="${w.id}">
    <div class="watch-image">${w.heroImagePath ? `<img class="media-image" data-media-path="${escapeHtml(w.heroImagePath)}" alt="${escapeHtml(watchLabel(w))}" />` : watchGlyph('watch-glyph large')}</div>
    <div class="watch-body">
      <div class="kicker">${escapeHtml(brandName(w.brandId))}</div>
      <h3>${escapeHtml(w.model)}${w.variant ? ` · ${escapeHtml(w.variant)}` : ''}</h3>
      <div class="meta">${w.diameter || '—'} mm · ${escapeHtml(w.movement || 'Movement unknown')} · ${formatPrice(w.price, w.currency)}</div>
      <div class="pills">${(w.statuses||[]).slice(0,2).map(s=>`<span class="pill strong">${escapeHtml(s)}</span>`).join('')}${(w.tags||[]).slice(0,2).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join('')}</div>
    </div>
  </div>`;
}
function listRow(title, meta, actions='', attrs='') {
  return `<div class="list-row" ${attrs}><div><div class="title">${title}</div><div class="meta">${meta}</div></div><div class="list-actions">${actions}</div></div>`;
}

function renderHome() {
  const recent = [...state.inbox.map(x=>({...x, bucket:'Inbox'})), ...state.library.map(x=>({...x, bucket:'Library'}))].sort((a,b)=>new Date(b.savedAt)-new Date(a.savedAt)).slice(0,5);
  const upcoming = state.releases.slice().sort((a,b)=>(a.saleDate||'9999').localeCompare(b.saleDate||'9999')).slice(0,5);
  return `${header('Home','Your watch desk')}
    <section class="section">
      <div class="section-head"><h2>Daily sites</h2><span class="meta">Launch directly</span></div>
      <div class="site-strip">${state.dailySites.map(s=>`<a class="site-tile" href="${escapeHtml(s.url)}" target="_blank" rel="noreferrer"><span class="site-dot"></span>${escapeHtml(s.name)} ↗</a>`).join('')}</div>
    </section>

    <section class="section">
      <div class="section-head"><h2>My watches</h2><button class="button ghost" data-go="My Watches">View all</button></div>
      ${state.myWatches.length ? `<div class="watch-grid">${state.myWatches.map(m=>watchCard(state.watches.find(w=>w.id===m.watchId))).join('')}</div>` : '<div class="empty">No owned watches recorded yet.</div>'}
    </section>

    <section class="section">
      <div class="section-head"><h2>Needs attention</h2></div>
      <div class="grid three">
        <div class="card attention"><div class="kicker">Inbox</div><h3>${state.inbox.length} unprocessed item${state.inbox.length===1?'':'s'}</h3><div class="meta">Save first, organize later.</div></div>
        <div class="card attention"><div class="kicker">Reminders</div><h3>${state.reminders.filter(r=>!r.done).length} open</h3><div class="meta">Next: ${escapeHtml(state.reminders.find(r=>!r.done)?.text || 'Nothing due')}</div></div>
        <div class="card good"><div class="kicker">Watching</div><h3>${state.watches.filter(w=>(w.statuses||[]).includes('Watching')).length} watches</h3><div class="meta">Items you want to keep an eye on.</div></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Recent</h2></div>
      <div class="list">${recent.length ? recent.map(x=>listRow(escapeHtml(x.title), `${x.bucket} · ${escapeHtml(x.type)} · ${escapeHtml(x.source || sourceFromUrl(x.url))}`, `<button data-saved-bucket="${x.bucket}" data-saved-id="${x.id}">Open</button>`)).join('') : '<div class="empty">Nothing captured yet.</div>'}</div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Upcoming</h2></div>
      <div class="list">${upcoming.length ? upcoming.map(r=>listRow(escapeHtml(r.title), `${escapeHtml(brandName(r.brandId))} · ${fmtDate(r.saleDate)} · ${escapeHtml(r.type)}`)).join('') : '<div class="empty">No upcoming releases yet.</div>'}</div>
    </section>`;
}

function renderInbox() {
  if (!state.inbox.length) return `${header('Inbox','Capture')}<div class="empty">Inbox is clear.</div>`;
  return `${header('Inbox','Capture')}<div class="list">${state.inbox.map(item=>listRow(escapeHtml(item.title || item.url), `${escapeHtml(item.type)} · ${escapeHtml(item.source || sourceFromUrl(item.url))} · saved ${fmtDate(item.savedAt)}${item.articleState==='processing'?' · Processing Reader…':''}${item.articleState==='pending'?' · Reader pending':''}${item.articleState==='error'?' · Reader error':''}`, `<button data-inbox-action="keep" data-id="${item.id}">Keep</button><button data-inbox-action="open" data-id="${item.id}">Open</button><button data-inbox-action="discard" data-id="${item.id}">Discard</button>`, `data-saved-row="inbox" data-saved-row-id="${item.id}"`)).join('')}</div>`;
}

function renderMyWatches() {
  const owned = state.myWatches.map(m=>({ownership:m, watch:state.watches.find(w=>w.id===m.watchId)})).filter(x=>x.watch);
  const action = `<button class="button primary" data-go="Watches">Add from Watches</button>`;
  return `${header('My Watches','Collection',action)}${owned.length ? `<div class="watch-grid">${owned.map(x=>watchCard(x.watch)).join('')}</div>` : '<div class="empty">Open a watch record and choose “Add to My Watches.”</div>'}`;
}
function renderWatches() {
  const action = `<button class="button primary" data-new-watch>+ New Watch</button>`;
  return `${header('Watches','Research database',action)}${state.watches.length ? `<div class="watch-grid">${state.watches.map(watchCard).join('')}</div>` : '<div class="empty">No watches yet.</div>'}`;
}
function renderBrands() {
  return `${header('Brands','Research database')}<div class="grid three">${state.brands.map(b=>`<div class="card"><div class="kicker">${escapeHtml(b.country || 'Country not set')}</div><h3>${escapeHtml(b.name)}</h3><div class="meta">${escapeHtml(b.status || '')}</div><div class="pills"><span class="pill">${state.watches.filter(w=>w.brandId===b.id).length} watches</span><span class="pill">${state.releases.filter(r=>r.brandId===b.id).length} releases</span></div>${b.website ? `<p><a href="${escapeHtml(b.website)}" target="_blank" rel="noreferrer">Official site ↗</a></p>` : ''}</div>`).join('')}</div>`;
}
function renderReleases() {
  return `${header('Releases','Timeline')}<div class="list">${state.releases.slice().sort((a,b)=>(b.announcementDate||'').localeCompare(a.announcementDate||'')).map(r=>listRow(escapeHtml(r.title), `${escapeHtml(brandName(r.brandId))} · announced ${fmtDate(r.announcementDate)} · ${escapeHtml(r.type)} · ${formatPrice(r.price,r.currency)}`, `<button>${escapeHtml(r.status)}</button>`)).join('')}</div>`;
}
function renderLibrary() {
  return `${header('Library','Saved research')}<div class="list">${state.library.map(item=>listRow(escapeHtml(item.title), `${escapeHtml(item.type)} · ${escapeHtml(item.source || sourceFromUrl(item.url))}${item.readStatus ? ` · ${escapeHtml(item.readStatus)}`:''}${item.articleState==='processing'?' · Processing Reader…':''}${item.articleState==='pending'?' · Reader pending':''}${item.articleState==='error'?' · Reader error':''}${item.screenshotState==='pending'?' · Screenshot capture pending':''}`, `<button data-library-open="${item.id}">Open</button>`, `data-saved-row="library" data-saved-row-id="${item.id}"`)).join('')}</div>`;
}
function renderCollections() {
  return `${header('Collections','Research boards')}<div class="grid three">${state.collections.map(c=>`<div class="card"><div class="kicker">${c.itemCount} items</div><h3>${escapeHtml(c.name)}</h3><p class="meta">${escapeHtml(c.description)}</p></div>`).join('')}</div>`;
}
function renderReminders() {
  return `${header('Reminders','Watch nudges')}<div class="list">${state.reminders.map(r=>listRow(escapeHtml(r.text), `${fmtDate(r.date)} · ${escapeHtml(r.target)}`, `<button data-reminder="${r.id}">${r.done?'Reopen':'Done'}</button>`)).join('')}</div>`;
}

function renderSearch(q) {
  const needle = q.trim().toLowerCase();
  const watches = state.watches.filter(w => [brandName(w.brandId),w.model,w.variant,w.referenceNumber,w.movement,w.material,w.crystal,...(w.tags||[]),...(w.statuses||[]),...(w.type||[]),...(w.complications||[])].join(' ').toLowerCase().includes(needle));
  const saved = [...state.inbox, ...state.library].filter(x => [x.title,x.url,x.source,x.note,x.selectedText,...(x.tags||[])].join(' ').toLowerCase().includes(needle));
  const brands = state.brands.filter(b=>[b.name,b.country,b.status].join(' ').toLowerCase().includes(needle));
  const releases = state.releases.filter(r=>[r.title,brandName(r.brandId),r.type,r.status].join(' ').toLowerCase().includes(needle));
  return `${header(`Search: “${q}”`,'Universal search')}
  <section class="section"><div class="section-head"><h2>Watches</h2><span class="meta">${watches.length}</span></div>${watches.length?`<div class="watch-grid">${watches.map(watchCard).join('')}</div>`:'<div class="empty">No matching watches.</div>'}</section>
  <section class="section"><div class="section-head"><h2>Saved material</h2><span class="meta">${saved.length}</span></div>${saved.length?`<div class="list">${saved.map(x=>listRow(escapeHtml(x.title), `${escapeHtml(x.type)} · ${escapeHtml(x.source || sourceFromUrl(x.url))}`)).join('')}</div>`:'<div class="empty">No matching saved material.</div>'}</section>
  <section class="section"><div class="section-head"><h2>Brands & releases</h2><span class="meta">${brands.length + releases.length}</span></div><div class="list">${brands.map(b=>listRow(escapeHtml(b.name), `Brand · ${escapeHtml(b.country || 'Country not set')}`)).join('')}${releases.map(r=>listRow(escapeHtml(r.title), `Release · ${escapeHtml(brandName(r.brandId))} · ${escapeHtml(r.type)}`)).join('') || '<div class="empty">No matching brands or releases.</div>'}</div></section>`;
}

function render() {
  renderNav();
  const q = search.value;
  if (q.trim()) content.innerHTML = renderSearch(q);
  else {
    const renderers = { Home:renderHome, Inbox:renderInbox, 'My Watches':renderMyWatches, Watches:renderWatches, Brands:renderBrands, Releases:renderReleases, Library:renderLibrary, Collections:renderCollections, Reminders:renderReminders };
    content.innerHTML = renderers[currentView]();
  }
  wireContent();
  refreshDatalists();
  hydrateMediaImages(content);
}

function wireContent() {
  content.querySelectorAll('[data-go]').forEach(x=>x.addEventListener('click',()=>{currentView=x.dataset.go;search.value='';render();}));
  content.querySelectorAll('[data-watch]').forEach(x=>x.addEventListener('click',()=>openWatch(x.dataset.watch)));
  content.querySelectorAll('[data-new-watch]').forEach(x=>x.addEventListener('click',()=>openWatchEditor()));
  content.querySelectorAll('[data-inbox-action]').forEach(btn=>btn.addEventListener('click',(e)=>{e.stopPropagation();handleInbox(btn.dataset.inboxAction,btn.dataset.id);}));
  content.querySelectorAll('[data-library-open]').forEach(btn=>btn.addEventListener('click',(e)=>{e.stopPropagation();openSaved(state.library.find(x=>x.id===btn.dataset.libraryOpen));}));
  content.querySelectorAll('[data-saved-row]').forEach(row=>row.addEventListener('click',(e)=>{
    if (e.target.closest('button, a')) return;
    const pool = row.dataset.savedRow === 'inbox' ? state.inbox : state.library;
    openSaved(pool.find(x=>x.id===row.dataset.savedRowId));
  }));
  content.querySelectorAll('[data-reminder]').forEach(btn=>btn.addEventListener('click',()=>{ const r=state.reminders.find(x=>x.id===btn.dataset.reminder); r.done=!r.done; saveState(); render(); }));
  content.querySelectorAll('[data-saved-id]').forEach(btn=>btn.addEventListener('click',()=>{const pool=btn.dataset.savedBucket==='Inbox'?state.inbox:state.library; openSaved(pool.find(x=>x.id===btn.dataset.savedId));}));
}

function watchSummary(w) {
  const lines = [
    `${brandName(w.brandId)} ${w.model}${w.variant ? ` — ${w.variant}` : ''}`,
    [w.diameter ? `${w.diameter} mm` : '', w.thickness ? `${w.thickness} mm thick` : '', w.movement || '', (w.complications||[]).join(' / '), w.material || '', formatPrice(w.price,w.currency)].filter(Boolean).join(' · ')
  ];
  if ((w.statuses||[]).length) lines.push(`Status: ${w.statuses.join(', ')}`);
  if (w.note) lines.push(w.note);
  if (w.officialUrl) lines.push(w.officialUrl);
  return lines.filter(Boolean).join('\n');
}
async function shareWatch(w) {
  const text = watchSummary(w);
  if (navigator.share) {
    try { await navigator.share({ title: `${brandName(w.brandId)} ${w.model}`, text, url: w.officialUrl || undefined }); return; } catch (e) { if (e?.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(text); alert('Watch summary copied to the clipboard.'); }
  catch { prompt('Copy this watch summary:', text); }
}

function openWatch(id) {
  const w = state.watches.find(x=>x.id===id); if (!w) return;
  const own = state.myWatches.find(x=>x.watchId===id);
  const d = document.getElementById('detailDialog');
  d.innerHTML = `<div class="dialog-inner"><div class="dialog-head"><div><div class="eyebrow">${escapeHtml(brandName(w.brandId))}</div><h2>${escapeHtml(w.model)}${w.variant?` · ${escapeHtml(w.variant)}`:''}</h2>${w.referenceNumber?`<div class="meta">Ref. ${escapeHtml(w.referenceNumber)}</div>`:''}</div><button class="icon-button" data-close>×</button></div>
    <div class="detail-toolbar"><button class="button secondary" data-edit-watch>Edit</button><button class="button secondary" data-own-watch>${own?'Edit My Watch':'Add to My Watches'}</button><button class="button secondary" data-share-watch>Share</button></div>
    <div class="detail-hero"><div class="detail-image">${w.heroImagePath ? `<img class="media-image detail-media" data-media-path="${escapeHtml(w.heroImagePath)}" alt="${escapeHtml(watchLabel(w))}" />` : watchGlyph('watch-glyph hero')}</div><div><div class="pills">${(w.statuses||[]).map(s=>`<span class="pill strong">${escapeHtml(s)}</span>`).join('')}${(w.tags||[]).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join('')}</div><p>${escapeHtml(w.note || 'No personal note yet.')}</p>${w.officialUrl?`<p><a href="${escapeHtml(w.officialUrl)}" target="_blank" rel="noreferrer">Open official page ↗</a></p>`:''}</div></div>
    <div class="specs">
      ${[
        ['Diameter',w.diameter?`${w.diameter} mm`:'—'],
        ['Thickness',w.thickness?`${w.thickness} mm`:'—'],
        ['Lug-to-lug',w.lugToLug?`${w.lugToLug} mm`:'—'],
        ['Movement',w.movement||'—'],
        ['Case',w.material||'—'],
        ['Crystal',w.crystal||'—'],
        ['Water resistance',w.waterResistance?`${w.waterResistance} m`:'—'],
        ['Type',(w.type||[]).join(', ')||'—'],
        ['Complications',(w.complications||[]).join(', ')||'—'],
        ['Price',formatPrice(w.price,w.currency)]
      ].map(([a,b])=>`<div class="spec"><div class="label">${a}</div><div class="value">${escapeHtml(b)}</div></div>`).join('')}
    </div>
    ${own?`<section class="section"><div class="section-head"><h2>My watch</h2></div><div class="grid two"><div class="card"><div class="kicker">Purchased</div><h3>${fmtDate(own.purchaseDate)}</h3><div class="meta">${formatPrice(own.purchasePrice,own.currency)}${own.seller?` · ${escapeHtml(own.seller)}`:''}</div></div><div class="card"><div class="kicker">Current setup</div><h3>${escapeHtml(own.currentStrap || 'Not recorded')}</h3><div class="meta">Box ${own.box?'✓':'—'} · Papers ${own.papers?'✓':'—'}</div></div></div>${own.notes?`<div class="card ownership-note"><div class="kicker">Ownership notes</div>${escapeHtml(own.notes)}</div>`:''}</section>`:''}
  </div>`;
  d.querySelector('[data-close]').addEventListener('click',()=>d.close());
  d.querySelector('[data-edit-watch]').addEventListener('click',()=>{d.close();openWatchEditor(id);});
  d.querySelector('[data-own-watch]').addEventListener('click',()=>{d.close();openOwnershipEditor(id);});
  d.querySelector('[data-share-watch]').addEventListener('click',()=>shareWatch(w));
  d.showModal();
  hydrateMediaImages(d);
}

function openSaved(item) {
  if (!item) return;
  const d = document.getElementById('detailDialog');
  const readerMeta = [item.readerByline, item.readerPublishedTime ? fmtDate(item.readerPublishedTime) : ''].filter(Boolean).map(escapeHtml).join(' · ');
  const reader = item.type === 'Article' && item.articleState === 'ready' && item.readerHtml
    ? `<section class="reader-shell">${item.readerExcerpt?`<p class="reader-deck">${escapeHtml(item.readerExcerpt)}</p>`:''}${readerMeta?`<p class="meta">${readerMeta}</p>`:''}<article class="reader-article">${item.readerHtml}</article></section>`
    : '';
  const articleNotice = item.articleState === 'processing' ? '<div class="notice">Mozilla Readability is processing this article now.</div>'
    : item.articleState === 'pending' ? '<div class="notice">Reader capture is waiting for Ticking Cloud. Connect Supabase, then retry.</div>'
    : item.articleState === 'error' ? `<div class="notice warning">Reader capture failed: ${escapeHtml(item.articleError || 'Unknown error')}</div>` : '';
  d.innerHTML = `<div class="dialog-inner"><div class="dialog-head"><div><div class="eyebrow">${escapeHtml(item.type)}</div><h2>${escapeHtml(item.title)}</h2></div><button class="icon-button" data-close>×</button></div><p class="meta">${escapeHtml(item.source || sourceFromUrl(item.url))} · ${fmtDate(item.savedAt)}</p>${item.status?`<div class="pills"><span class="pill strong">${escapeHtml(item.status)}</span>${(item.tags||[]).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join('')}</div>`:''}${item.selectedText?`<div class="card quote-card"><p>${escapeHtml(item.selectedText)}</p></div>`:''}${item.note?`<div class="card"><div class="kicker">Note</div>${escapeHtml(item.note)}</div>`:''}${articleNotice}${reader}${item.screenshotState==='pending'?`<div class="notice">Full-page screenshot capture is queued for the hosted capture service, where it will be compressed before upload.</div>`:''}<div class="dialog-actions">${item.readStatus?`<button class="button secondary" data-toggle-read>${item.readStatus==='Read'?'Mark unread':'Mark read'}</button>`:''}${item.type==='Article' && item.articleState!=='ready'?`<button class="button secondary" data-retry-reader>Retry Reader</button>`:''}${item.url?`<a class="button primary link-button" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Open original page ↗</a>`:''}</div></div>`;
  d.querySelector('[data-close]').addEventListener('click',()=>d.close());
  d.querySelector('[data-toggle-read]')?.addEventListener('click',()=>{item.readStatus=item.readStatus==='Read'?'Unread':'Read'; saveState(); d.close(); render();});
  d.querySelector('[data-retry-reader]')?.addEventListener('click',()=>{d.close(); processArticleCapture(item);});
  d.showModal();
}

function handleInbox(action,id) {
  const item=state.inbox.find(x=>x.id===id); if(!item) return;
  if(action==='keep') {
    state.library.unshift({...item, readStatus:item.type==='Article'?(item.readStatus||'Unread'):'', articleState:item.type==='Article'?(item.articleState||'pending'):undefined});
    state.inbox=state.inbox.filter(x=>x.id!==id); saveState(); render();
  }
  if(action==='discard') { state.inbox=state.inbox.filter(x=>x.id!==id); saveState(); render(); }
  if(action==='open') openSaved(item);
}

function populateSelect(id, options, value='', includeBlank=true) {
  const el = document.getElementById(id);
  el.innerHTML = `${includeBlank?'<option value="">—</option>':''}${options.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('')}`;
  el.value = value || '';
}
function renderChoicePicker(containerId, options, selectedSet, key) {
  const el = document.getElementById(containerId);
  el.innerHTML = options.map(value=>`<button type="button" class="choice-pill ${selectedSet.has(value)?'active':''}" data-choice-key="${key}" data-choice-value="${escapeHtml(value)}">${escapeHtml(value)}</button>`).join('');
  el.querySelectorAll('[data-choice-value]').forEach(btn=>btn.addEventListener('click',()=>{
    const value=btn.dataset.choiceValue;
    const set = key === 'types' ? editorSelections.types : key === 'complications' ? editorSelections.complications : editorSelections.statuses;
    if (set.has(value)) set.delete(value); else set.add(value);
    btn.classList.toggle('active', set.has(value));
  }));
}
function renderTagQuickPicker() {
  const input = document.getElementById('watchTags');
  const selected = new Set(splitTags(input.value));
  const el = document.getElementById('tagQuickPicker');
  el.innerHTML = state.lookup.tags.slice(0,12).map(tag=>`<button type="button" class="choice-pill ${selected.has(tag)?'active':''}" data-tag-value="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('');
  el.querySelectorAll('[data-tag-value]').forEach(btn=>btn.addEventListener('click',()=>{
    const tags = new Set(splitTags(input.value)); const tag=btn.dataset.tagValue;
    if(tags.has(tag)) tags.delete(tag); else tags.add(tag);
    input.value=[...tags].join(', '); renderTagQuickPicker();
  }));
}

function openWatchEditor(id=null) {
  const w = id ? state.watches.find(x=>x.id===id) : null;
  document.getElementById('watchEditId').value = w?.id || '';
  document.getElementById('watchEditorTitle').textContent = w ? 'Edit watch' : 'New watch';
  document.getElementById('watchBrand').value = w ? brandName(w.brandId) : '';
  document.getElementById('watchModel').value = w?.model || '';
  document.getElementById('watchVariant').value = w?.variant || '';
  document.getElementById('watchReference').value = w?.referenceNumber || '';
  document.getElementById('watchOfficialUrl').value = w?.officialUrl || '';
  document.getElementById('watchMovement').value = w?.movement || '';
  document.getElementById('watchDiameter').value = w?.diameter ?? '';
  document.getElementById('watchThickness').value = w?.thickness ?? '';
  document.getElementById('watchLugToLug').value = w?.lugToLug ?? '';
  document.getElementById('watchLugWidth').value = w?.lugWidth ?? '';
  document.getElementById('watchWaterResistance').value = w?.waterResistance ?? '';
  document.getElementById('watchPrice').value = w?.price ?? '';
  document.getElementById('watchCurrency').value = w?.currency || 'CAD';
  document.getElementById('watchTags').value = (w?.tags || []).join(', ');
  document.getElementById('watchNote').value = w?.note || '';
  document.getElementById('watchHeroImage').value = '';
  document.getElementById('watchHeroImageState').textContent = w?.heroImagePath ? 'A private hero image is stored for this watch. Choose a new file to replace it.' : (cloudReady() ? 'Optional. Images are compressed to WebP before upload.' : 'Connect Ticking Cloud to upload images.');
  populateSelect('watchMaterial', state.lookup.materials, w?.material || '');
  populateSelect('watchCrystal', state.lookup.crystals, w?.crystal || '');
  editorSelections = { types:new Set(w?.type||[]), complications:new Set(w?.complications||[]), statuses:new Set(w?.statuses||[]) };
  renderChoicePicker('watchTypePicker', state.lookup.watchTypes, editorSelections.types, 'types');
  renderChoicePicker('watchComplicationPicker', state.lookup.complications, editorSelections.complications, 'complications');
  renderChoicePicker('watchStatusPicker', state.lookup.statuses, editorSelections.statuses, 'statuses');
  renderTagQuickPicker();
  document.getElementById('deleteWatch').classList.toggle('hidden', !w);
  refreshDatalists();
  watchEditorDialog.showModal();
}

watchEditorForm.addEventListener('submit',async e=>{
  e.preventDefault();
  const brand = ensureBrand(document.getElementById('watchBrand').value);
  const model = document.getElementById('watchModel').value.trim();
  if (!brand || !model) return;
  const movement = document.getElementById('watchMovement').value.trim();
  const tags = splitTags(document.getElementById('watchTags').value);
  if (movement) addUnique(state.lookup.movements, movement);
  tags.forEach(t=>addUnique(state.lookup.tags,t));
  const id = document.getElementById('watchEditId').value;
  const existing = id ? state.watches.find(x=>x.id===id) : null;
  const heroFile = document.getElementById('watchHeroImage').files?.[0] || null;
  let heroImagePath = existing?.heroImagePath || '';
  if (heroFile) {
    if (!cloudReady()) { alert('Connect and sign in to Ticking Cloud before uploading a watch image.'); return; }
    const imageState = document.getElementById('watchHeroImageState'); imageState.textContent = 'Compressing and uploading…';
    try { heroImagePath = await uploadMedia(heroFile, 'watch-images'); }
    catch (error) { imageState.textContent = `Upload failed: ${error.message || error}`; return; }
  }
  const record = {
    ...(existing || {}),
    id: existing?.id || uid('w'),
    brandId: brand.id,
    model,
    variant: document.getElementById('watchVariant').value.trim(),
    referenceNumber: document.getElementById('watchReference').value.trim(),
    officialUrl: document.getElementById('watchOfficialUrl').value.trim(),
    movement,
    material: document.getElementById('watchMaterial').value,
    crystal: document.getElementById('watchCrystal').value,
    type: [...editorSelections.types],
    complications: [...editorSelections.complications],
    statuses: [...editorSelections.statuses],
    diameter: numOrNull(document.getElementById('watchDiameter').value),
    thickness: numOrNull(document.getElementById('watchThickness').value),
    lugToLug: numOrNull(document.getElementById('watchLugToLug').value),
    lugWidth: numOrNull(document.getElementById('watchLugWidth').value),
    waterResistance: numOrNull(document.getElementById('watchWaterResistance').value),
    price: numOrNull(document.getElementById('watchPrice').value),
    currency: document.getElementById('watchCurrency').value,
    tags,
    note: document.getElementById('watchNote').value.trim(),
    heroImagePath
  };
  if (existing) Object.assign(existing, record); else state.watches.unshift(record);
  saveState(); watchEditorDialog.close(); currentView='Watches'; render(); openWatch(record.id);
});
document.getElementById('watchTags').addEventListener('input',renderTagQuickPicker);
document.getElementById('cancelWatchEdit').addEventListener('click',()=>watchEditorDialog.close());
document.getElementById('deleteWatch').addEventListener('click',()=>{
  const id=document.getElementById('watchEditId').value; if(!id) return;
  const w=state.watches.find(x=>x.id===id); if(!w) return;
  if(!confirm(`Delete ${brandName(w.brandId)} ${w.model} from Ticking?`)) return;
  state.watches=state.watches.filter(x=>x.id!==id);
  state.myWatches=state.myWatches.filter(x=>x.watchId!==id);
  for (const item of [...state.inbox,...state.library]) if(item.watchId===id) item.watchId=null;
  saveState(); watchEditorDialog.close(); currentView='Watches'; render();
});

function openOwnershipEditor(watchId) {
  const w=state.watches.find(x=>x.id===watchId); if(!w) return;
  const own=state.myWatches.find(x=>x.watchId===watchId);
  document.getElementById('ownershipWatchId').value=watchId;
  document.getElementById('ownershipTitle').textContent=`${own?'Edit':'Add'} ${brandName(w.brandId)} ${w.model}`;
  document.getElementById('ownershipPurchaseDate').value=own?.purchaseDate||'';
  document.getElementById('ownershipPurchasePrice').value=own?.purchasePrice??'';
  document.getElementById('ownershipCurrency').value=own?.currency||w.currency||'CAD';
  document.getElementById('ownershipSeller').value=own?.seller||'';
  document.getElementById('ownershipStrap').value=own?.currentStrap||'';
  document.getElementById('ownershipBox').checked=!!own?.box;
  document.getElementById('ownershipPapers').checked=!!own?.papers;
  document.getElementById('ownershipNotes').value=own?.notes||'';
  document.getElementById('removeOwnership').classList.toggle('hidden',!own);
  ownershipDialog.showModal();
}
ownershipForm.addEventListener('submit',e=>{
  e.preventDefault();
  const watchId=document.getElementById('ownershipWatchId').value;
  let own=state.myWatches.find(x=>x.watchId===watchId);
  const record={
    id: own?.id || uid('mw'), watchId,
    purchaseDate:document.getElementById('ownershipPurchaseDate').value,
    purchasePrice:numOrNull(document.getElementById('ownershipPurchasePrice').value),
    currency:document.getElementById('ownershipCurrency').value,
    seller:document.getElementById('ownershipSeller').value.trim(),
    currentStrap:document.getElementById('ownershipStrap').value.trim(),
    box:document.getElementById('ownershipBox').checked,
    papers:document.getElementById('ownershipPapers').checked,
    notes:document.getElementById('ownershipNotes').value.trim()
  };
  if(own) Object.assign(own,record); else state.myWatches.unshift(record);
  const w=state.watches.find(x=>x.id===watchId);
  if(w && !(w.statuses||[]).includes('Owned')) w.statuses=[...(w.statuses||[]).filter(x=>x!=='Formerly Owned'),'Owned'];
  saveState(); ownershipDialog.close(); render(); openWatch(watchId);
});
document.getElementById('cancelOwnership').addEventListener('click',()=>ownershipDialog.close());
document.getElementById('removeOwnership').addEventListener('click',()=>{
  const watchId=document.getElementById('ownershipWatchId').value;
  state.myWatches=state.myWatches.filter(x=>x.watchId!==watchId);
  const w=state.watches.find(x=>x.id===watchId);
  if(w) w.statuses=[...(w.statuses||[]).filter(x=>x!=='Owned' && x!=='Formerly Owned'),'Formerly Owned'];
  saveState(); ownershipDialog.close(); render(); openWatch(watchId);
});


function renderCaptureTagQuickPicker() {
  const input = document.getElementById('captureTags');
  const selected = new Set(splitTags(input.value));
  const el = document.getElementById('captureTagQuickPicker');
  el.innerHTML = state.lookup.tags.slice(0,10).map(tag=>`<button type="button" class="choice-pill ${selected.has(tag)?'active':''}" data-capture-tag-value="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('');
  el.querySelectorAll('[data-capture-tag-value]').forEach(btn=>btn.addEventListener('click',()=>{
    const tags = new Set(splitTags(input.value)); const tag=btn.dataset.captureTagValue;
    if(tags.has(tag)) tags.delete(tag); else tags.add(tag);
    input.value=[...tags].join(', '); renderCaptureTagQuickPicker();
  }));
}

function openCapture(prefill={}) {
  document.getElementById('captureUrl').value=prefill.url||'';
  document.getElementById('captureTitle').value=prefill.title||'';
  document.getElementById('captureSelection').value=prefill.selection||'';
  document.getElementById('captureBrand').value='';
  document.getElementById('captureWatch').value='';
  document.getElementById('captureStatus').value='';
  document.getElementById('captureTags').value='';
  document.getElementById('captureNote').value='';
  renderCaptureTagQuickPicker();
  setCaptureType(prefill.selection?'Snippet':'Link');
  updateDuplicateNotice();
  captureDialog.showModal();
}
function setCaptureType(type) {
  currentCaptureType=type;
  document.querySelectorAll('#captureType button').forEach(b=>b.classList.toggle('active',b.dataset.type===type));
  document.getElementById('selectionWrap').classList.toggle('hidden',type!=='Snippet');
  document.getElementById('articleNotice').classList.toggle('hidden',type!=='Article');
  document.getElementById('screenshotNotice').classList.toggle('hidden',type!=='Full Page');
}
function updateDuplicateNotice() {
  const url=normalizeUrl(document.getElementById('captureUrl').value);
  const notice=document.getElementById('duplicateNotice');
  if(!url) { notice.classList.add('hidden'); return; }
  const match=[...state.inbox.map(x=>({...x,bucket:'Inbox'})),...state.library.map(x=>({...x,bucket:'Library'}))].find(x=>normalizeUrl(x.url)===url);
  if(match) { notice.textContent=`Already saved in ${match.bucket}: “${match.title}”. You can still save another copy.`; notice.classList.remove('hidden'); }
  else notice.classList.add('hidden');
}
document.querySelectorAll('#captureType button').forEach(b=>b.addEventListener('click',()=>setCaptureType(b.dataset.type)));
document.getElementById('openCapture').addEventListener('click',()=>openCapture());
document.getElementById('captureUrl').addEventListener('input',updateDuplicateNotice);
document.getElementById('captureTags').addEventListener('input',renderCaptureTagQuickPicker);

function captureItem() {
  const url=document.getElementById('captureUrl').value.trim();
  const title=document.getElementById('captureTitle').value.trim() || url || 'Untitled capture';
  const tags=splitTags(document.getElementById('captureTags').value);
  const brandText=document.getElementById('captureBrand').value.trim();
  const watchText=document.getElementById('captureWatch').value.trim();
  const brand=brandText?ensureBrand(brandText):null;
  const watch=watchText?watchByLabel(watchText):null;
  tags.forEach(t=>addUnique(state.lookup.tags,t));
  return {
    id:uid('i'), type:currentCaptureType, title, url, source:sourceFromUrl(url), savedAt:new Date().toISOString(),
    selectedText:document.getElementById('captureSelection').value.trim(), brandId:brand?.id||null, watchId:watch?.id||null,
    brand:brandText, watch:watchText, status:document.getElementById('captureStatus').value, tags,
    note:document.getElementById('captureNote').value.trim()
  };
}
function saveCapture(destination) {
  const base = captureItem();
  const item = destination==='library'
    ? {...base,id:uid('l'),readStatus:base.type==='Article'?'Unread':'',articleState:base.type==='Article'?'pending':undefined,screenshotState:base.type==='Full Page'?'pending':undefined}
    : {...base,articleState:base.type==='Article'?'pending':undefined,screenshotState:base.type==='Full Page'?'pending':undefined};
  if(destination==='library') state.library.unshift(item); else state.inbox.unshift(item);
  saveState(); captureDialog.close(); currentView=destination==='library'?'Library':'Inbox'; render();
  if (item.type === 'Article') processArticleCapture(item);
}

captureForm.addEventListener('submit',e=>{e.preventDefault();saveCapture('inbox');});
document.getElementById('saveLibrary').addEventListener('click',()=>saveCapture('library'));

function refreshDatalists() {
  document.getElementById('brandOptions').innerHTML=state.brands.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(b=>`<option value="${escapeHtml(b.name)}"></option>`).join('');
  document.getElementById('watchOptions').innerHTML=state.watches.slice().sort((a,b)=>watchLabel(a).localeCompare(watchLabel(b))).map(w=>`<option value="${escapeHtml(watchLabel(w))}"></option>`).join('');
  document.getElementById('tagOptions').innerHTML=state.lookup.tags.slice().sort((a,b)=>a.localeCompare(b)).map(t=>`<option value="${escapeHtml(t)}"></option>`).join('');
  document.getElementById('movementOptions').innerHTML=(state.lookup.movements||[]).slice().sort((a,b)=>a.localeCompare(b)).map(t=>`<option value="${escapeHtml(t)}"></option>`).join('');
  populateSelect('captureStatus', ['None', ...state.lookup.statuses], document.getElementById('captureStatus')?.value || '', false);
  if (document.getElementById('captureStatus').options[0]?.textContent === 'None') document.getElementById('captureStatus').options[0].value='';
}

search.addEventListener('input',render);

function bookmarkletCode() {
  const hosted = location.protocol === 'http:' || location.protocol === 'https:';
  if (!hosted) return {target:'', code:'', hosted:false};
  const target = location.origin + location.pathname;
  const code = `javascript:(()=>{const u=encodeURIComponent(location.href),t=encodeURIComponent(document.title),s=encodeURIComponent(String(getSelection()));window.open('${target}?capture=1&url='+u+'&title='+t+'&selection='+s,'_blank','noopener,noreferrer,width=720,height=780')})()`;
  return {target,code,hosted:true};
}

document.getElementById('bookmarkletHelp').addEventListener('click',()=>{
  const {target,code,hosted}=bookmarkletCode();
  const d=document.getElementById('bookmarkletDialog');
  if (!hosted) {
    d.innerHTML=`<div class="dialog-inner"><div class="dialog-head"><div><div class="eyebrow">Browser capture</div><h2>Save to Ticking bookmarklet</h2></div><button class="icon-button" data-close>×</button></div><div class="notice warning"><strong>Ticking needs a web address before the bookmarklet can work.</strong><br>This downloaded copy is running directly from your Mac. Browsers do not reliably allow a bookmarklet on a website to open a local file. Once Ticking is hosted, this panel will automatically generate the correct bookmarklet from that live address.</div><p class="meta">The old placeholder link has been removed so it cannot be installed accidentally.</p></div>`;
  } else {
    d.innerHTML=`<div class="dialog-inner"><div class="dialog-head"><div><div class="eyebrow">Browser capture</div><h2>Save to Ticking bookmarklet</h2></div><button class="icon-button" data-close>×</button></div><p>Drag this link to your Firefox bookmarks bar:</p><a class="button primary bookmarklet-link" href="${escapeHtml(code)}">Save to Ticking</a><p class="meta">The bookmarklet sends the current URL, title and any selected text to the capture panel. Highlighted text automatically becomes a Snippet.</p><h3>Bookmarklet code</h3><div class="code-box">${escapeHtml(code)}</div><p class="meta">Target: ${escapeHtml(target)}</p></div>`;
  }
  d.querySelector('[data-close]').addEventListener('click',()=>d.close());
  d.showModal();
});

document.getElementById('exportAll').addEventListener('click',()=>{
  const payload={ exportedAt:new Date().toISOString(), app:'Ticking', version:CURRENT_VERSION, data:state };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`ticking-export-${new Date().toISOString().slice(0,10)}.json`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
});

function checkCaptureQuery() {
  const p=new URLSearchParams(location.search);
  if(p.get('capture')==='1') {
    openCapture({url:p.get('url')||'',title:p.get('title')||'',selection:p.get('selection')||''});
    history.replaceState({},'',location.pathname);
  }
}

setupCloudUI();
refreshDatalists();
render();
checkCaptureQuery();
initCloud({load:true});
