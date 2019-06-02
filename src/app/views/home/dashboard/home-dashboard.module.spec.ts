
import { HomeDashboardModule } from './home-dashboard.module';

describe('DashboardModule', () => {
    let dashboardModule: HomeDashboardModule;

    beforeEach(() => {
        dashboardModule = new HomeDashboardModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
