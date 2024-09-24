import { Input } from "@/components/ui/input";
import { useForm } from "@/context/FormContext";
import { useEffect, useState } from "react";

const AddressForm = () => {
  const { formData, updateFormData } = useForm();
  const [addressData, setAddressData] = useState({
    street: "",
    number: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (formData.street || formData.number || formData.city || formData.state) {
      setAddressData({
        street: formData.street || "",
        number: formData.number || "",
        city: formData.city || "",
        state: formData.state || "",
      });
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Endereço Atual</h2>
      <form>
        <Input
          name="street"
          value={addressData.street}
          onChange={handleChange}
          placeholder="Digite o nome da rua"
        />
        <Input
          name="number"
          value={addressData.number}
          onChange={handleChange}
          placeholder="Digite o número"
          type="text"
        />
        <Input
          name="city"
          value={addressData.city}
          onChange={handleChange}
          placeholder="Digite a cidade"
        />
        <Input
          name="state"
          value={addressData.state}
          onChange={handleChange}
          placeholder="Digite o estado"
        />
      </form>
    </div>
  );
};

export default AddressForm;
