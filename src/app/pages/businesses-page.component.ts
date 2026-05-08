import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="section-wrap py-16 md:py-20">
      <p class="eyebrow">Our Businesses</p>
      <h1 class="mt-3 text-4xl font-bold text-white md:text-6xl">Surveillance and education, reimagined.</h1>
      <p class="mt-6 max-w-3xl text-lg text-slate-300">
        NovaTech Technologies builds products that improve visibility, accountability, and operational outcomes in safety-critical environments.
      </p>
      <img
        src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
        alt="Surveillance technology dashboard"
        class="mt-8 h-72 w-full rounded-3xl object-cover"
      />

      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <article class="glass-card p-8">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
            alt="Retail environment security"
            class="h-44 w-full rounded-2xl object-cover"
          />
          <h2 class="mt-6 text-2xl font-semibold text-white">Oncam</h2>
          <p class="mt-4 text-slate-300 leading-relaxed">
            Intelligent 360-degree video solutions for security, retail, and smart environments.
          </p>
          <p class="mt-6 text-sm text-cyan-300">Use cases: perimeter security, occupancy awareness, incident review</p>
        </article>
        <article class="glass-card p-8">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            alt="Learning technology in classroom"
            class="h-44 w-full rounded-2xl object-cover"
          />
          <h2 class="mt-6 text-2xl font-semibold text-white">NovaTech Learning</h2>
          <p class="mt-4 text-slate-300 leading-relaxed">
            Classroom-focused video and analytics tools that support improved teaching and learning outcomes.
          </p>
          <p class="mt-6 text-sm text-cyan-300">Use cases: reflective practice, instructional coaching, school improvement</p>
        </article>
      </div>
    </section>
  `
})
export class BusinessesPageComponent {}
