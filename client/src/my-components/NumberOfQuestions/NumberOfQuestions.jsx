import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const NumberOfQuestions = ({ rangeStart = 1, rangeEnd = 10, setNumber }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let nums = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      nums.push(i?.toString());
    }
    setNumbers(nums);
  }, [rangeStart, rangeEnd]);

  return (
    <Select onValueChange={(e) => setNumber(e)} defaultValue="1">
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder="Number" />
      </SelectTrigger>
      <SelectContent className="SelectContent">
        {numbers.map((num) => (
          <SelectItem key={num} value={num}>
            {num}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NumberOfQuestions;
