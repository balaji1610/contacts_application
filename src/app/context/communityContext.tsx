import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ApplicationContextType {
  InvokeHook: number;
  setInvokeHook: Dispatch<SetStateAction<number>>;
  addClick: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const [InvokeHook, setInvokeHook] = useState<number>(1);

  const addClick = () => {
    setInvokeHook((prev) => prev + 1);
  };

  return (
    <ApplicationContext.Provider
      value={{ InvokeHook, setInvokeHook, addClick }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext };

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationProvider"
    );
  }
  return context;
};
