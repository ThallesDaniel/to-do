import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from './../share-modal/share-modal.component';
import { Task } from '../interface/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: string = '';
  dataSource: MatTableDataSource<Task>;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Task>(this.tasks);
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = { name: this.newTask, completed: false };
      this.tasks.push(newTask);
      this.saveTasks();
      this.dataSource.data = this.tasks;
      this.newTask = '';
    }
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveTasks();
      this.dataSource.data = this.tasks;
    }
  }

  editTask(task: Task) {
    const newTaskName = prompt('Editar tarefa:', task.name);
    if (newTaskName !== null) {
      task.name = newTaskName;
      this.saveTasks();
      this.dataSource.data = this.tasks;
    }
  }

  updateTask(task: Task) {
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.dataSource.data = this.tasks;
    }
  }

  shareTasks() {
    const dialogRef = this.dialog.open(ShareModalComponent, {
      width: '300px',
      data: { tasks: this.tasks }
    });
  }
}
