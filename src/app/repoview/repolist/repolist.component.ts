import { Component, OnInit , HostListener} from '@angular/core';
import { Repo } from 'src/app/modals/Repo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})
export class RepolistComponent implements OnInit {
  repoInfo! : Repo[];
  pagenumber = 1;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.repoInfo = []
    this.getRepoData()
 
  }
 
  getRepoData(){
    this.service.GetRepolist(this.pagenumber).subscribe(res=>{
      this.repoInfo = [...this.repoInfo, ...res.items]
    })
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.pagenumber++;
      this.getRepoData()
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

}
