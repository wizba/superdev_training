import { Component, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mdb-angular-free";
  input1: string;
  input2: string;
  showPdf:boolean= false;
  @ViewChild("pdfViewerOnDemand") pdfViewerOnDemand;
  @ViewChild("pdfViewerAutoLoad") pdfViewerAutoLoad;

  constructor(private toastr: ToastrService, private http: HttpClient) {
    
  }

 

  public openPdf() {
    this.showPdf =!this.showPdf;
  }
  
  
}
