import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section-wrap py-16 md:py-20">
      <p class="eyebrow">Newsroom</p>
      <h1 class="mt-3 text-4xl font-bold text-white md:text-6xl">Original product stories and updates</h1>

      <div class="mt-12 grid gap-6">
        <article *ngFor="let item of newsItems" class="glass-card overflow-hidden p-6">
          <img [src]="item.image" [alt]="item.title" class="h-48 w-full rounded-2xl object-cover" />
          <p class="eyebrow mt-5">Company Update</p>
          <h2 class="mt-3 text-xl font-semibold leading-snug text-white">{{ item.title }}</h2>
          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm text-slate-400">{{ item.date }}</p>
            <a routerLink="/contact" class="btn-secondary px-4 py-2">Get Details</a>
          </div>
        </article>
      </div>
    </section>
  `
})
export class NewsPageComponent {
  readonly newsItems: NewsItem[] = [
    {
      title: 'NovaTech launches Vision Grid, a unified control center for multi-site monitoring',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech Learning introduces classroom coaching journeys powered by AI summaries',
      date: 'February 2, 2026',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech expands its partner ecosystem with certified deployment and integration services',
      date: 'January 14, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech announces Edge N1, a privacy-first analytics camera for modern campuses',
      date: 'December 4, 2025',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    }
  ];
}
