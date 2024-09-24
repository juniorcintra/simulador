import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "@/context/FormContext";

const SpouseForm = () => {
  const { formData, updateFormData } = useForm();
  const [spouseData, setSpouseData] = useState({
    spouseName: "",
    spouseIncome: "",
  });

  useEffect(() => {
    if (formData.spouseName || formData.spouseIncome) {
      setSpouseData({
        spouseName: formData.spouseName || "",
        spouseIncome: formData.spouseIncome || "",
      });
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpouseData({
      ...spouseData,
      [name]: value,
    });
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Informações do Cônjuge</h2>
      <form>
        <Input
          name="spouseName"
          value={spouseData.spouseName}
          onChange={handleChange}
          placeholder="Digite o nome do cônjuge"
        />
        <Input
          name="spouseIncome"
          value={spouseData.spouseIncome}
          onChange={handleChange}
          placeholder="Digite a renda do cônjuge"
          type="number"
        />
      </form>
    </div>
  );
};

export default SpouseForm;
