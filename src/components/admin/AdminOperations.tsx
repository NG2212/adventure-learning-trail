import { useState } from "react";
import { Plus, Save } from "lucide-react";
import { toast } from "sonner";
import { store, useStoreState } from "@/store";
import { TITLES } from "@/lib/titles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section, SelectField, useAdminView } from "./AdminCommon";
export function AdminWaves() {
  useStoreState();
  const [announcement, setAnnouncement] = useState(() => store.getAdminAnnouncement());
  const [dates, setDates] = useState(() =>
    Object.fromEntries(store.getAdminWaves().map((w) => [w.number, w.date])),
  );
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {store.getAdminWaves().map((w) => (
          <section key={w.number} className="border-t py-5">
            <div className="mb-4 flex flex-wrap items-end gap-3">
              <h2 className="mr-auto text-xl">Wave {w.number}</h2>
              <label className="text-xs">
                Opens on
                <Input
                  type="date"
                  aria-label={`Wave ${w.number} date`}
                  value={dates[w.number] ?? w.date}
                  onChange={(e) => setDates({ ...dates, [w.number]: e.target.value })}
                />
              </label>
              <Button
                size="icon"
                variant="outline"
                title={`Save Wave ${w.number} date`}
                aria-label={`Save Wave ${w.number} date`}
                onClick={() => {
                  const date = dates[w.number];
                  if (date) {
                    store.saveAdminWave({ ...w, date });
                    toast.success("Wave date saved");
                  }
                }}
              >
                <Save className="size-4" />
              </Button>
            </div>
            <ul className="space-y-2">
              {store
                .listAdminAdventures()
                .filter((a) => a.wave === w.number)
                .map((a) => (
                  <li
                    key={a.slug}
                    className="flex items-center justify-between gap-3 border-b py-2"
                  >
                    <span className="text-sm">{a.title}</span>
                    <select
                      aria-label={`Wave for ${a.title}`}
                      className="rounded border bg-background p-1 text-xs"
                      value={a.wave}
                      onChange={(e) => store.setAdventureWave(a.slug, Number(e.target.value))}
                    >
                      {store.getAdminWaves().map((x) => (
                        <option key={x.number} value={x.number}>
                          W{x.number}
                        </option>
                      ))}
                    </select>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
      <Section title="Announcement banner">
        <div className="max-w-2xl space-y-4">
          <label className="block text-xs font-medium">
            Banner text
            <Textarea
              className="mt-2"
              aria-label="Announcement text"
              value={announcement.text}
              onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-xs">
              Show from
              <Input
                type="date"
                aria-label="Show from"
                value={announcement.showFrom}
                onChange={(e) => setAnnouncement({ ...announcement, showFrom: e.target.value })}
              />
            </label>
            <label className="text-xs">
              Show until
              <Input
                type="date"
                aria-label="Show until"
                value={announcement.showUntil}
                onChange={(e) => setAnnouncement({ ...announcement, showUntil: e.target.value })}
              />
            </label>
          </div>
          <Button
            onClick={() => {
              if (announcement.showUntil < announcement.showFrom) {
                toast.error("Show until must follow show from.");
                return;
              }
              store.saveAdminAnnouncement(announcement);
              toast.success("Announcement saved");
            }}
          >
            <Save className="size-4" />
            Save announcement
          </Button>
        </div>
      </Section>
    </>
  );
}
export function AdminSettings() {
  useStoreState();
  const { managerView } = useAdminView();
  const [personId, setPersonId] = useState("");
  const people = store.listPeople(),
    admins = store.listAdmins();
  return (
    <>
      {!managerView && (
        <Section title="L&D admins">
          <ul className="mb-6 space-y-3">
            {admins.map((id) => (
              <li
                key={id}
                className="flex max-w-xl items-center justify-between border-b pb-3 text-sm"
              >
                <span>{people.find((p) => p.id === id)?.name}</span>
                <span className="text-xs text-primary">Admin</span>
              </li>
            ))}
          </ul>
          <div className="flex max-w-xl items-end gap-3">
            <div className="flex-1">
              <SelectField
                label="Employee"
                value={personId}
                options={people
                  .filter((p) => !admins.includes(p.id))
                  .map((p) => ({ value: p.id, label: p.name }))}
                all="Choose employee"
                onChange={setPersonId}
              />
            </div>
            <Button
              disabled={!personId}
              onClick={() => {
                store.addAdmin(personId);
                setPersonId("");
                toast.success("Admin added");
              }}
            >
              <Plus className="size-4" />
              Add admin
            </Button>
          </div>
        </Section>
      )}
      <Section title="Title thresholds">
        <dl className="max-w-xl space-y-3">
          {TITLES.map((t) => (
            <div key={t.name} className="flex justify-between border-b pb-3 text-sm">
              <dt>{t.name}</dt>
              <dd>{t.threshold} completed</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">
          Read-only in this mockup; configurable in the real build.
        </p>
      </Section>
    </>
  );
}
