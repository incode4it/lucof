import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tasks',
  templateUrl: './profile-tasks.component.html',
  styleUrls: ['./profile-tasks.component.scss']
})
export class ProfileTasksComponent implements OnInit {

  constructor() { }

  task = {
    assets: [],
    category: 'Traduceri',
    budget: '3000 lei',
    createdAt: '2019-05-02T10:29:43.633Z',
    description: 'Se caută o persoană care cunaște japoneza pentru a traduce o documentație tehnică în limba romănă',
    location: null,
    online: true,
    pendingExecutors: [],
    title: 'Traducere din japoneză în română a 4000 de cuvine',
    __v: 0,
    _id: '5ccac697c77a8117955f98cb'
  }

  ngOnInit() {
  }

}
