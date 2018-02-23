let state;

export class MainController {
  constructor ($state, toastr) {
    'ngInject';
    state = $state;
    this.currentPerspective = $state.current.name;
    this.toastr = toastr;
    this.perspectives=[
      {name: 'Сотрудники',
       icon: 'employees',
       id: 'main.employees'},
      {name: 'Документы',
       icon: 'documents',
       id: 'main.documents'},
      {name: 'Настройки',
        icon: 'settings',
        id: 'main.settings'}
    ];


  }

  loadPerspective(perspective){
    this.currentPerspective = perspective.id;

    state.go(perspective.id,{},{notify: true});
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
