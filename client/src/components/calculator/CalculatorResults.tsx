import { AlertCircle, CheckCircle2 } from "lucide-react";
import { CalculatorFormData } from "./CalculatorForm";

type CalculatorResultsProps = {
  calculationData: CalculatorFormData;
};

const CalculatorResults = ({ calculationData }: CalculatorResultsProps) => {
  // This function simulates a risk calculation based on form data
  // In a real implementation, this would call an API
  const calculateRisk = (data: CalculatorFormData) => {
    let riskScore = 0;
    
    // Age factor
    if (data.age > 65) riskScore += 30;
    else if (data.age > 50) riskScore += 20;
    else if (data.age > 35) riskScore += 10;
    
    // Health conditions
    riskScore += data.conditions.length * 15;
    
    // Medications
    if (data.medications && data.medications !== "none") {
      riskScore += 15;
    }
    
    // Activity level
    if (data.activity === "intense-outdoor") riskScore += 30;
    else if (data.activity === "moderate-outdoor") riskScore += 20;
    else if (data.activity === "light-outdoor") riskScore += 10;
    
    // Normalize to 0-100
    return Math.min(Math.max(riskScore, 10), 100);
  };
  
  const riskScore = calculateRisk(calculationData);
  
  const getRiskLevel = (score: number) => {
    if (score >= 75) return { level: "High", color: "text-accent" };
    if (score >= 40) return { level: "Moderate", color: "text-orange-500" };
    return { level: "Low", color: "text-green-600" };
  };
  
  const { level, color } = getRiskLevel(riskScore);
  
  // Generate risk factors based on the form data
  const getRiskFactors = () => {
    const factors = [];
    
    if (calculationData.age > 50) {
      factors.push("Age increases susceptibility to heat effects");
    }
    
    if (calculationData.conditions.length > 0) {
      factors.push(Pre-existing health conditions: ${calculationData.conditions.join(", ")});
    }
    
    if (calculationData.medications && calculationData.medications !== "none") {
      factors.push("Medication may affect body's ability to regulate temperature");
    }
    
    if (calculationData.activity === "intense-outdoor" || calculationData.activity === "moderate-outdoor") {
      factors.push("High-intensity outdoor activity during peak heat hours");
    }
    
    return factors.length ? factors : ["No significant risk factors identified"];
  };
  
  // Generate recommendations based on risk level and factors
  const getRecommendations = () => {
    const recommendations = [];
    
    if (level === "High" || level === "Moderate") {
      recommendations.push("Reschedule outdoor activity to early morning or evening");
      recommendations.push("Increase water intake to 3-4 liters throughout the day");
    } else {
      recommendations.push("Stay hydrated with at least 2 liters of water throughout the day");
    }
    
    recommendations.push("Use cooling strategies like damp cloths on neck and wrists");
    
    if (calculationData.conditions.length > 0 || 
        (calculationData.medications && calculationData.medications !== "none")) {
      recommendations.push("Consult healthcare provider about medication adjustments");
    }
    
    if (level === "High") {
      recommendations.push("Stay in air-conditioned environments during peak heat hours");
    }
    
    return recommendations;
  };
  
  const riskFactors = getRiskFactors();
  const recommendations = getRecommendations();

  return (
    <div className="w-full">
      <h3 className="text-2xl font-heading font-semibold mb-6">Your Risk Assessment</h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Heat Risk Level</span>
          <span className={font-semibold ${color}}>{level}</span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2.5">
          <div 
            className={${level === "High" ? "bg-accent" : level === "Moderate" ? "bg-orange-500" : "bg-green-600"} h-2.5 rounded-full} 
            style={{ width: ${riskScore}% }}
          ></div>
        </div>
      </div>
      
      <><div className="bg-white rounded-lg p-4 mb-6 shadow-md">
          <h4 className="font-heading font-semibold text-lg mb-3">Key Risk Factors</h4>
          <ul className="space-y-2 text-neutral-700">
            {riskFactors.map((factor, index) => (
              <li key={index} className="flex items-start">
                <AlertCircle className="text-accent mt-1 mr-2 flex-shrink-0" size={16} />
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div><div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-heading font-semibold text-lg mb-3">Personalized Recommendations</h4>
            <ul className="space-y-2 text-neutral-700">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-green-600 mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div></>
    </div>
  );
};

export default CalculatorResults;