import Welcome from "~/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The FRY Factory" },
    { name: "Cafe", content: "Welcome to The Fry Factory!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
