import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDashboardComponent } from './home-dashboard.component';

describe('DashboardComponent', () => {
    let component: HomeDashboardComponent;
    let fixture: ComponentFixture<HomeDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HomeDashboardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
