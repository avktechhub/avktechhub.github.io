import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
    selector: 'app-svg',
    template: `<span [innerHTML]="svgIcon"></span>`,
})

export class SvgIconComponent {
    @Input() public name?: string;
    public svgIcon: any;

    constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer,) {

    }
    public ngOnChanges(): void {
        if (!this.name) {
            this.svgIcon = '';
            return;
        }
        this.httpClient
            .get(`assets/svg/${this.name}.svg`, { responseType: 'text' })
            .subscribe(value => {
                this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
            });
    }
}