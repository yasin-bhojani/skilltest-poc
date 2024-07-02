import "./App.css";
import "./globals.css";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import Skills from "./my-components/Skills/Skills";
import { SKILLS } from "./assets/constants";

const App = () => {
  const [skill, setSkill] = useState(null);
  async function generateQuestions(e) {
    e.preventDefault();
    console.log("submit");
    const data = await axios.post(
      "http://localhost:8080/generate-questions",
      { skills: skill },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(data);
  }

  return (
    <main className="p-4 w-full h-[90vh] flex justify-center items-center flex-col">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Select the desired skill from the list below
        </p>
      </div>
      <form className="mt-5 flex flex-row gap-2" onSubmit={generateQuestions}>
        <Skills skills={SKILLS} setSkill={setSkill} />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
};

export default App;
