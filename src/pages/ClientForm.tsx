import { useState, useEffect } from "react";
import { useForm } from "../context/FormContext";
import { Input } from "@/components/ui/input";

const ClientForm = () => {
  const { formData, updateFormData } = useForm();
  const [clientData, setClientData] = useState({
    name: "",
    income: "",
  });

  useEffect(() => {
    if (formData.name || formData.income) {
      setClientData({
        name: formData.name || "",
        income: formData.income || "",
      });
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
    updateFormData({ [name]: value }); // Atualizar o contexto
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Informações do Cliente</h2>
      <form>
        <Input
          name="name"
          value={clientData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
        <Input
          name="income"
          value={clientData.income}
          onChange={handleChange}
          placeholder="Digite sua renda"
          type="number"
        />
      </form>
    </div>
  );
};

export default ClientForm;
