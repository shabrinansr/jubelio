import { TransaksiPage, AddOrderPage } from '../support/pageObjects/transaksiPage';

describe('Purchase Order Test', () => {
  beforeEach(() => {
    // Panggil login sebelum setiap test case
    cy.setDesktopViewport();
    cy.login();
  });

  it('should create a new purchase order', () => {
    
    const transaksiPage = new TransaksiPage();
    const addOrderPage = new AddOrderPage();
    
    transaksiPage.clickPembelian();
    transaksiPage.openTransaksiPembelian();
    transaksiPage.clickCloseStep();
    transaksiPage.clickAddButton(); 
    addOrderPage.selectPemasok('Akulaku'); 
    addOrderPage.selectLokasi('Pusat'); 
    addOrderPage.clickAddProductButton(); 
    addOrderPage.selectProduct(); 
    addOrderPage.typeHarga('200000'); 
    addOrderPage.clickSaveButton(); 
   
   transaksiPage.assertNamaPemasok('Akulaku');
 });
});