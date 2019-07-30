import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit {


    //readonly INITIAL_FIRST_PAGE_IN_BLOCK: number = 1;
    //Temp
    //readonly INITIAL_FIRST_PAGE_IN_BLOCK: number = 74;
    readonly BLOCK_LENGTH = 5;
    readonly INITIAL_SELECTED_INDEX = 0;

    @Input()
    pageCount: number;
    @Input()
    firstPageInBlock: number;

    @Output()
    refresh: EventEmitter<number> = new EventEmitter();


    pageButtons: number[] = [];

    selectedIndex: number = this.INITIAL_SELECTED_INDEX;


    constructor() {
        for (let i = 0; i < this.BLOCK_LENGTH; i++) {
            this.pageButtons[i] = i
        }
    }

    ngOnInit() { }

    refreshPage() {
        this.refresh.emit(this.currentPage());
    }

    next() {
        if (this.selectedIndex + 1 < this.BLOCK_LENGTH / 2) {
            this.selectedIndex++;
        } else {
            this.firstPageInBlock++;
        }
        this.refreshPage();
    }

    previous() {
        if (this.selectedIndex > this.BLOCK_LENGTH / 2) {
            this.selectedIndex--;
        } else {
            this.firstPageInBlock--;
        }
        this.refreshPage();
    }

    isExistingPage(index: number): boolean {
        return this.firstPageInBlock + index <= this.pageCount && this.firstPageInBlock + index > 0;
    };

    select(index: number): void {
        this.selectedIndex = index;
        this.reorganiseButtons();
        this.refreshPage();
    };

    currentPage() {
        return this.firstPageInBlock + this.selectedIndex;
    }

    reorganiseButtons() {
        let selectedPage = this.currentPage();
        this.firstPageInBlock = Math.max(Math.min(this.currentPage() - Math.floor(this.BLOCK_LENGTH / 2), this.pageCount - this.BLOCK_LENGTH + 1), 1);
        this.selectedIndex = selectedPage - this.firstPageInBlock;
    }

}
