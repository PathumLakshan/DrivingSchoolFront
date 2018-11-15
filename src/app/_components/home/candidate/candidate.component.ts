import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../_services/candidate.service';
import { Candidate } from '../../../_models/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  providers:[CandidateService]
})
export class CandidateComponent implements OnInit {
candidate: any = {};
candidates: Candidate[];
loading: boolean;
RoleId: number;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
  // this.get();
  
  this.RoleId = parseInt( sessionStorage.getItem('roleId'));
  }

  get(): void {
    this.loading = true;
    this.candidateService.getCandidate().subscribe(
      (candidates) => {
        console.log(candidates)
        this.candidates = candidates;
        this.loading = false;
      });
  }

  add(){
    console.log(this.candidate)
     this.candidateService.addCandidate(this.candidate).subscribe(
       (res) => console.log('response', res)
     );  
  }
}
