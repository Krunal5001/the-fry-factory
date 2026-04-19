import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    window.location.href = "/Menu.pdf";
  }, []);

  return null;
}
