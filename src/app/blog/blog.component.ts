import { Component } from '@angular/core';

interface ImageDetails {
  imageUrl: string;
  title: string;
  steps: string[];
  lastUpdate: string;
  created: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {}
