import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/assets/constants";

const Questions = ({ questions }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions?.map((question) => (
        <AccordionItem value={question?.question} key={question?.question}>
          <AccordionTrigger>{question?.question}</AccordionTrigger>
          <AccordionContent>{question?.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Questions;
