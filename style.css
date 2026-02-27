:root{
  --bg0:#050813;
  --bg1:#070B14;
  --bg2:#0B1020;
  --panel: rgba(255,255,255,0.06);
  --panel2: rgba(255,255,255,0.08);
  --border: rgba(255,255,255,0.10);
  --accent:#00F5FF;
  --accent2:#8A7DFF;
  --good:#2CFF7E;
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.68);
  --faint: rgba(255,255,255,0.50);
  --mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --sans: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --shadow: 0 22px 70px rgba(0,0,0,0.55);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family:var(--sans);
  color:var(--text);
  background:
    radial-gradient(1100px 700px at 18% 10%, rgba(0,245,255,0.10), transparent 60%),
    radial-gradient(900px 650px at 80% 25%, rgba(138,125,255,0.10), transparent 55%),
    linear-gradient(180deg, var(--bg0), var(--bg2));
  overflow:hidden;
}

a{ color:inherit; text-decoration:none; }
a:hover{ color: var(--accent); }

#scrollProgress{
  position:fixed; top:0; left:0;
  height:4px; width:100%;
  background: rgba(255,255,255,0.06);
  z-index:100;
}
#scrollProgress .bar{
  height:100%;
  width:0%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  box-shadow: 0 0 18px rgba(0,245,255,0.35);
}

.topbar{
  height:64px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 18px;
  background: rgba(5,8,16,0.50);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.brand{
  display:flex;
  gap:12px;
  align-items:center;
}
.brandDot{
  width:10px;height:10px;border-radius:999px;
  background: var(--accent);
  box-shadow: 0 0 22px rgba(0,245,255,0.55);
}
.brandTitle{
  font-weight:800;
  letter-spacing:0.12em;
  font-size:12px;
}
.brandSub{
  font-family: var(--mono);
  font-size:12px;
  color: var(--muted);
  margin-top:2px;
}

.topActions{
  display:flex;
  gap:10px;
  align-items:center;
}

.ghostBtn, .primaryBtn{
  border-radius:999px;
  padding:10px 12px;
  font-weight:700;
  font-size:13px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  cursor:pointer;
  transition: transform .14s ease, border-color .14s ease, background .14s ease;
}
.ghostBtn:hover{ transform: translateY(-1px); border-color: rgba(0,245,255,0.22); }
.primaryBtn{
  border-color: rgba(0,245,255,0.22);
  background: rgba(0,245,255,0.10);
}
.primaryBtn:hover{ transform: translateY(-1px); border-color: rgba(0,245,255,0.32); }

.layout{
  height: calc(100vh - 64px);
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
}

.graphPane{
  position:relative;
  border-right: 1px solid rgba(255,255,255,0.08);
  overflow:hidden;
}

#graphCanvas{
  width:100%;
  height:100%;
  display:block;
}

.graphVignette{
  position:absolute;
  inset:0;
  pointer-events:none;
  background:
    radial-gradient(900px 600px at 30% 25%, rgba(0,245,255,0.10), transparent 60%),
    radial-gradient(850px 600px at 75% 50%, rgba(138,125,255,0.12), transparent 60%),
    radial-gradient(900px 800px at 50% 80%, rgba(0,0,0,0.55), transparent 60%);
  mix-blend-mode: screen;
  opacity:0.7;
}

.graphHud{
  position:absolute;
  left:16px;
  top:14px;
  z-index:5;
  width: 260px;
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.24);
  backdrop-filter: blur(10px);
  padding: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.45);
}
.hudLine{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}
.hudLabel{
  font-family: var(--mono);
  font-size:12px;
  color: var(--faint);
}
.hudValue{
  font-family: var(--mono);
  font-size:12px;
  color: var(--muted);
}
.hudHint{
  margin-top:10px;
  font-family: var(--mono);
  font-size:12px;
  color: rgba(255,255,255,0.55);
  line-height:1.4;
}

.infoPane{
  overflow:auto;
  padding: 16px;
}

