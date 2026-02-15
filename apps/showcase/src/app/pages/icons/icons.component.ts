import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: false,
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  selectedCode: string | null = null;
  copied: boolean = false;

  // Properties for dynamic binding demo
  iconColor: string = "blue";
  isActive: boolean = true;
  isDisabled: boolean = true;

  // Code snippets map
  private codeMap: { [key: string]: string } = {
    'size-16': '<fab-icon size="16">home</fab-icon>',
    'size-32': '<fab-icon [size]="32">search</fab-icon>',
    'size-20px': '<fab-icon size="20px">home</fab-icon>',
    'size-30px': '<fab-icon size="30px">search</fab-icon>',
    'size-2rem': '<fab-icon size="2rem">home</fab-icon>',
    'size-1.5rem': '<fab-icon size="1.5rem">search</fab-icon>',
    'size-2em': '<fab-icon size="2em">home</fab-icon>',
    'size-50vh': '<fab-icon size="50vh">search</fab-icon>',
    'size-large': '<fab-icon size="large">home</fab-icon>',
    'size-3percent': '<fab-icon size="3%">search</fab-icon>',
    'class-xs': '<fab-icon class="fi-size-xs">home</fab-icon>',
    'class-sm': '<fab-icon class="fi-size-sm">home</fab-icon>',
    'class-md': '<fab-icon class="fi-size-md">home</fab-icon>',
    'class-lg': '<fab-icon class="fi-size-lg">home</fab-icon>',
    'class-xl': '<fab-icon class="fi-size-xl">home</fab-icon>',
    'size-override': '<fab-icon class="fi-size-sm" size="40">home</fab-icon>',
    
    'color-red': '<fab-icon color="red">home</fab-icon>',
    'color-hex': '<fab-icon color="#66cdf2">home</fab-icon>',
    'color-rgb': '<fab-icon color="rgb(161, 61, 61)">home</fab-icon>',
    'color-primary': '<fab-icon class="fi-color-primary">home</fab-icon>',
    'color-secondary': '<fab-icon class="fi-color-secondary">home</fab-icon>',
    'color-success': '<fab-icon class="fi-color-success">home</fab-icon>',
    'color-danger': '<fab-icon class="fi-color-danger">home</fab-icon>',
    'color-warning': '<fab-icon class="fi-color-warning">home</fab-icon>',
    'color-info': '<fab-icon class="fi-color-info">home</fab-icon>',
    'color-light': '<fab-icon class="fi-color-light">home</fab-icon>',
    'color-dark': '<fab-icon class="fi-color-dark">home</fab-icon>',
    'color-white': '<fab-icon class="fi-color-white">home</fab-icon>',
    'color-black': '<fab-icon class="fi-color-black">home</fab-icon>',
    'color-override': '<fab-icon class="fi-color-primary" color="#ff00ff">home</fab-icon>',
    'color-combined': '<fab-icon class="fi-color-primary fi-size-lg">home</fab-icon>',
    
    'state-active': '<fab-icon active>home</fab-icon>',
    'state-active-binding': '<fab-icon [active]="true">search</fab-icon>',
    'state-disabled': '<fab-icon disabled>home</fab-icon>',
    'state-disabled-binding': '<fab-icon [disabled]="isDisabled">search</fab-icon>',
    'state-clickable': '<fab-icon clickable (click)="handleClick()">home</fab-icon>',
    'state-clickable-binding': '<fab-icon [clickable]="true" (click)="onIconClick()">search</fab-icon>',
    'state-combined-1': '<fab-icon class="fi-size-lg fi-color-secondary" active>home</fab-icon>',
    'state-combined-2': '<fab-icon class="fi-color-danger" disabled>search</fab-icon>',
    'state-combined-3': '<fab-icon class="fi-size-xl fi-color-success" clickable (click)="onClick()">home</fab-icon>',
    'state-conflict': '<fab-icon clickable disabled (click)="onClick()">search</fab-icon>',
    
    'anim-pulse': '<fab-icon class="fi-anim-pulse">home</fab-icon>',
    'anim-spin': '<fab-icon class="fi-anim-spin">search</fab-icon>',
    'anim-bounce': '<fab-icon class="fi-anim-bounce">home</fab-icon>',
    'anim-shake': '<fab-icon class="fi-anim-shake">search</fab-icon>',
    'anim-fade': '<fab-icon class="fi-anim-fade">home</fab-icon>',
    'anim-beat': '<fab-icon class="fi-anim-beat">home</fab-icon>',
    'anim-flip': '<fab-icon class="fi-anim-flip">search</fab-icon>',
    'anim-swing': '<fab-icon class="fi-anim-swing">home</fab-icon>',
    
    'rotate-45': '<fab-icon class="fi-transform-rotate-45">home</fab-icon>',
    'rotate-90': '<fab-icon class="fi-transform-rotate-90">home</fab-icon>',
    'rotate-135': '<fab-icon class="fi-transform-rotate-135">home</fab-icon>',
    'rotate-180': '<fab-icon class="fi-transform-rotate-180">home</fab-icon>',
    'rotate-225': '<fab-icon class="fi-transform-rotate-225">home</fab-icon>',
    'rotate-270': '<fab-icon class="fi-transform-rotate-270">home</fab-icon>',
    'rotate-315': '<fab-icon class="fi-transform-rotate-315">home</fab-icon>',
    'flip-x': '<fab-icon class="fi-transform-flip-x">home</fab-icon>',
    'flip-y': '<fab-icon class="fi-transform-flip-y">home</fab-icon>',
    'flip-both': '<fab-icon class="fi-transform-flip-both">home</fab-icon>',
    'transform-combined-1': '<fab-icon class="fi-transform-flip-x fi-transform-rotate-90">home</fab-icon>',
    'transform-combined-2': '<fab-icon class="fi-transform-flip-y fi-transform-rotate-180">home</fab-icon>',
    'transform-combined-3': '<fab-icon class="fi-size-lg fi-color-primary fi-transform-rotate-90">home</fab-icon>',
    'transform-combined-4': '<fab-icon class="fi-size-xl fi-color-danger fi-transform-flip-x">search</fab-icon>',
    
    'layout-inline': '<fab-icon class="fi-layout-inline">home</fab-icon>',
    'layout-block': '<fab-icon class="fi-layout-block">home</fab-icon>',
    'layout-center': '<fab-icon class="fi-layout-center">home</fab-icon>',
    
    'dynamic-binding': `<fab-icon 
  [size]="32" 
  [color]="iconColor"
  [active]="isActive"
  [disabled]="isDisabled"
  [clickable]="true"
  (click)="handleIconClick()">
  home
</fab-icon>`,
    
    'text-content': '<fab-icon>10k</fab-icon>'
  };

  openPopup(codeKey: string): void {
    this.selectedCode = this.codeMap[codeKey] || '<fab-icon>home</fab-icon>';
    this.copied = false;
  }

  closePopup(): void {
    this.selectedCode = null;
    this.copied = false;
  }

  copyCode(): void {
    if (this.selectedCode) {
      navigator.clipboard.writeText(this.selectedCode).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      });
    }
  }

  handleIconClick(): void {
    console.log('Icon clicked - dynamic binding demo');
  }

  handleClick(): void {
    console.log('Icon clicked');
  }

  onIconClick(): void {
    console.log('Icon clicked via binding');
  }

  onClick(): void {
    console.log('Icon clicked - combined state');
  }
}