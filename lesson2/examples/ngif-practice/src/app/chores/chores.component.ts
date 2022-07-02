import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work','Buy groceries', 'clean kitchen'];

   targetImage = 'https://thesavvysparrow.com/wp-content/uploads/2020/01/Allowance-trackers-for-kids.jpg';

   constructor() { }

   ngOnInit() {
   }

}
