export class CartError extends Error{

errorInfos: string[];0

constructor(errorInfos: string[]) {
  super();
  this.errorInfos = errorInfos;
}


}
