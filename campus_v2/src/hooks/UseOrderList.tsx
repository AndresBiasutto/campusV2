import { useMemo } from "react";

/**
 * Hook para ordenar una lista de objetos basado en una propiedad numérica
 * @param list Lista de objetos a ordenar
 * @param key Propiedad por la cual ordenar (ej: "chapterOrder", "lectionOrder")
 * @returns Lista ordenada
 */
const useOrderedList = <T extends Record<string, any>>(list: T[] | null, key: keyof T) => {
  return useMemo(() => {
    return list ? [...list].sort((a, b) => a[key] - b[key]) : [];
  }, [list, key]);
};

export default useOrderedList;
