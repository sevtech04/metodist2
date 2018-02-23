/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { cnts } from './index.const';
import { MainController } from './main/main.controller';
import { restapi } from "./services/restapi.service";
import { EmployeesListController } from "./components/employees/employees.list.controller";
import { DocumentsListController } from "./components/documents/document.list.controller";
import { SettingsController } from "./components/settings/settings.controller";
import { EmployeesLobbyController} from "./components/employees/lobby/employees.lobby.controller";
import { CategoriesController } from "./components/settings/categories/categories.controller";
import { DialogDeleteController } from "./components/dialogs/dialog.delete.controller";

angular.module('front', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'restangular',
  'ui.router', 'toastr','angularModalService'])
  .constant('moment', moment)
  .constant('Constants',cnts)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('restapi',restapi)
  .controller('MainController', MainController)
  .controller('EmployeesListController', EmployeesListController)
  .controller('EmployeesLobbyController', EmployeesLobbyController)
  .controller('DocumentsListController', DocumentsListController)
  .controller('SettingsController', SettingsController)
  .controller('CategoriesController', CategoriesController)
  .controller('DialogDeleteController', DialogDeleteController)
;

