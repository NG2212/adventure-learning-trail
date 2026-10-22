import { ADVENTURES, CATEGORIES } from '@/content/adventures';
import { titleFor, TITLES } from '@/lib/titles';
import type { StoreState } from './types';
import { ADMIN_TODAY, ORG_TEAMS, EMPLOYEE_PROFESSIONS, type AdminPerson, type ActivityEvent, type AdminSession, type AdminFilters, type AdminReadsWrites, type AdminAdventure, type GroupMetric } from './adminTypes';
const FIRST = ['Noa','Amir','Yael','Daniel','Maya','Eitan','Shira','Omer','Tamar','Itai','Lior','Neta','Roni','Amit','Michal','Yair','Dalia','Rafael','Ella','Nadav','Sofia','Oliver','Emma','Lucas','Aisha','Liam','Chloe','Arjun','Hannah','Leo','Sara','David','Mila','Adam','Leah'];
const LAST = ['Levi','Cohen','Rosen','Katz','Shapira','Friedman','Barak','Goldstein','Ben-David','Weiss','Peretz','Mizrahi','Adler','Shaked','Kaplan','Mor','Stern','Avraham','Green','Levin','Miller','Smith','Martin','Patel','Khan','Wilson','Dubois','Singh','Brown','Garcia','Ahmed','Kim','Novak','Scott','Taylor','Chen','Costa','Berg','Silva','Reed'];
function random(seed: number) { let x = seed >>> 0; return () => { x = (Math.imul(1664525, x) + 1013904223) >>> 0; return x / 4294967296; }; }
const epoch = Date.parse(`${ADMIN_TODAY}T23:59:59Z`);
const day = 86400000;
const iso = (daysAgo: number) => new Date(epoch - daysAgo * day).toISOString();
export function generateAdminDataset(seed = 20261022) {
 const rng = random(seed);
 const teams = Object.entries(ORG_TEAMS).flatMap(([org, names], orgIndex) => names.map(team => ({ org, team, profession: EMPLOYEE_PROFESSIONS[orgIndex] ?? 'Other' })));
 const people: AdminPerson[] = Array.from({ length: 140 }, (_, i) => {
  const group = teams[i % teams.length];
  if (!group) throw new Error('Missing mock team');
  const first = i === 0 ? 'Noa' : FIRST[(i * 7 + Math.floor(i / 35)) % FIRST.length] ?? 'Alex';
  const last = i === 0 ? 'Levi' : LAST[(i * 13 + Math.floor(i / 40)) % LAST.length] ?? 'Cohen';
  return { id: i === 0 ? 'noa-levi' : `employee-${i}`, name: `${first} ${last}`, email: `${first}.${last}`.toLowerCase() + '@monday.com', ...group, managerId: `employee-${i % teams.length}`, isManager: i < teams.length, joinedAt: iso(90 + Math.floor(rng() * 1000)).slice(0,10), lastActiveAt: null, title: 'Not started', completions: [], itinerary: [], estimatedMinutes: 0 };
 });
 // Noa is an employee in Product; the 28 team leads all come from the employee list.
 const noa = people[0];
 if (noa) Object.assign(noa, { org: 'Product', team: 'Work Management', profession: 'Product', managerId: 'employee-11', isManager: false });
 if (people[27]) people[27].isManager = true;
 if (people[28]) Object.assign(people[28], {isManager:true,org:'Sales & CS',team:'Enterprise Sales',profession:'Customer Facing',managerId:'employee-28'});
 people.forEach(p=>{if(p.managerId==='employee-0')p.managerId='employee-28';});
 const events: ActivityEvent[] = [], sessions: AdminSession[] = [];
 const open = ADVENTURES.filter(a => a.isOpen);
 const addEvent = (personId: string, slug: string, kind: ActivityEvent['kind'], at: string) => events.push({ id: `event-${events.length}`, personId, slug, kind, at });
 people.forEach((person, i) => {
  if (i === 0) return;
  if (i % 7 === 0 || i === 138 || i === 139) return; // 21 people never active
  const count = i % 20 === 0 ? 0 : i % 23 === 0 ? 8 + Math.floor(rng()*5) : 1 + Math.floor(rng()*4);
  const choices = [...open];
  const offset = Math.floor(rng()*choices.length);
  const completed = Array.from({length: count},(_,k) => choices[(offset+k)%choices.length] ?? ADVENTURES[0]).filter(a => a !== undefined);
  // At most one completion per employee/adventure; rare 12th completion is an early-access later-wave adventure.
  if (count > open.length) { const later = ADVENTURES.find(a => !a.isOpen); if (later) completed.push(later); }
  const unique = [...new Map(completed.map(a=>[a.slug,a])).values()];
  unique.forEach((a,k) => {
   const ago = Math.max(0.1, Math.pow(rng(), 1.7)*56);
   const at = iso(ago);
   person.completions.push({ slug:a.slug, completedAt:at });
   addEvent(person.id,a.slug,'opened',iso(ago+1.2));
   addEvent(person.id,a.slug,'added',iso(ago+0.8));
   addEvent(person.id,a.slug,'completed',at);
   sessions.push({personId:person.id,slug:a.slug,at,estimatedMinutes:12+Math.floor(rng()*43)});
  });
  for(let k=0;k<3+Math.floor(rng()*8);k++) {
   const a = ADVENTURES[Math.floor(rng()*(rng()<0.85?open.length:ADVENTURES.length))];
   if (!a) continue;
   const at = iso(Math.pow(rng(),2)*59);
   addEvent(person.id,a.slug,'opened',at);
   sessions.push({personId:person.id,slug:a.slug,at,estimatedMinutes:4+Math.floor(rng()*29)});
  }
  person.itinerary = ADVENTURES.filter(a=>!person.completions.some(c=>c.slug===a.slug)).slice(offset%8,(offset%8)+2+Math.floor(rng()*3)).map(a=>a.slug);
  person.itinerary.forEach(slug=>addEvent(person.id,slug,'added',iso(Math.pow(rng(),2)*58)));
  person.lastActiveAt = events.filter(e=>e.personId===person.id).map(e=>e.at).sort().at(-1) ?? null;
  person.title = titleFor(person.completions.length) ?? 'Not started';
  person.estimatedMinutes = sessions.filter(s=>s.personId===person.id).reduce((sum,s)=>sum+s.estimatedMinutes,0);
 });
 if (noa) {
  noa.completions = [{slug:'de-slop',completedAt:'2026-10-15'}];
  noa.itinerary = ['board-of-advisors','your-ai-identity','skills-when-how-and-how-well'];
  noa.title = 'First Steps'; noa.lastActiveAt = '2026-10-21T10:30:00Z'; noa.estimatedMinutes = 47;
  addEvent(noa.id,'de-slop','opened','2026-10-15T09:00:00Z');
  addEvent(noa.id,'de-slop','completed','2026-10-15T09:32:00Z');
  noa.itinerary.forEach(slug=>addEvent(noa.id,slug,'added','2026-10-16T11:00:00Z'));
  addEvent(noa.id,'board-of-advisors','opened',noa.lastActiveAt);
  sessions.push({personId:noa.id,slug:'de-slop',at:'2026-10-15T09:00:00Z',estimatedMinutes:32},{personId:noa.id,slug:'board-of-advisors',at:noa.lastActiveAt,estimatedMinutes:15});
 }
 return { people, events, sessions };
}
export function createAdminMock(getState: () => StoreState, notify: () => void): AdminReadsWrites {
 const data = generateAdminDataset();
 let adventures: AdminAdventure[] = ADVENTURES.map(a=>({...a,status:a.isOpen?'Open':'Scheduled'}));
 let waves = [{number:1,date:'2026-10-01'},{number:2,date:'2026-11-23'},{number:3,date:'2026-12-07'},{number:4,date:'2027-01-04'}];
 let announcement = {text:'New on Monday: two new adventures opened.',showFrom:'2026-10-01',showUntil:'2026-11-22'};
 let admins = ['noa-levi','employee-8'];
 const allPeople = () => data.people.map(p=>p.id!=='noa-levi'?p:{...p,completions:getState().completions,itinerary:getState().itinerary,title:titleFor(getState().completions.length)??'Not started'});
 const matchingPeople = (f: AdminFilters = {}) => allPeople().filter(p=>
  (!f.org||p.org===f.org)&&(!f.team||p.team===f.team)&&(!f.managerId||p.managerId===f.managerId)&&(!f.profession||p.profession===f.profession)&&(!f.title||p.title===f.title)&&
  (!f.inactive||!p.lastActiveAt||Date.parse(p.lastActiveAt)<epoch-30*day)&&(!f.search||`${p.name} ${p.email}`.toLowerCase().includes(f.search.toLowerCase())));
 const allEvents = () => {
  const s=getState();
  const events=data.events.filter(e=>e.personId!=='noa-levi'||e.kind!=='completed');
  s.completions.forEach((c,i)=>events.push({id:`noa-completion-${i}`,personId:'noa-levi',slug:c.slug,kind:'completed',at:c.completedAt.length===10?`${c.completedAt}T09:32:00Z`:c.completedAt}));
  return events;
 };
 const filteredEvents = (f:AdminFilters={}) => {const ids=new Set(matchingPeople(f).map(p=>p.id)); return allEvents().filter(e=>ids.has(e.personId)&&Date.parse(e.at)>=epoch-(f.days??60)*day&&Date.parse(e.at)<=epoch&&(!f.wave||adventures.find(a=>a.slug===e.slug)?.wave===Number(f.wave)));};
 return {
  listPeople:matchingPeople,
  getPersonActivity:(id,f={})=>filteredEvents(f).filter(e=>e.personId===id).sort((a,b)=>b.at.localeCompare(a.at)),
  getAggregates(f={}) {
   const people=matchingPeople(f),events=filteredEvents(f),opens=events.filter(e=>e.kind==='opened'),done=events.filter(e=>e.kind==='completed');
   const active=new Set(opens.map(e=>e.personId));
   const minutes = people.filter(p=>active.has(p.id)).map(p=>data.sessions.filter(s=>s.personId===p.id&&Date.parse(s.at)>=epoch-(f.days??60)*day&&Date.parse(s.at)<=epoch&&(!f.wave||adventures.find(a=>a.slug===s.slug)?.wave===Number(f.wave))).reduce((sum,s)=>sum+s.estimatedMinutes,0)).sort((a,b)=>a-b);
   const group=(names:string[],field:'org'|'profession'):GroupMetric[]=>names.map(name=>{const ps=people.filter(p=>p[field]===name),gs=new Set(ps.map(p=>p.id)),completed=done.filter(e=>gs.has(e.personId)).length,act=ps.filter(p=>active.has(p.id)).length;return {name,total:ps.length,active:act,activePercent:ps.length?act/ps.length*100:0,completions:completed,average:ps.length?completed/ps.length:0};});
   const metricAdventures=adventures.filter(a=>!f.wave||a.wave===Number(f.wave)).map(a=>{const o=opens.filter(e=>e.slug===a.slug).length,c=done.filter(e=>e.slug===a.slug).length;return {slug:a.slug,title:a.title,opens:o,completions:c,rate:o?c/o*100:0,badgeCount:new Set(done.filter(e=>e.slug===a.slug).map(e=>e.personId)).size};});
   const weeks=Math.ceil((f.days??60)/7);
   return {total:people.length,active:active.size,activePercent:people.length?active.size/people.length*100:0,opens:opens.length,completions:done.length,average:active.size?done.length/active.size:0,completionRate:opens.length?done.length/opens.length*100:0,adds:events.filter(e=>e.kind==='added').length,estimatedMinutes:minutes.reduce((a,b)=>a+b,0),medianMinutes:minutes.length?((minutes[Math.floor((minutes.length-1)/2)]??0)+(minutes[Math.floor(minutes.length/2)]??0))/2:0,
    weekly:Array.from({length:weeks},(_,i)=>{const start=epoch-((f.days??60)-i*7)*day,end=Math.min(epoch,start+7*day);return {name:new Date(start).toISOString().slice(5,10),value:done.filter(e=>Date.parse(e.at)>=start&&Date.parse(e.at)<end).length};}),
    adventures:metricAdventures,categories:CATEGORIES.map(name=>({name,value:done.filter(e=>adventures.find(a=>a.slug===e.slug)?.category===name).length})),
    titles:['Not started',...TITLES.map(t=>t.name)].map(name=>({name,value:people.filter(p=>p.title===name).length})),orgs:group(Object.keys(ORG_TEAMS),'org'),professions:group(EMPLOYEE_PROFESSIONS,'profession')};
  },
  listAdminAdventures:()=>adventures,
  saveAdminAdventure(a){if(!a.slug.trim()||!a.title.trim())throw new Error('A title and slug are required.'); adventures=[...adventures.filter(x=>x.slug!==a.slug),{...a}];notify();},
  setAdventureWave(slug,wave){adventures=adventures.map(a=>a.slug===slug?{...a,wave,isOpen:wave===1,status:a.status==='Draft'?'Draft':wave===1?'Open':'Scheduled'}:a);notify();},
  setAdventureStatus(slug,status){adventures=adventures.map(a=>a.slug===slug?{...a,status,isOpen:status==='Open'}:a);notify();},
  getAdminWaves:()=>waves,
  saveAdminWave(w){waves=waves.map(x=>x.number===w.number?w:x);notify();},
  getAdminAnnouncement:()=>announcement,
  saveAdminAnnouncement(a){announcement={...a};notify();},
  listAdmins:()=>admins,
  addAdmin(id){if(data.people.some(p=>p.id===id)&&!admins.includes(id)){admins=[...admins,id];notify();}},
 };
}
