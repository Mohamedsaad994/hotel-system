import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent<T extends { [key: string]: any }>
  implements OnChanges
{
  @Input() tableHeaders: string[] = [];
  @Input() tableBodyContent: T[] = [];
  @Input() displayHeaders: { [key: string]: string } = {};
  @Input() editBtnVisibility:boolean = true;
  @Input() deleteBtnVisibility:boolean = true;
  @Input() vertIconVisibility:boolean = true;
  @Output() viewItem = new EventEmitter<string>();
  @Output() editItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();

  filteredTableBodyContent: { row: T; keys: string[] }[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableHeaders'] || changes['tableBodyContent']) {
      this.updateFilteredTableBodyContent();
    }
  }

  updateFilteredTableBodyContent(): void {
    if (this.tableBodyContent) {
      this.filteredTableBodyContent = this.tableBodyContent.map((row) => ({
        row,
        keys: this.getFilteredKeys(row),
      }));
      this.sortTable();
    } else {
      this.filteredTableBodyContent = [];
    }
  }

  getFilteredKeys(object: T): string[] {
    return this.tableHeaders.filter((key) => object.hasOwnProperty(key) || key.includes('.'));
  }

  sortTable(): void {
    if (this.sortColumn) {
      this.filteredTableBodyContent.sort((a, b) => {
        const valueA = this.getNestedValue(a.row, this.sortColumn);
        const valueB = this.getNestedValue(b.row, this.sortColumn);
        if (valueA < valueB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        } else if (valueA > valueB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
  }

  onSort(column: string): void {
    if (this.sortColumn === column && column !== 'actions' && column !== 'images') {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortTable();
  }

  onViewItem(id: string): void {
    this.viewItem.emit(id);
  }

  onEditItem(id: string): void {
    this.editItem.emit(id);
  }

  onDeleteItem(id: string): void {
    this.deleteItem.emit(id);
  }

  getNestedValue(object: T, key: string): any {
    return key.split('.').reduce((o, k) => (o ? o[k] : null), object);
  }
}
