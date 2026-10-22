import { createContext, useContext, type ReactNode } from 'react';
import { Download } from 'lucide-react';
import { store, useStoreState } from '@/store';
import { ORG_TEAMS, EMPLOYEE_PROFESSIONS, type AdminFilters } from '@/store/adminTypes';
import { Button } from '@/components/ui/button';
export const AdminViewContext = createContext({managerView:false,setManagerView:(_value:boolean)=>{}});
export const useAdminView = () => useContext(AdminViewContext);
export const number = (value:number) => value.toLocaleString('en-US', {maximumFractionDigits:1});
export const percent = (value:number) => `${number(value)}%`;
export const duration = (minutes:number) => minutes>=60?`${number(minutes/60)} hr`:`${number(minutes)} min`;
export function SelectField({label,value,onChange,options,all='All',disabled=false}:{label:string;value:string;onChange:(value:string)=>void;options:(string|{value:string;label:string})[];all?:string|null;disabled?:boolean}) {
 return <label className="flex min-w-0 flex-col gap-1 text-xs font-medium text-muted-foreground">{label}<select aria-label={label} disabled={disabled} className="h-9 w-full min-w-0 rounded-md border bg-background px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" value={value} onChange={e=>onChange(e.target.value)}>{all!==null&&<option value="">{all}</option>}{options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}</select></label>;
}
export function AdminFiltersBar({filters,onChange,employees=false}:{filters:AdminFilters;onChange:(f:AdminFilters)=>void;employees?:boolean}) {
 useStoreState(); const {managerView}=useAdminView();
 const managers=store.listPeople().filter(p=>p.isManager);
 const set=(key:keyof AdminFilters,value:string|number|boolean)=>onChange({...filters,[key]:value});
 return <div className="mb-6 grid grid-cols-2 gap-3 border-y py-4 md:grid-cols-3 xl:grid-cols-6">
  <SelectField label="Org" value={filters.org??''} onChange={v=>onChange({...filters,org:v,team:'',managerId:''})} options={Object.keys(ORG_TEAMS)}/>
  <SelectField label="Team" value={filters.team??''} onChange={v=>set('team',v)} options={filters.org?ORG_TEAMS[filters.org]??[]:Object.values(ORG_TEAMS).flat()}/>
  {!managerView&&<SelectField label="Manager" value={filters.managerId??''} onChange={v=>set('managerId',v)} options={managers.map(p=>({value:p.id,label:p.name}))}/>}
  <SelectField label="Profession" value={filters.profession??''} onChange={v=>set('profession',v)} options={EMPLOYEE_PROFESSIONS}/>
  {employees?<><SelectField label="Title" value={filters.title??''} onChange={v=>set('title',v)} options={['Not started','First Steps','Day Tripper','Frequent Flyer','Globetrotter']}/><label className="flex items-end gap-2 pb-2 text-sm"><input type="checkbox" checked={filters.inactive??false} onChange={e=>set('inactive',e.target.checked)}/>Inactive for 30+ days</label></>:<><SelectField label="Wave" value={filters.wave??''} onChange={v=>set('wave',v)} options={['1','2','3','4'].map(v=>({value:v,label:`Wave ${v}`}))}/><SelectField label="Date range" value={String(filters.days??60)} onChange={v=>set('days',Number(v))} options={[7,30,60].map(v=>({value:String(v),label:`Last ${v} days`}))} all={null}/></>}
 </div>;
}
export function downloadCsv(filename:string,headers:string[],rows:(string|number|null)[][]){
 const cell=(value:string|number|null)=>`"${String(value??'').replace(/"/g,'""')}"`;
 const csv='\uFEFF'+[headers,...rows].map(row=>row.map(cell).join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'})); const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
}
export function CsvButton({onClick}:{onClick:()=>void}) {return <Button variant="outline" size="sm" onClick={onClick}><Download className="size-4"/>Download CSV</Button>;}
export function Section({title,children,action}:{title:string;children:ReactNode;action?:ReactNode}) {return <section className="min-w-0 border-t py-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="text-lg">{title}</h2>{action}</div>{children}</section>;}
export function Bars({data,color='primary'}:{data:{name:string;value:number;secondary?:number}[];color?:'primary'|'coral'|'info'|'success'}) {
 const max=Math.max(1,...data.map(d=>Math.max(d.value,d.secondary??0)));
 return <div className="space-y-3">{data.map(d=><div key={d.name} className="grid grid-cols-[minmax(0,1fr)_80px] gap-2"><div><p className="mb-1 truncate text-xs" title={d.name}>{d.name}</p><svg role="img" aria-label={`${d.name}: ${d.value}${d.secondary!==undefined?` completions, ${d.secondary} opens`:''}`} viewBox="0 0 400 12" className="h-3 w-full" preserveAspectRatio="none"><rect width="400" height="12" rx="3" fill="var(--color-muted)"/><rect width={d.value/max*400} height="12" rx="3" fill={`var(--color-${color})`}/></svg></div><p className="self-end text-right text-xs tabular-nums">{number(d.value)}{d.secondary!==undefined&&<span className="block text-muted-foreground">{number(d.secondary)} opens</span>}</p></div>)}</div>;
}
export const tableClass='w-full text-left text-xs [&_th]:whitespace-nowrap [&_th]:px-3 [&_th]:py-3 [&_th]:font-semibold [&_td]:px-3 [&_td]:py-3 [&_tbody_tr]:border-t [&_thead]:bg-muted';
