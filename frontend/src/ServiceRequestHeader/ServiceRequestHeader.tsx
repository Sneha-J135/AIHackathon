import React from "react";

export const ServiceRequestHeader: React.FC = () => (
  <>
    <style>
      {`
      :root{
        --bg:#ffffff;
        --text:#111827;
        --muted:#6b7280;
        --border:#e5e7eb;
        --primary:#2563eb;
        --badge:#f59e0b;
        --success:#22c55e;
        --danger:#ef4444;
        --chip:#f3f4f6;
        --shadow:0 8px 24px rgba(0,0,0,.06);
        --radius:14px;
      }
      * { box-sizing: border-box; }
      /* scoped root for the service request header to avoid global body overrides */
      .sr-root {
        font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        color:var(--text);
        -webkit-font-smoothing: antialiased;
        line-height:1.4;
        padding: 0; /* keep header flush with main content */
        background: transparent;
      }
      .card{
        width:100%;
        background:var(--bg);
        border:1px solid var(--border);
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:16px;
      }
      .row{ display:flex; align-items:center; gap:16px; }
      .between{ justify-content:space-between; }
      .left{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
      .id{
        display:inline-flex; align-items:center; gap:8px; font-weight:600; color:#047857;
        padding:6px 10px; border:1px solid #d1fae5; background:#ecfdf5; border-radius:10px; font-size:14px;
      }
      .id svg{ width:16px; height:16px; }
      h1.title{
        margin:0; font-weight:700; font-size:24px;
      }
      .meta{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
      .badge{
        background: #fff7ed;
        color:#9a3412;
        border:1px solid #fed7aa;
        font-weight:700; font-size:12px; letter-spacing:.02em;
        padding:6px 10px; border-radius:999px;
      }
      .icon-btn{
        height:30px; width:30px; display:inline-grid; place-items:center; border-radius:8px;
        border:1px solid var(--border); background:#fff; cursor:pointer;
      }
      .icon-btn svg{ width:16px; height:16px; fill:#9ca3af; }
      .icon-btn:hover{ background:#f9fafb; }
      .due{
        display:flex; align-items:center; gap:8px; font-size:14px; color:var(--muted);
        border:1px solid var(--border); border-radius:8px; padding:6px 10px; background:#fff;
      }
      .due b{ color:#ef4444; font-weight:700; }
      .requested{
        display:flex; align-items:center; gap:8px; color:var(--muted); font-size:14px;
      }
      .avatars{ display:flex; }
      .avatar{
        width:24px; height:24px; border-radius:999px; background:#e5e7eb; display:grid; place-items:center;
        border:2px solid #fff; margin-left:-6px; font-weight:700; color:#374151; font-size:11px;
      }
      .avatar:first-child{ margin-left:0; }
      .right{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
      .btn{ border:1px solid var(--border); background:#fff; padding:8px 12px; border-radius:10px; font-weight:600; cursor:pointer; }
      .btn:hover{ background:#f9fafb; }
      .btn-primary{ background:var(--primary); color:#fff; border-color:var(--primary); }
      .btn-primary:hover{ filter:brightness(.95); }
      .kebab{ width:34px; height:34px; border-radius:10px; border:1px solid var(--border); background:#fff; display:grid; place-items:center; cursor:pointer; }
      .dot{ width:4px; height:4px; background:#9ca3af; border-radius:999px; display:block; }
      .kebab .dot + .dot{ margin-top:3px; }
      .stack{ display:flex; flex-direction:column; gap:8px; }
      @media (max-width: 880px){
        .between{ align-items:flex-start; gap:14px; }
        .right{ width:100%; justify-content:flex-start; }
        .row.wrap { flex-wrap:wrap; }
      }
      `}
    </style>
    <div className="sr-root">
      <div className="card">
        <div className="row between wrap">
          {/* Left side */}
          <div className="stack">
            <div className="left">
              <span className="id" title="Service Request">
                {/* check-circle icon */}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm-1 14-4-4 1.414-1.414L11 12.172l5.586-5.586L18 8l-7 8z"></path>
                </svg>
                <span>SR-243</span>
              </span>
              <h1 className="title">Loose electrical wires near park</h1>
            </div>
            <div className="meta">
              <span className="badge">IN PROGRESS</span>
              <button className="icon-btn" aria-label="Pin or flag">
                <svg viewBox="0 0 24 24">
                  <path d="M6 2h12v6l-3 3v7l-3-2-3 2v-7L6 8V2z"></path>
                </svg>
              </button>
              <span className="due">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 7H5v10h14V9z"></path>
                </svg>
                <span>
                  Due Date: <b>6 Jan 2025</b>
                </span>
              </span>
              <span className="requested">
                <span>Requested by</span>
                <span className="avatars">
                  <span className="avatar" title="Gerald S Smith">
                    GS
                  </span>
                  <span className="avatar" title="User 2">
                    A
                  </span>
                  <span className="avatar" title="User 3">
                    B
                  </span>
                  <span className="avatar" title="User 4">
                    C
                  </span>
                </span>
                <span>+ 4 Others</span>
              </span>
            </div>
          </div>
          {/* Right side */}
          <div className="right">
            <button className="btn" type="button">
              + Add new
            </button>
            <button className="btn btn-primary" type="button">
              Next action ▾
            </button>
            <button className="kebab" aria-label="More options">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
