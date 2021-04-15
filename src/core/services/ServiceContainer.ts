import { AuthService } from "./api/AuthService/AuthService";
import { StorageService } from "./browser/StorageService/StorageService";
import { URLService } from "./browser/URLService/URLService";
import { Logger } from "./utils/Logger/Logger";
import { config } from "@App/config";

// browser
const storageService = new StorageService(localStorage);
const urlService = new URLService();

// utils
const logger = new Logger();

// api
const authService = new AuthService(config, storageService, logger);

const ServiceContainer = {
    authService,
    storageService,
    urlService,
    logger,
};

export { ServiceContainer };
