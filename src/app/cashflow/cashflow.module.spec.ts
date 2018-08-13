import { CashflowModule } from './cashflow.module';

describe('CashflowModule', () => {
  let cashflowModule: CashflowModule;

  beforeEach(() => {
    cashflowModule = new CashflowModule();
  });

  it('should create an instance', () => {
    expect(cashflowModule).toBeTruthy();
  });
});
