//@ts-ignore
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headerText: any;
  private unsubscribe$ = new Subject<void>();

  constructor() {
    this.getHeaderText()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.headerText = data;
      });
  }

  private getHeaderText(): Subject<any> {
    const subject = new Subject<any>();
    window.addEventListener('homeData', (event: any) => {
      subject.next(event.detail.describe);
    });
    return subject;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
