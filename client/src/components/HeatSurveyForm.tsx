import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react";

const HeatSurveyForm = () => {
  const { user } = useUser();

  const [form, setForm] = useState({
    age_range: "",
    gender_identity: "",
    residential_zip: "",
    living_arrangement: "",
    heat_illness_history: "",
    chronic_conditions: "",
    dementia_status: "",
    pregnancy_status: "",
    blood_pressure: "",
    mobility_limitations: "",
    alcohol_consumption: "",
    tobacco_use: "",
    physical_activity: "",
    sleep_pattern: "",
    heat_sensitive_meds: "",
    transportation_access: "",
    monthly_income: "",
    health_insurance: "",
    cooling_system: "",
    home_type: "",
    greenery_around: "",
    education_level: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    country: ""
  });

  const [profileName, setProfileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!user?.id) return alert("User not authenticated");
    if (!profileName.trim()) return alert("Please enter a profile name");

    setLoading(true);
    const payload = {
      ...form,
      user_id: user.id,
      profile_name: profileName,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from("heat_survey").insert([payload]);

    setLoading(false);
    if (error) {
      console.error("Insert error:", error.message);
      alert("❌ Failed to save the survey");
    } else {
      alert("✅ Survey saved successfully!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold text-gray-800">Heat Risk Survey</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Name</label>
        <input
          type="text"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          className="w-full border px-4 py-2 rounded-xl"
          placeholder="e.g. Home, Office"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
        <input
          type="text"
          value={form.age_range}
          onChange={(e) => handleChange("age_range", e.target.value)}
          className="w-full border px-4 py-2 rounded-xl"
        />
      </div>

      {/* Repeat similar inputs for all other fields as needed */}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Saving..." : "Submit Survey"}
      </button>
    </div>
  );
};

export default HeatSurveyForm;
