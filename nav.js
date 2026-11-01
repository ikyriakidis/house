// Plot + version + view switcher, shared by every design page.
// Include with <script src="(relative path to)/nav.js"></script> at the end of a page.
//
// ALL navigation data lives in PLOTS below. Versions are listed newest first;
// the first entry of a plot is its latest version. To add a version, add one line
// at the top of that plot's "versions" array:
//   { id: "v8", path: "v8", title: "Short title", views: ["plan", "3d"] },
// "path" is the folder relative to the site root; "views" are the pages in it
// (plan -> plan.html, 3d -> 3d.html, electrical -> electrical.html, cost -> cost.html).
(function () {
  "use strict";

  var PLOTS = [
    {
      id: "plot1",
      label: "Plot 1",
      note: "19 × 53 m, street south",
      rootVersion: "v7", // the root plan.html / 3d.html / electrical.html are copies of this version
      compare: "compare.html",
      versions: [
        { id: "v8", path: "v8", title: "Plot 2 v5 house, 13 m wide, garage to the street", views: ["plan", "3d", "cost"] },
        { id: "v7", path: "v7", title: "Χελώνα, composite structure", views: ["plan", "3d", "electrical"] },
        { id: "v6", path: "v6", title: "Pool by the terrace, pergola", views: ["plan", "3d", "electrical"] },
        { id: "v5", path: "v5", title: "Overflow pool, electrical", views: ["plan", "3d", "electrical"] },
        { id: "v4", path: "v4", title: "Wider garage, flood protection", views: ["plan", "3d"] },
        { id: "v3", path: "v3", title: "Garage door into the pantry", views: ["plan", "3d"] },
        { id: "v2", path: "v2", title: "Shared entrance", views: ["plan", "3d"] },
        { id: "v1", path: "v1", title: "Mudroom garage–kitchen", views: ["plan", "3d"] }
      ]
    },
    {
      id: "plot2",
      label: "Plot 2",
      note: "opposite the community office",
      versions: [
        { id: "v5", path: "plot2/v5", title: "Living room on the pool, playroom", views: ["plan", "3d"] },
        { id: "v4", path: "plot2/v4", title: "Pool house set back, service yard", views: ["plan", "3d"] },
        { id: "v3", path: "plot2/v3", title: "Short hall, dining, inner pool", views: ["plan", "3d"] },
        { id: "v2", path: "plot2/v2", title: "L-shape, pool by the road", views: ["plan", "3d"] },
        { id: "v1", path: "plot2/v1", title: "Garage north, entrance east", views: ["plan", "3d"] }
      ]
    }
  ];

  var VIEW_LABELS = { plan: "Plan", "3d": "3D", electrical: "Electrical", cost: "Cost" };
  var VIEW_ORDER = ["plan", "3d", "electrical", "cost"];

  window.HOUSE_NAV = { plots: PLOTS, viewLabels: VIEW_LABELS };

  // Inside compare.html's iframes the outer page already has its own controls.
  try { if (window.self !== window.top) return; } catch (e) { return; }

  // Site root = the folder nav.js is served from.
  var script = document.currentScript;
  if (!script || !script.src) return;
  var root = script.src.replace(/[?#].*$/, "").replace(/[^\/]*$/, "");
  var here = location.href.replace(/[?#].*$/, "");
  if (here.indexOf(root) !== 0) return;
  var rel = decodeURIComponent(here.slice(root.length)); // e.g. "plot2/v4/plan.html", "v3/3d.html", "plan.html"
  if (rel === "" || /\/$/.test(rel)) rel += "index.html";
  rel = rel.replace(/\.html$/, "");
  var slash = rel.lastIndexOf("/");
  var folder = slash < 0 ? "" : rel.slice(0, slash);
  var view = rel.slice(slash + 1);
  if (!VIEW_LABELS[view]) return; // index, compare and other pages: no bar

  var plot = null, version = null;
  PLOTS.forEach(function (p) {
    p.versions.forEach(function (v) { if (v.path.replace(/\/+$/, "") === folder) { plot = p; version = v; } });
    if (folder === "" && p.rootVersion && !plot) p.versions.forEach(function (v) { if (v.id === p.rootVersion) { plot = p; version = v; } });
  });
  if (!plot) return;

  function url(v, wantView) {
    var vw = v.views.indexOf(wantView) >= 0 ? wantView : (v.views.indexOf("plan") >= 0 ? "plan" : v.views[0]);
    return root + v.path.replace(/\/+$/, "") + "/" + vw + ".html";
  }

  var css = "" +
    ".hnav{--hn-bg:var(--sheet,#fbfcfa);--hn-ink:var(--ink,#1e292c);--hn-soft:var(--ink-soft,#5b676a);--hn-rule:var(--rule,#c9d0cc);--hn-acc:var(--accent,#b5532f);--hn-field:var(--paper,#f2f4f1);" +
    "box-sizing:border-box;max-width:1280px;margin:0 auto 14px;display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;padding:6px 10px;" +
    "background:var(--hn-bg);color:var(--hn-ink);border:1px solid var(--hn-rule);border-radius:4px;font:500 13px/1.3 var(--f-body,'Instrument Sans',system-ui,-apple-system,'Segoe UI',sans-serif);}" +
    "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .hnav{--hn-bg:var(--sheet,#1b2326);--hn-ink:var(--ink,#e3e9e6);--hn-soft:var(--ink-soft,#9aa7a8);--hn-rule:var(--rule,#34403f);--hn-acc:var(--accent,#e58a63);--hn-field:var(--paper,#151b1d);}}" +
    ".hnav *{box-sizing:border-box}" +
    ".hnav a{color:var(--hn-acc);text-decoration:none}.hnav a:hover{text-decoration:underline}" +
    ".hnav .hn-home{font-family:var(--f-display,'Archivo','Arial Narrow',system-ui,sans-serif);font-stretch:80%;font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:12px}" +
    ".hnav label{display:flex;align-items:center;gap:6px;min-width:0;margin:0}" +
    ".hnav .hn-lab{font-family:var(--f-display,'Archivo','Arial Narrow',system-ui,sans-serif);font-stretch:80%;text-transform:uppercase;letter-spacing:.08em;font-size:11px;font-weight:650;color:var(--hn-soft)}" +
    ".hnav select{font:500 13px var(--f-body,'Instrument Sans',system-ui,sans-serif);color:var(--hn-ink);background:var(--hn-field);border:1px solid var(--hn-rule);border-radius:3px;padding:3px 6px;min-width:0;max-width:100%;cursor:pointer}" +
    ".hnav select:focus-visible,.hnav a:focus-visible{outline:2px solid var(--hn-acc);outline-offset:1px}" +
    ".hnav .hn-ver{flex:0 1 auto;min-width:0}.hnav .hn-ver select{width:100%;max-width:21rem}" +
    ".hnav .hn-cmp{margin-left:auto;font-size:12.5px}" +
    "@media (max-width:600px){.hnav{gap:6px 10px}.hnav .hn-ver{flex:1 1 100%;order:5}.hnav .hn-ver select{max-width:none}.hnav .hn-cmp{margin-left:0}}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }
  function field(labelText, cls, sel) {
    var l = el("label", { "class": cls || "" });
    l.appendChild(el("span", { "class": "hn-lab" }, labelText));
    l.appendChild(sel);
    return l;
  }

  var bar = el("nav", { "class": "hnav", "aria-label": "Plot and version" });
  bar.appendChild(el("a", { "class": "hn-home", href: root + "index.html" }, "Home"));

  var plotSel = el("select", { "aria-label": "Plot" });
  PLOTS.forEach(function (p) {
    var o = el("option", { value: p.id, title: p.note || "" }, p.label);
    if (p === plot) o.selected = true;
    plotSel.appendChild(o);
  });
  plotSel.addEventListener("change", function () {
    PLOTS.forEach(function (p) { if (p.id === plotSel.value) location.href = url(p.versions[0], view); });
  });
  bar.appendChild(field("Plot", "", plotSel));

  var verSel = el("select", { "aria-label": "Version" });
  plot.versions.forEach(function (v, i) {
    var o = el("option", { value: v.id }, v.id + (i === 0 ? " (latest)" : "") + " · " + v.title);
    if (v === version) o.selected = true;
    verSel.appendChild(o);
  });
  verSel.addEventListener("change", function () {
    plot.versions.forEach(function (v) { if (v.id === verSel.value) location.href = url(v, view); });
  });
  bar.appendChild(field("Version", "hn-ver", verSel));

  var viewSel = el("select", { "aria-label": "View" });
  VIEW_ORDER.forEach(function (k) {
    var has = version.views.indexOf(k) >= 0;
    if (!has && k !== view) return;
    var o = el("option", { value: k }, VIEW_LABELS[k]);
    if (!has) o.disabled = true;
    if (k === view) o.selected = true;
    viewSel.appendChild(o);
  });
  viewSel.addEventListener("change", function () { location.href = url(version, viewSel.value); });
  bar.appendChild(field("View", "", viewSel));

  if (plot.compare) bar.appendChild(el("a", { "class": "hn-cmp", href: root + plot.compare }, "Compare versions"));

  // Line the bar up with the page's own content column (.wrap max-width varies per page).
  var first = document.body.firstElementChild;
  if (first) {
    var mw = getComputedStyle(first).maxWidth;
    if (mw && mw !== "none") bar.style.maxWidth = mw;
  }
  document.body.insertBefore(bar, document.body.firstChild);
})();
