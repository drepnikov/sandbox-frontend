import { config } from "@Config";
import { AuthService } from "@Core/services/api/AuthService/AuthService";
import { StorageService } from "@Core/services/browser/StorageService/StorageService";
import { URLService } from "@Core/services/browser/URLService/URLService";

// browser
const storageService = new StorageService(localStorage);
const urlService = new URLService();

// api
const authService = new AuthService(storageService, config);

const ServiceContainer = {
  authService,
  storageService,
  urlService,
};

export { ServiceContainer };
