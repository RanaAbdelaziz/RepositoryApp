import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/modals/Repo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit {
  @Input() repo!:Repo
  future : any;
  constructor(private service: ServiceService) { }
  
  requiedrepoinfo = []
  ngOnInit(): void {
    console.log( new Date())

    
   
  }

//   kFormatter(num : any) {
//     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
// }

}
