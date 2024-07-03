import "./App.css";
import "./globals.css";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

import Skills from "./my-components/Skills/Skills";
import Questions from "./my-components/Questions/Questions";
import NumberOfQuestions from "./my-components/NumberOfQuestions/NumberOfQuestions";
import { SKILLS } from "./assets/constants";
import { Loader2 } from "lucide-react";
import Difficulty from "./my-components/Difficulty/Difficulty";

const App = () => {
  const { toast } = useToast();
  const headingRef = useRef(null);
  const [skill, setSkill] = useState(null);
  const [number, setNumber] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [questions, setQuestions] = useState([
  //   {
  //     question:
  //       "What is the purpose of shouldComponentUpdate() method in React.js?",
  //     answer:
  //       "The shouldComponentUpdate() method is used to let React know if a component’s output is not affected by the current change in state or props. It allows for performance optimizations by preventing unnecessary re-renders.",
  //   },
  //   {
  //     question: "How does React handle events?",
  //     answer:
  //       "In React, event handling is done by using camelCase to name the events, and passing a function to the event handler. This function will be triggered when the event occurs.",
  //   },
  //   {
  //     question: "Explain the concept of state in React.js.",
  //     answer:
  //       "In React, state is an object that represents the parts of a component that can change over time. State allows components to manage dynamic data and update the UI in response to user actions or other events.",
  //   },
  //   {
  //     question: "What is JSX in React.js?",
  //     answer:
  //       "JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their React components. It provides a more concise and familiar way to define the structure of the UI.",
  //   },
  //   {
  //     question: "How can you pass data between components in React.js?",
  //     answer:
  //       "Data can be passed between components in React.js by using props. Props are read-only and provide a way to pass data from parent to child components.",
  //   },
  // ]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    headingRef?.current?.scrollIntoView();
  }, [questions]);

  const generateQuestions = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuestions(null);
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/generate-questions`,
        {
          skills: skill,
          numberOfQuestion: parseInt(number) || 1,
          difficulty: difficulty || "Easy",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setQuestions(JSON.parse(data?.data?.questions[0]?.content));
    } catch (err) {
      console.error(err);
      toast({
        title: "Some Error Occured",
        description: err?.response?.data?.error || err?.message,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="absolute top-0 left-0 m-4">
        <Difficulty setDifficulty={setDifficulty} />
      </div>
      <main className="p-4 w-full h-[85vh] flex justify-center items-center flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            AI Powered Assessments
          </h2>
          <p className="text-muted-foreground">
            Select the desired skill from the list below
          </p>
        </div>
        <form
          className="mt-5 flex flex-row gap-2 justify-center items-center text-slate-600 text-sm font-medium flex-wrap"
          onSubmit={generateQuestions}
        >
          I want
          <NumberOfQuestions
            rangeStart={1}
            rangeEnd={10}
            setNumber={setNumber}
            number={number}
          />
          Question(s) For
          <Skills skills={SKILLS} setSkill={setSkill} />
          <Button disabled={loading} type="submit">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Get Questions
          </Button>
        </form>
      </main>
      {questions && Array.isArray(questions) && questions?.length !== 0 && (
        <article className="p-4 w-8/12 mx-auto">
          <h2
            className="text-2xl font-bold tracking-tight text-center mb-3"
            ref={headingRef}
          >
            Questions
          </h2>
          <Questions questions={questions} />
        </article>
      )}
    </>
  );
};

export default App;
