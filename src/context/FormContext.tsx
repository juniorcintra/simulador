/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Definir o tipo dos dados do formulário
interface FormData {
  id?: string; // Adicionamos o campo 'id' para facilitar updates
  name?: string;
  income?: string;
  spouseName?: string;
  spouseIncome?: string;
  street?: string;
  number?: string;
  city?: string;
  state?: string;
  profession?: string;
  company?: string;
  salary?: string;
  // Outros campos conforme necessário
}

// Definir o tipo para o contexto
interface FormContextType {
  formData: FormData;
  updateFormData: (newData: FormData) => void;
}

// Criar o contexto com um tipo default (null inicialmente)
const FormContext = createContext<FormContextType | undefined>(undefined);

// URL base da Mock API
const API_URL = "http://demo6572647.mockable.io/simulador/create";

// Função para enviar dados à API (POST ou PUT)
const sendDataToApi = async (data: FormData) => {
  try {
    const method = "POST";
    const endpoint = API_URL;

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao enviar os dados para a API:", error);
  }
};

// Provedor do contexto
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    if (Object.keys(formData).length > 0) {
      sendDataToApi(formData).then((result) => {
        console.log("🚀 ~ result:", result);
      });
    }
  }, [formData]);

  const updateFormData = (newData: FormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook para usar o contexto
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm deve ser usado dentro de um FormProvider");
  }
  return context;
};
