import * as _ from "lodash";

export class CategoriesController{
  constructor(restapi,$state,toastr,ModalService){
    'ngInject';
    this.api = restapi;
    this.state = $state;
    this.toast = toastr;
    this.modal = ModalService;

    this.list = [];
    this.editMode = false;
    this.editedItem = {};

    this.getCategoriesList();

  }


  getCategoriesList() {
    let self = this;
    self.api.apiGetList('data/dictionary/categories').then( (resp) => {
      if (resp.success){
        self.list = resp.data;
      }
    });
  }

  close(){
    this.state.go('main.settings',{},{reload: true});
  }

  editItem(item){
    this.editMode = true;
    this.editedItem = angular.copy(item);
  }

  deleteItem(item){
    this.modal.showModal({
      templateUrl: '/app/components/dialogs/dialog.delete.tmpl.html',
      controller: 'DialogDeleteController',
      controllerAs: 'dialog'
    }).then( (frm) => {
      frm.close.then( (res) => {
        if (res){
          this.api.apiDelete('data/dictionary/categories/' + item.id).then( (resp) => {
            if (resp.success){
              this.list.splice(this.list.indexOf(item),1);
            }
          });
        }
      });
    });
  }

  addItem(){
    this.editedItem = {
      id: -1
    };
    this.list.push(this.editedItem);
    this.editMode = true;
  }

  saveItem(item){
    if (!item.typeName || !item.textTypeName){
      this.toast.error('Не введены обязательные значения!');
      return;
    }
    if (item.id == -1){
      let obj = {
        typeName: item.typeName,
        textTypeName: item.textTypeName
      };
      this.api.apiPost('data/dictionary/categories',obj).then( (resp) => {
        if (resp.success){
          console.log(resp.data);
          this.editMode = false;
          this.editedItem = {};
        }
      });
    } else {
      this.api.apiUpdate('data/dictionary/categories',item).then( (resp) => {
        if (resp.success){
          this.editMode = false;
          this.editedItem = {};
        }
      });
    }
  }
  cancelEditItem(){
    let self = this;
    self.editMode = false;
    let tmp = _.findIndex(this.list, (el) => {return el.id == self.editedItem.id});
    if (tmp >= 0) {
      if (self.editedItem.id > 0) {
        self.list.splice(tmp, 1, self.editedItem);
      } else {
        self.list.splice(tmp, 1);
      }
    }
    self.editedItem = {};
  }
}
