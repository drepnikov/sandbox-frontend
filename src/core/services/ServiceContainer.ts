import { config } from "@Config";
import { AuthService } from "@Core/services/api/AuthService/AuthService";
import { StorageService } from "@Core/services/browser/StorageService/StorageService";
import { URLService } from "@Core/services/browser/URLService/URLService";
import { Logger } from "@Core/services/utils/Logger/Logger";

// browser
const storageService = new StorageService(localStorage);
const urlService = new URLService();

//utils
const logger = new Logger();

// api
const authService = new AuthService(storageService, config, logger);

const ServiceContainer = {
    authService,
    storageService,
    urlService,
    logger,
};

export { ServiceContainer };
