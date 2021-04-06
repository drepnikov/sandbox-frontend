import { AuthService } from "@Core/services/api/AuthService/AuthService";
import { StorageService } from "@Core/services/browser/StorageService/StorageService";

const ServiceContainer = {
  authService: new AuthService(),
  storageService: new StorageService(localStorage),
};

export { ServiceContainer };
