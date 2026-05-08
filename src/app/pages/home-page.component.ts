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
    <section class="section-wrap py-16 md:py-24">
      <div class="glass-card relative overflow-hidden p-8 md:p-12">
        <div class="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div class="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div class="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p class="eyebrow">Home</p>
            <h1 class="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Next-generation visual intelligence for safer spaces.
            </h1>
            <p class="mt-6 max-w-2xl text-lg text-slate-300">
              NovaTech Technologies designs empathy-led surveillance and education platforms that help teams respond faster, teach better, and operate smarter.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a routerLink="/businesses" class="btn-primary">Explore Solutions</a>
              <a routerLink="/contact" class="btn-secondary">Talk to Sales</a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Technology operations center"
            class="h-72 w-full rounded-2xl object-cover shadow-2xl shadow-cyan-950/20 lg:h-96"
          />
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl border border-slate-500/30 bg-slate-950/40 p-4">
            <p class="text-2xl font-bold text-cyan-300">360°</p>
            <p class="mt-1 text-sm text-slate-300">Context-rich camera visibility</p>
          </div>
          <div class="rounded-2xl border border-slate-500/30 bg-slate-950/40 p-4">
            <p class="text-2xl font-bold text-cyan-300">24/7</p>
            <p class="mt-1 text-sm text-slate-300">Operational confidence at scale</p>
          </div>
          <div class="rounded-2xl border border-slate-500/30 bg-slate-950/40 p-4">
            <p class="text-2xl font-bold text-cyan-300">AI+</p>
            <p class="mt-1 text-sm text-slate-300">Actionable analytics workflows</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-wrap grid gap-8 py-8 lg:grid-cols-2">
      <article class="glass-card p-8">
        <img
          src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1200&q=80"
          alt="Modern security camera"
          class="h-44 w-full rounded-2xl object-cover"
        />
        <p class="eyebrow mt-6">Our Businesses</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Purpose-built for surveillance and education.</h2>
        <p class="mt-4 text-slate-300">NovaTech helps organizations improve outcomes through advanced video platforms and data-enabled insights.</p>
        <a routerLink="/businesses" class="btn-secondary mt-7">View Businesses</a>
      </article>

      <article class="glass-card p-8">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80"
          alt="Team strategy meeting"
          class="h-44 w-full rounded-2xl object-cover"
        />
        <p class="eyebrow mt-6">Our People</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Human-first leadership, future-ready execution.</h2>
        <p class="mt-4 text-slate-300">From product innovation to customer success, our teams move with speed, rigor, and empathy.</p>
        <a routerLink="/about" class="btn-secondary mt-7">
          Meet the Team
        </a>
      </article>
    </section>

    <section class="section-wrap py-12">
      <div class="glass-card p-8 md:p-10">
        <h3 class="text-3xl font-semibold text-white">Build the future with NovaTech</h3>
        <p class="mt-4 max-w-3xl text-slate-300">Join designers, engineers, and operators shaping the next standard in video intelligence and learning technology.</p>
        <a routerLink="/careers" class="btn-primary mt-7">
          Open Roles
        </a>
      </div>
    </section>

    <section class="section-wrap py-12">
      <p class="eyebrow">Insights</p>
      <h3 class="mt-2 text-3xl font-semibold text-white">Latest from NovaTech</h3>
      <div class="mt-10 grid gap-8 md:grid-cols-2">
        <article *ngFor="let item of newsItems" class="glass-card overflow-hidden">
          <img [src]="item.image" [alt]="item.title" class="h-56 w-full object-cover">
          <div class="p-6">
            <p class="eyebrow mt-1">Company Update</p>
            <h4 class="mt-3 text-xl font-semibold leading-snug text-white">{{ item.title }}</h4>
            <p class="mt-4 text-sm text-slate-400">{{ item.date }}</p>
            <a routerLink="/news" class="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">Read Story</a>
          </div>
        </article>
      </div>
    </section>
  `
})
export class HomePageComponent {
  readonly newsItems: NewsItem[] = [
    {
      title: 'NovaTech launches Vision Grid, a unified control center for multi-site monitoring',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech Learning introduces classroom coaching journeys powered by AI summaries',
      date: 'February 2, 2026',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech expands its partner ecosystem with certified deployment and integration services',
      date: 'January 14, 2026',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'NovaTech announces Edge N1, a privacy-first analytics camera for modern campuses',
      date: 'December 4, 2025',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    }
  ];
}
