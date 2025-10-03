import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CalculatorFormProps = {
  onCalculate: (formData: CalculatorFormData) => void;
};

export type CalculatorFormData = {
  age: number;
  conditions: string[];
  medications: string;
  location: string;
  activity: string;
};

const CalculatorForm = ({ onCalculate }: CalculatorFormProps) => {
  const [age, setAge] = useState<number>(35);
  const [conditions, setConditions] = useState<string[]>([]);
  const [medications, setMedications] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [activity, setActivity] = useState<string>("");

  const healthConditions = [
    { id: "heart-disease", label: "Heart Disease" },
    { id: "diabetes", label: "Diabetes" },
    { id: "respiratory", label: "Respiratory Condition" },
    { id: "hypertension", label: "High Blood Pressure" },
  ];

  const handleConditionChange = (checked: boolean, condition: string) => {
    if (checked) {
      setConditions([...conditions, condition]);
    } else {
      setConditions(conditions.filter((c) => c !== condition));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      age,
      conditions,
      medications,
      location,
      activity,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h3 className="text-2xl font-heading font-semibold mb-6">Your Information</h3>
      
      <div className="mb-4">
        <Label className="block text-neutral-700 font-medium mb-2">Age</Label>
        <div className="flex items-center gap-4">
          <Slider
            value={[age]}
            min={18}
            max={100}
            step={1}
            onValueChange={(value) => setAge(value[0])}
            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none calculator-slider"
          />
          <span className="text-neutral-700 font-medium">{age}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <Label className="block text-neutral-700 font-medium mb-2">Pre-existing Health Conditions</Label>
        <div className="space-y-2">
          {healthConditions.map((condition) => (
            <div key={condition.id} className="flex items-center">
              <Checkbox
                id={condition.id}
                checked={conditions.includes(condition.label)}
                onCheckedChange={(checked) => 
                  handleConditionChange(checked as boolean, condition.label)
                }
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <Label
                htmlFor={condition.id}
                className="ml-2 text-neutral-700"
              >
                {condition.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <Label className="block text-neutral-700 font-medium mb-2">Medications</Label>
        <Select onValueChange={setMedications} value={medications}>
          <SelectTrigger className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Select medication" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="diuretics">Water Pills (Diuretics)</SelectItem>
            <SelectItem value="antidepressants">Antidepressants</SelectItem>
            <SelectItem value="antihistamines">Antihistamines</SelectItem>
            <SelectItem value="blood-pressure">Blood Pressure Medications</SelectItem>
            <SelectItem value="multiple">Multiple Medications</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mb-4">
        <Label className="block text-neutral-700 font-medium mb-2">Location</Label>
        <Input
          type="text"
          placeholder="Enter your address or zip code"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-neutral-700 font-medium mb-2">Planned Activity</Label>
        <Select onValueChange={setActivity} value={activity}>
          <SelectTrigger className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Select activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="indoor-rest">Indoor Rest</SelectItem>
            <SelectItem value="light-indoor">Light Indoor Activity</SelectItem>
            <SelectItem value="light-outdoor">Light Outdoor Activity</SelectItem>
            <SelectItem value="moderate-outdoor">Moderate Outdoor Activity</SelectItem>
            <SelectItem value="intense-outdoor">Intense Outdoor Activity</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
      >
        Calculate My Risk
      </Button>
    </form>
  );
};

export default CalculatorForm;