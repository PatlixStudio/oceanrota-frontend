import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Crew } from '../core/models/crew';

@Injectable({ providedIn: 'root' })
export class CrewService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/crew';

  // --- SIGNALS ---
  personnel = signal<Crew[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  // Derived signal: number of active personnel
  activeCount = computed(() => this.personnel().filter(p => p.isActive).length);

  constructor() {
    this.fetchAll();
  }

  // ✅ Fetch all personnel
  fetchAll() {
    this.loading.set(true);
    this.http.get<Crew[]>(`${this.apiUrl}`).pipe(
      tap((data) => this.personnel.set(data)),
      catchError((err) => {
        console.error('❌ Failed to fetch personnel:', err);
        this.error.set('Failed to load personnel data.');
        throw err;
      }),
      tap(() => this.loading.set(false))
    ).subscribe();
  }

  // ✅ Fetch a single record by ID
  getById(id: number): Observable<Crew> {
    return this.http.get<Crew>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create a new personnel
  create(data: Crew): Observable<Crew> {
    return this.http.post<Crew>(`${this.apiUrl}`, data).pipe(
      tap((created) => {
        this.personnel.set([...this.personnel(), created]);
      }),
      catchError((err) => {
        console.error('❌ Failed to create personnel:', err);
        throw err;
      })
    );
  }

  // ✅ Update personnel
  update(id: number, data: Partial<Crew>): Observable<Crew> {
    return this.http.patch<Crew>(`${this.apiUrl}/${id}`, data).pipe(
      tap((updated) => {
        const updatedList = this.personnel().map((p) =>
          p.id === id ? { ...p, ...updated } : p
        );
        this.personnel.set(updatedList);
      }),
      catchError((err) => {
        console.error('❌ Failed to update personnel:', err);
        throw err;
      })
    );
  }

  // ✅ Delete personnel
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.personnel.set(this.personnel().filter((p) => p.id !== id));
      }),
      catchError((err) => {
        console.error('❌ Failed to delete personnel:', err);
        throw err;
      })
    );
  }

  // ✅ Refresh manually
  refresh() {
    this.fetchAll();
  }
}
