import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tone Eriksen Møbelrestaurering" },
    { name: "description", content: "Profesjonell møbelrestaurering i Oslo" },
  ];
}

export default function Home() {
  return <Welcome />;
}
