import { useLocation } from "react-router-dom";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { urlService } = ServiceContainer;

/**
 * Возвращает параметры текущего урла в виде структуры ключ-значение
 * Возвращаем массив, т.к. скорее всего будет реализована функция для установки параметров
 */
function useSearchParams<T>() {
    const searchParams = urlService.searchParamsFromStringToObject<T>(useLocation().search);

    return searchParams;
}

export { useSearchParams };
