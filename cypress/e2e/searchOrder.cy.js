import { TransaksiPage } from '../support/pageObjects/transaksiPage';

describe('Search Order Test', () => {
  beforeEach(() => {
    // Panggil login sebelum setiap test case
    cy.setDesktopViewport();
    cy.login();
  });

  it('should create a new purchase order', () => {
    
    const transaksiPage = new TransaksiPage();
    
    transaksiPage.clickPembelian();
    transaksiPage.openTransaksiPembelian();
    transaksiPage.clickCloseStep();
    transaksiPage.searchOrder('Akulaku');
    transaksiPage.clickTerapkan();
    transaksiPage.assertFilterResult();
   
   transaksiPage.assertNamaPemasok('Akulaku');
 });
});