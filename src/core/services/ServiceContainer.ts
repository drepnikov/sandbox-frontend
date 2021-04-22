import { AuthService, IAuthService } from "./api/AuthService/AuthService";
import { IStorageService, StorageService } from "./browser/StorageService/StorageService";
import { IURLService, URLService } from "./browser/URLService/URLService";
import { ILogger, Logger } from "./utils/Logger/Logger";
import { config } from "@App/config";
import { IStylesService, StylesHandler } from "@Core/services/utils/StylesHandler/StylesHandler";

// browser
const storageService: IStorageService = new StorageService(localStorage);
const urlService: IURLService = new URLService();

// utils
const logger: ILogger = new Logger();
const stylesHandler: IStylesService = new StylesHandler();

// api
const authService: IAuthService = new AuthService(config, storageService, logger);

const ServiceContainer = {
    authService,
    storageService,
    urlService,
    logger,
    stylesHandler,
};

export { ServiceContainer };
