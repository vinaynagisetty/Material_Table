import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
    standalone: true,
    imports: [CommonModule, NgbAccordionModule],
})
export class HistoryComponent {
    panels = ['First', 'Second', 'Third'];
}
