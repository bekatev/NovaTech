import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="section-wrap py-16 md:py-20">
      <p class="eyebrow">Careers</p>
      <h1 class="mt-3 text-4xl font-bold text-white md:text-6xl">Build products people trust.</h1>
      <p class="mt-6 max-w-3xl text-lg text-slate-300">
        We are always looking for passionate and driven individuals across engineering, product, operations, and commercial teams.
      </p>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        alt="Collaborative workplace"
        class="mt-8 h-72 w-full rounded-3xl object-cover"
      />

      <div class="mt-12 grid gap-6">
        <article class="glass-card p-6">
          <h2 class="text-xl font-semibold text-white">Frontend Engineer</h2>
          <p class="mt-2 text-slate-300">Build modern web experiences for NovaTech platforms.</p>
          <p class="mt-4 text-sm text-cyan-300">Hybrid • Full-time • Product Engineering</p>
        </article>
        <article class="glass-card p-6">
          <h2 class="text-xl font-semibold text-white">Product Manager</h2>
          <p class="mt-2 text-slate-300">Drive roadmap, discovery, and cross-team delivery.</p>
          <p class="mt-4 text-sm text-cyan-300">Hybrid • Full-time • Product Strategy</p>
        </article>
        <article class="glass-card p-6">
          <h2 class="text-xl font-semibold text-white">Customer Success Specialist</h2>
          <p class="mt-2 text-slate-300">Support enterprise customers in getting measurable value.</p>
          <p class="mt-4 text-sm text-cyan-300">Remote • Full-time • Customer Experience</p>
        </article>
      </div>
    </section>
  `
})
export class CareersPageComponent {}
