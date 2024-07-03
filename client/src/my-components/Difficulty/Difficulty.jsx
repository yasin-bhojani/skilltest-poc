import { DIFFICULTIES } from "@/assets/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField, FormLabel } from "@/components/ui/form";

const Difficulty = ({ setDifficulty }) => {
  return (
    <>
      <span className="text-xs text-gray-800">Difficulty</span>
      <Select
        onValueChange={(e) => setDifficulty(e)}
        defaultValue={DIFFICULTIES[0]}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Difficulty" />
        </SelectTrigger>
        <SelectContent>
          {DIFFICULTIES.map((difficulty) => (
            <SelectItem key={difficulty} value={difficulty}>
              {difficulty}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default Difficulty;
