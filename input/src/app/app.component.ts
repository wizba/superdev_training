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
  @ViewChild("pdfViewerOnDemand") pdfViewerOnDemand;
  @ViewChild("pdfViewerAutoLoad") pdfViewerAutoLoad;

  constructor(private toastr: ToastrService, private http: HttpClient) {
    // let url = "http://localhost:4000/pub/_01_.pdf"; // Or your url
    // this.downloadFile(url).subscribe((res) => {
    //   this.pdfViewerAutoLoad.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
    //   this.pdfViewerAutoLoad.refresh(); // Ask pdf viewer to load/refresh pdf
    // });
  }

  private downloadFile(url: string): any {
    let options = {
      headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '/'   // edit 
    }),

    observe:'response' as 'body',

       // have to explicitly give as 'blob' or 'json'
        responseType: 'blob' as 'blob'  
    };
    return this.http.get(url,options).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  public openPdf() {
    let url = " http://localhost:4000/pub/_01_.pdf"; // E.g. http://localhost:3000/api/GetMyPdf
    // url can be local url or remote http request to an api/pdf file.
    // E.g: let url = "assets/pdf-sample.pdf";
    // E.g: https://github.com/intbot/ng2-pdfjs-viewer/tree/master/sampledoc/pdf-sample.pdf
    // E.g: http://localhost:3000/api/GetMyPdf
    // Please note, for remote urls to work, CORS should be enabled at the server. Read: https://enable-cors.org/server.html

    this.downloadFile(url).subscribe((res) => {
      this.pdfViewerOnDemand.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
      this.pdfViewerOnDemand.refresh(); // Ask pdf viewer to load/reresh pdf
    },error=>console.log);
  }
  Save() {
    this.toastr.success("today is cold", "Code is running baba");
  }
  
}
