import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutSelector } from '../+base-state/selectors/+index';
import { SidebarUiActions } from '../+base-state/actions/+index';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  isOpen$: Observable<boolean> | undefined;
  pageHeaderTitle$: Observable<string> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getData();
  }

  toggleOpenCloseSidebar(): void {
    this.store.dispatch(SidebarUiActions.setSidebarVisibility());
  }

  private getData(): void {
    this.isOpen$ = this.store.select(LayoutSelector.getSidebarVisibility);
    this.pageHeaderTitle$ = this.store.select(LayoutSelector.getTitle);
  }
}
