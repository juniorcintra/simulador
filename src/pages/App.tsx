import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClientForm from "./ClientForm";
import SpouseForm from "./SpouseForm";
import AddressForm from "./AddressForm";
import ProfessionalDataForm from "./ProfessionalDataForm";
import { useForm } from "@/context/FormContext";

function App() {
  const { formData, updateFormData } = useForm();

  const handleClear = () => {
    localStorage.removeItem("formData");
    updateFormData({
      name: "",
      income: "",
      spouseName: "",
      spouseIncome: "",
      street: "",
      number: "",
      city: "",
      state: "",
      profession: "",
      company: "",
      salary: "",
    });
    window.location.href = "/";
  };

  // Função para salvar manualmente (já envia os dados automaticamente, mas é uma ação explícita)
  const handleSave = async () => {
    try {
      const result = await fetch(
        "http://demo6572647.mockable.io/simulador/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const response = await result.json();
      console.log("Dados salvos com sucesso:", response);
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Simulador de Financiamento</h1>

        <nav className="mb-6">
          <Link className="mr-4 text-blue-500" to="/">
            Cliente
          </Link>
          <Link className="mr-4 text-blue-500" to="/spouse">
            Cônjuge
          </Link>
          <Link className="mr-4 text-blue-500" to="/address">
            Endereço
          </Link>
          <Link className="text-blue-500" to="/professional">
            Dados Profissionais
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ClientForm />} />
          <Route path="/spouse" element={<SpouseForm />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/professional" element={<ProfessionalDataForm />} />
        </Routes>
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleClear}
          >
            Limpar
          </button>
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Salvar
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
