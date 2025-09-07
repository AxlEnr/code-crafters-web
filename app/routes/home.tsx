import type { Route } from "./+types/home";
import { Index } from "../index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code Crafters" },
    { 
      name: "Tu mejor opción para aplicaciones multiplataforma, escalables y llamativas",
      content: "Bienvenidos a Code Crafters!" 
    },
  ];
}

export default function Home() {
  return <Index />;
}
