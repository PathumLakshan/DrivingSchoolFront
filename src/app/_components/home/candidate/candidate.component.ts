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
candidate: any={};
candidates: Candidate[]

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
  this.get();
  }

  get():void{
    this.candidateService.getCandidate().subscribe(
      candidates => this.candidates = candidates
    );
  }

  add(){
    console.log(this.candidate)
     this.candidateService.addCandidate(this.candidate).subscribe(
       (res) => console.log('response',res)
     );  
  }
}
