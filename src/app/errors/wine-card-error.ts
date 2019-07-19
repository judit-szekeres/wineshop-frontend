export class WineCardError extends Error{

errorInfos: string[];

constructor(errorInfos: string[]) {
  super();
  this.errorInfos = errorInfos;
}


}
