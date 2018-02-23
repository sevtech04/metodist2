export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('main.employees',{
      url: 'employees',
      views: {
        'entity@main': {
          templateUrl: 'app/components/employees/employees.tmpl.html',
          controller: 'EmployeesListController',
          controllerAs: 'employees'
        }
      }
    })
    .state('main.employees.lobby',{
      url: '/{id}',
      views: {
        'lobby@main.employees': {
          templateUrl: 'app/components/employees/lobby/employees.lobby.tmpl.html',
          controller: 'EmployeesLobbyController',
          controllerAs: 'emplobby',
          resolve: {id: ($stateParams) => {$stateParams.id}}
        }
      }
    })
    .state('main.documents',{
      url: 'documents',
      views: {
        'entity@main': {
          templateUrl: 'app/components/documents/documents.tmpl.html',
          controller: 'DocumentsListController',
          controllerAs: 'documents'
        }
      }
    })
    .state('main.settings',{
      url: 'settings',
      views: {
        'entity@main': {
          templateUrl: 'app/components/settings/settings.tmpl.html',
          controller: 'SettingsController',
          controllerAs: 'settings'
        }
      }
    })
    .state('main.settings.categories', {
      url: '/dictionary/categories',
      views: {
        'dict@main.settings': {
          templateUrl: 'app/components/settings/categories/categories.tmpl.html',
          controller: 'CategoriesController',
          controllerAs: 'categories'
        }
      }
    })
  ;


  $urlRouterProvider.otherwise('/');
}
