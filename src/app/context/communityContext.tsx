import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ApplicationContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  contacts: any;
  setContacts: Dispatch<SetStateAction<any>>;
  editIndex: number;
  setEditIndex: Dispatch<SetStateAction<any>>;
  updateContacts: any;
  setUpdateContacts: Dispatch<SetStateAction<any>>;
  contactsList: any;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  editModel: boolean;
  setModel: Dispatch<SetStateAction<boolean>>;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

interface ContextProps {
  children: ReactNode;
}

const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
  const contactsList = {
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    id: 0,
  };
  const [open, setOpen] = useState<boolean>(false);
  const [contacts, setContacts] = useState([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [updateContacts, setUpdateContacts] = useState(contactsList);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [editModel, setModel] = useState<boolean>(false);
  return (
    <ApplicationContext.Provider
      value={{
        open,
        setOpen,
        contacts,
        setContacts,
        editIndex,
        setEditIndex,
        updateContacts,
        setUpdateContacts,
        contactsList,
        isUpdate,
        setIsUpdate,
        editModel,
        setModel,
      }}
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
