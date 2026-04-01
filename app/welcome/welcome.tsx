import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    window.location.href = "/MENU.pdf";
  }, []);

  return null;
}
