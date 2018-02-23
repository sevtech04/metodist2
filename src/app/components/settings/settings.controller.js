export class SettingsController{
  constructor(Constants, $state){
    'ngInject';
    this.state = $state;

    this.dictionaryList = Constants.systemDictionaries;
    this.currentDictionaryName = '';
  }

  openDictionary(dict){
    this.currentDictionaryName = dict.name;
    this.state.go(dict.state);
  }
}
