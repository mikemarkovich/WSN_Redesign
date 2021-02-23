import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isOpen: boolean = false;
  isSchoolsActive: boolean = false;
  isSportsActive: boolean = false;
  ngOnInit() {}

  toggleNav() {
    this.isSchoolsActive = false;
    this.isSportsActive = false;
    this.isOpen = !this.isOpen;
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("scroll-locked");
  }
}
