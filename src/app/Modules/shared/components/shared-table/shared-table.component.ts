import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent<T extends { [key: string]: any }> {
  @Input() tableHeaders: string[] = [];
  @Input() tableBodyContent: T[] = [];
  @Input() displayHeaders: { [key: string]: string } = {};

  @Output() viewItem = new EventEmitter<string>();
  @Output() editItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();

  getFilteredKeys(object: T): string[] {
    return Object.keys(object).filter(key => this.tableHeaders.includes(key));
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
}
