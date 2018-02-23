export class DialogDeleteController{
  constructor($scope,close){
    'ngInject';
    this.close = close;
  }
  confirm(){
    this.close(true);
  }
  cancel(){
    this.close(false);
  }
}
