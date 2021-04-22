import { AuthService } from "./api/AuthService/AuthService";
import { StorageService } from "./browser/StorageService/StorageService";
import { URLService } from "./browser/URLService/URLService";
import { Logger } from "./utils/Logger/Logger";
import { config } from "@App/config";
import { StylesHandler } from "@Core/services/utils/StylesHandler/StylesHandler";

// browser
const storageService = new StorageService(localStorage);
const urlService = new URLService();

// utils
const logger = new Logger();
const stylesHandler = new StylesHandler();

// api
const authService = new AuthService(config, storageService, logger);

const ServiceContainer = {
    authService,
    storageService,
    urlService,
    logger,
    stylesHandler,
};

export { ServiceContainer };
