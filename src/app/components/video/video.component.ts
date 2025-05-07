import { Component } from '@angular/core';
import { SafePipe } from '../../shared/url.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [SafePipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
    videoUrl = 'https://archive.org/download/survivor-eye-of-the-tiger-1080p/SURVIVOR%20%28Eye%20Of%20The%20Tiger%29%20%28720p%29.mp4';

    safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
