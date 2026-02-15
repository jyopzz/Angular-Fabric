import {
  Component,
  ElementRef,
  AfterContentInit,
  ChangeDetectorRef,
  Input,
  HostBinding,
  HostListener,
  booleanAttribute
} from '@angular/core';
import { ICON_REGISTRY } from './icon.registry';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'fab-icon',
  standalone: false,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterContentInit {
  @Input() size?: number | string;
  @Input() color?: string;
  @Input({ transform: booleanAttribute }) active: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) clickable: boolean = false;
  
  svg: SafeHtml = '';

  @HostBinding('style.width')
  @HostBinding('style.height')
  get iconSize(): string | null {
    // Only apply inline styles if size input is provided
    if (!this.size) {
      return null; // Let CSS classes handle it
    }
    
    // If it's a number, add 'px'
    if (typeof this.size === 'number') {
      return `${this.size}px`;
    }
    
    // Check if string has valid units (px, rem, %)
    const validUnits = /(px|rem)$/;
    if (validUnits.test(this.size)) {
      return this.size;
    }
    
    // If no valid units found, add 'px' to numeric strings
    if (!isNaN(Number(this.size))) {
      return `${this.size}px`;
    }
    
    // Invalid format, log warning and return null to use default CSS
    console.warn(`Invalid size format: "${this.size}". Use px, rem. Falling back to default.`);
    return null;
  }

  @HostBinding('style.color')
  get iconColor(): string | null {
    return this.color || null; 
  }

  @HostBinding('class.fi-active')
  get isActive(): boolean {
    return this.active;
  }

  @HostBinding('class.fi-disabled')
  get isDisabled(): boolean {
    return this.disabled;
  }

  @HostBinding('class.fi-clickable')
  get isClickable(): boolean {
    return this.clickable && !this.disabled;
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabled(): string | null {
    return this.disabled ? 'true' : null;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    const iconName = this.elementRef.nativeElement.textContent.trim();
    const rawSvg = ICON_REGISTRY[iconName];

    if (rawSvg) {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
      
      // Hide text content
      this.elementRef.nativeElement.childNodes.forEach((node: ChildNode) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = '';
        }
      });
      
      this.cdr.detectChanges();
    } else {
      console.warn(`Icon "${iconName}" not found in registry`);
    }
  }
}