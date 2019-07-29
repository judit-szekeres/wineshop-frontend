export interface PageButton {
  index:number;
  pageNumber:number,
  active: boolean,
  disabled: boolean
}

export interface Pagination{
  pageCount: number,
  selectedIndex: number,
  firstPageInBlock: number;
  blockLength: number;
  pageButtons:PageButton[];   //stores only reference of PageButton[] array
  currentPage(): number,
  isExistingPage(index:number):boolean;
  select(index:number):void;
  refresh(): void;
  next():void;
  previous():void;
}