.panel{
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  box-shadow: var(--shadow);
  overflow:hidden;
}
.panelHead{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 14px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
}
.panelTitle{
  font-weight:900;
  letter-spacing:-0.01em;
}
.panelChip{
  font-family: var(--mono);
  font-size:12px;
  padding: 6px 10px;
  border-radius:999px;
  border: 1px solid rgba(0,245,255,0.22);
  background: rgba(0,245,255,0.08);
  color: rgba(0,245,255,0.95);
}
.panelBody{ padding: 14px; }
.panelFoot{
  padding: 12px 14px;
  border-top: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,0.18);
}
.lead{
  margin: 0 0 14px;
  color: var(--muted);
  line-height:1.7;
}
.quickStats{
  display:grid;
  gap: 10px;
  margin: 12px 0 14px;
}
.stat{
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
}
.k{
  font-family: var(--mono);
  font-size:12px;
  color: var(--faint);
}
.v{
  margin-top:6px;
  color: var(--muted);
  font-size:13px;
  line-height:1.35;
}

.ctaRow{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top: 10px;
}

.panelDynamic{
  display:grid;
  gap: 12px;
}
.card{
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
}
.cardTitle{
  font-weight:800;
  margin:0 0 8px;
}
.cardMeta{
  font-family: var(--mono);
  font-size:12px;
  color: var(--faint);
  margin-bottom:10px;
}
.cardText{
  margin:0;
  color: var(--muted);
  line-height:1.7;
  font-size: 14px;
}
.tagRow{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
.tag{
  font-family: var(--mono);
  font-size:12px;
  padding: 6px 10px;
  border-radius:999px;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.70);
  background: rgba(255,255,255,0.03);
}

.miniPanel{
  margin-top: 14px;
  border-radius: var(--radius);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  padding: 14px;
}
.miniTitle{
  font-family: var(--mono);
  font-size:12px;
  color: var(--faint);
  margin-bottom:10px;
}
.traitGrid{
  display:grid;
  gap:10px;
}
.trait{
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,0.14);
  color: var(--muted);
  line-height:1.45;
  font-size: 13px;
}

.mono{ font-family: var(--mono); }
.subtle{ color: rgba(255,255,255,0.60); }

/* Modal */
.modal{
  position:fixed; inset:0;
  display:none;
  z-index:200;
}
.modal[aria-hidden="false"]{ display:block; }
.modalBackdrop{
  position:absolute; inset:0;
  background: rgba(0,0,0,0.72);
  backdrop-filter: blur(8px);
}
.modalShell{
  position:absolute;
  left:50%; top:50%;
  transform: translate(-50%,-50%);
  width: min(960px, 92vw);
  max-height: 86vh;
  overflow:auto;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(12,16,28,0.92);
  box-shadow: 0 30px 120px rgba(0,0,0,0.75);
}
.modalClose{
  position:sticky;
  top:0;
  margin-left:auto;
  display:block;
  padding: 10px 16px;
  font-size: 22px;
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.80);
  cursor:pointer;
}
.modalClose:hover{ color: var(--accent); }
.modalContent{
  padding: 6px 18px 18px;
}

.dossierHead{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  align-items:baseline;
  justify-content:space-between;
  padding: 10px 0 8px;
  border-bottom: 1px solid rgba(255,255,255,0.10);
}
.dossierTitle{
  font-weight:900;
  font-size: 22px;
  margin:0;
}
.dossierBadge{
  font-family: var(--mono);
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0,245,255,0.22);
  background: rgba(0,245,255,0.08);
  color: rgba(0,245,255,0.92);
}
.dossierGrid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 14px;
}
.dossierBlock{
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  padding: 14px;
}
.dossierBlock h3{
  margin:0 0 8px;
  font-size: 14px;
  font-family: var(--mono);
  color: rgba(255,255,255,0.78);
}
.dossierBlock p{
  margin:0;
  color: var(--muted);
  line-height:1.7;
  font-size: 14px;
}
.dossierWide{
  grid-column: 1 / -1;
}
.dossierLinks{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top: 12px;
}
.linkBtn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  border-radius: 999px;
  padding: 10px 12px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.84);
  font-weight:700;
  font-size: 13px;
}
.linkBtn:hover{ border-color: rgba(0,245,255,0.25); color: var(--accent); }

@media (max-width: 1020px){
  body{ overflow:auto; }
  .layout{ height:auto; grid-template-columns: 1fr; }
  .graphPane{ height: 62vh; border-right:none; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .infoPane{ height:auto; }
  .dossierGrid{ grid-template-columns: 1fr; }
}
