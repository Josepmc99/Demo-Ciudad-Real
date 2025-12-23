"use client";

import React from "react";

type TableRow = { especies: string[]; unidades: number[] };

function toRows(table?: TableRow[]) {
  if (!table || table.length === 0) return [];
  // Tu estructura es [{ especies: [...], unidades: [...] }]
  const first = table[0];
  const especies = first?.especies ?? [];
  const unidades = first?.unidades ?? [];
  const len = Math.min(especies.length, unidades.length);

  return Array.from({ length: len }, (_, i) => ({
    especie: especies[i],
    unidades: unidades[i],
  })).filter((r) => r.especie && Number.isFinite(r.unidades));
}

export default function SpeciesTable({
  title,
  table,
}: {
  title?: string;
  table?: TableRow[];
}) {
  const rows = toRows(table);
  if (rows.length === 0) return null;

  return (
    <div className="mt-4">
      {title && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* wrapper responsive */}
        <div className="overflow-x-auto">
          <table className="min-w-[420px] w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 font-semibold text-slate-700">
                  Especie
                </th>
                <th className="px-3 py-2 font-semibold text-slate-700 text-right">
                  Unidades
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={`${r.especie}-${idx}`}
                  className="border-t border-slate-100 hover:bg-slate-50/60"
                >
                  <td className="px-3 py-2 text-slate-800">{r.especie}</td>
                  <td className="px-3 py-2 text-slate-800 text-right tabular-nums">
                    {r.unidades}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pie opcional */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-3 py-2 text-[11px] sm:text-xs text-slate-500">
          <span>{rows.length} especies</span>
          <span className="tabular-nums">
            Total: {rows.reduce((acc, r) => acc + (Number(r.unidades) || 0), 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
