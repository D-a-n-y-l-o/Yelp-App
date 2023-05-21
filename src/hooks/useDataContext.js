import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useDataContext = () => {
    const context = useContext(DataContext);
    return context;
}