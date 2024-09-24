import { Input } from "@/components/ui/input";
import { useForm } from "@/context/FormContext";
import { useEffect, useState } from "react";

const ProfessionalDataForm = () => {
  const { formData, updateFormData } = useForm();
  const [professionalData, setProfessionalData] = useState({
    profession: "",
    company: "",
    salary: "",
  });

  useEffect(() => {
    if (formData.profession || formData.company || formData.salary) {
      setProfessionalData({
        profession: formData.profession || "",
        company: formData.company || "",
        salary: formData.salary || "",
      });
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfessionalData({
      ...professionalData,
      [name]: value,
    });
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Dados Profissionais</h2>
      <form>
        <Input
          name="profession"
          value={professionalData.profession}
          onChange={handleChange}
          placeholder="Digite sua profissão"
        />
        <Input
          name="company"
          value={professionalData.company}
          onChange={handleChange}
          placeholder="Digite o nome da empresa"
        />
        <Input
          name="salary"
          value={professionalData.salary}
          onChange={handleChange}
          placeholder="Digite seu salário"
          type="number"
        />
      </form>
    </div>
  );
};

export default ProfessionalDataForm;
