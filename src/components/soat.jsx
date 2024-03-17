import React, { useState, useEffect } from "react";

function SoatComponent() {
  const [soat, setSoat] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Kompyuterdagi joriy vaqtni olish
      const joriyVaqt = new Date();
      const soat =
        joriyVaqt.getHours() +
        ":" +
        joriyVaqt.getMinutes() +
        ":" +
        joriyVaqt.getSeconds();
      setSoat(soat);
    }, 1000); // Har 1 sekundda bir yangilash

    return () => clearInterval(intervalId); // Component o'chirilganda intervalni bekor qilish
  }, []);

  return (
    <div>
      <h1>{soat}</h1>
    </div>
  );
}

export default SoatComponent;
