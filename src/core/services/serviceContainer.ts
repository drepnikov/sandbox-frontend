import { AuthService } from "@Core/services/api/AuthService/AuthService";
import { StorageService } from "@Core/services/browser/StorageService/StorageService";

const serviceContainer = {
  authService: new AuthService(),
  storageService: new StorageService(localStorage),
};

export { serviceContainer };
