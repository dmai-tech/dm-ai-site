"use client";

import { useEffect, useState } from "react";

export default function TopHUD() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    }
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hud-top">
      <span>
        <span className="dot" />
        DM_AI :: ACTIVE
      </span>
      <span>v1.0 / 2026 / TPE / {time || "--:--"}</span>
    </div>
  );
}
