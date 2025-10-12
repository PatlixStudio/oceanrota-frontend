import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeaJob } from '../core/models/sea-jobs.model';
import { SeaPersonnel } from '../core/models/sea-personnel';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeaJobsService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api/v1/sea-jobs';

    jobs = signal<SeaJob[]>([]);
    personnelResults = signal<SeaPersonnel[]>([]);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    fetchAllJobs(page = 1, limit = 10) {
        this.loading.set(true);

        this.http.get<{ data: SeaJob[]; total: number; page: number; limit: number }>(
            `${this.apiUrl}?page=${page}&limit=${limit}`
        ).pipe(
            tap(res => {
                this.jobs.set(res.data);   // set the jobs array
            }),
            catchError(err => {
                this.error.set('Failed to load jobs');
                throw err;
            }),
            tap(() => this.loading.set(false))
        ).subscribe();
    }

    createJob(data: SeaJob): Observable<SeaJob> {
        return this.http.post<SeaJob>(`${this.apiUrl}`, data).pipe(
            tap(job => this.jobs.set([...this.jobs(), job]))
        );
    }

    updateJob(id: number, data: Partial<SeaJob>): Observable<SeaJob> {
        return this.http.patch<SeaJob>(`${this.apiUrl}/${id}`, data).pipe(
            tap(updated => {
                this.jobs.set(this.jobs().map(j => j.id === id ? { ...j, ...updated } : j));
            })
        );
    }

    deleteJob(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            tap(() => this.jobs.set(this.jobs().filter(j => j.id !== id)))
        );
    }

    // Search personnel for a specific job
    searchPersonnel(jobId: number, filters?: Partial<SeaPersonnel>) {
        const params: any = { ...filters };
        this.loading.set(true);
        this.http.get<SeaPersonnel[]>(`${this.apiUrl}/${jobId}/candidates`, { params }).pipe(
            tap(data => this.personnelResults.set(data)),
            catchError(err => {
                this.error.set('Failed to search personnel');
                throw err;
            }),
            tap(() => this.loading.set(false))
        ).subscribe();
    }
}
