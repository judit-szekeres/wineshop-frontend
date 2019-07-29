import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pagination, PageButton } from 'src/app/interfaces/page-button';
import { WineCardResults } from 'src/app/interfaces/wine-dto';


//const INITIAL_FIRST_PAGE_IN_BLOCK:number=1;
//Temp
const INITIAL_FIRST_PAGE_IN_BLOCK: number = 83;
const BLOCK_LENGTH = 5;
const INITIAL_SELECTED_INDEX = 0;


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit {

  @Input()
  promiseForPageCount: Promise<WineCardResults>;

  @Output()
  refresh: EventEmitter<number> = new EventEmitter();

  pageButtons: PageButton[];

  pagination: Pagination = {
    pageCount: null,
    selectedIndex: INITIAL_SELECTED_INDEX,
    firstPageInBlock: INITIAL_FIRST_PAGE_IN_BLOCK,
    blockLength: BLOCK_LENGTH,
    pageButtons: this.pageButtons,
    currentPage: function(): number {
      return this.firstPageInBlock + this.selectedIndex;
    },
    isExistingPage: function(index: number): boolean {
      return this.firstPageInBlock + index <= this.pageCount && this.firstPageInBlock + index > 0;
    },
    select: function(index: number) {
      this.selectedIndex = index;
      this.refresh();
    },
    refresh: function() {
      for (let i = 0; i < this.pageButtons.length; i++) {
        if (i === this.selectedIndex) {
          this.pageButtons[i].active = true;
        } else {
          this.pageButtons[i].active = false;
        }
        if (this.isExistingPage(i)) {
          this.pageButtons[i].disabled = false;
          this.pageButtons[i].index = i;
          this.pageButtons[i].pageNumber = this.firstPageInBlock + i;
        } else {
          this.pageButtons[i].disabled = true;
        }
      }
    },
    next: function() {
      if (this.isExistingPage(this.selectedIndex + 1)) {
        if (this.selectedIndex === this.blockLength - 1) {
          ++this.firstPageInBlock;
        } else {
          this.selectedIndex++;
        }
      }
      this.refresh();
    },
    previous: function() {
      if (this.isExistingPage(this.selectedIndex - 1)) {
        if (this.selectedIndex === 0) {
          --this.firstPageInBlock;
        } else {
          this.selectedIndex--;
        }
      }
      this.refresh();
    }
  };

  constructor() {
    this.pageButtons = [];
    for (let i = 0; i < this.pagination.blockLength; i++) {
      this.pageButtons[i] = {
        index: null,
        pageNumber: null,
        active: false,
        disabled: false
      };
    }
  }

  ngOnInit() {
    this.pagination.pageButtons = this.pageButtons;

    this.promiseForPageCount.then(wineCardResults => {
      this.pagination.pageCount = wineCardResults.numberOfPage;
      this.pagination.refresh();
    });
  }

  refreshPage(index?: number) {
    if (index!=null) {
      this.pagination.select(index);
    }
    this.refresh.emit(this.pagination.currentPage());
  }

  next() {
    this.pagination.next();
    this.refreshPage();
  }

  previous() {
    this.pagination.previous();
    this.refreshPage();
  }

}
