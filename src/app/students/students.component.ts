import { Component, OnInit } from '@angular/core';
import { Student } from '../students'; 

import { STUDENTS } from '../mock-students';

// This is known as decorator, it provides metadata for this component
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;

  selectedStudent?: Student;

  constructor() { }

  //
  ngOnInit(): void {
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
