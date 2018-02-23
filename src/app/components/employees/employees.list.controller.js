export class EmployeesListController{
  constructor(restapi){
    'ngInject';

    this.api = restapi;
    this.employeesList=[];

    this.getEmployees();
  }

  addEmployee(){

  }

  getEmployees(){
    let self = this;

    self.api.apiGetList('data/employees').then( (resp) => {
      if (resp.success){
        self.employeesList = resp.data;
      }
      angular.forEach(self.employeesList, (el) => {
        el.birthdate = new Date(el.birthdate);
      });
    })
  }
}
