import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Skills = ({ skills = [], setSkill }) => {
  return (
    <Select onValueChange={(e) => setSkill(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Skill" />
      </SelectTrigger>
      <SelectContent>
        {skills.map((skill) => (
          <SelectItem key={skill} value={skill}>
            {skill}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Skills;
