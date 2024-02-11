import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent {
  tasksLink: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { tasks: string[] }) {
    this.tasksLink = 'https://example.com/share/tasks?data=' + JSON.stringify(data.tasks);
  }
}
