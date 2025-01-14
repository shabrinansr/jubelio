export class TransaksiPage {
    addButton = "(//button[normalize-space()='Tambah Baru'])[1]";
    namaPemasok = "(//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeSmall border-bottom-cell undefined undefined bg-white font-size-table text-left css-1o6fzn1'])[1]";
    closeStep = "(//button[@class='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root pr-0 css-1hw9j7s'])[1]";
    pembelian ="(//span[normalize-space()='Pembelian'])[1]";
    transaksiPembelian ="(//a[@class='bg-white start-item d-flex text-left'])[1]";
    searchOrder ="(//input[@id='mui-63'])[1]";
    filterButton ="(//button[normalize-space()='Terapkan'])[1]";
    assertFilterResult ="(//span[@class='css-1447yf0'])[1]";

    clickAddButton() {
        cy.xpath(this.addButton).click();
    }

    clickCloseStep() {
        cy.xpath(this.closeStep).click();
    }

    clickPembelian() {
        cy.xpath(this.pembelian).click();
    }

    openTransaksiPembelian() {
        cy.xpath(this.transaksiPembelian).click();
    }

    searchOrder(){
        cy.xpath(this.searchOrder).type();
    }

    clickTerapkan(){
        cy.xpath(this.filterButton).click();
    }

    assertNamaPemasok(expectedValue) {
        cy.xpath(this.namaPemasok).should('have.text', expectedValue);
    }

    assertFilterResult(expectedValue) {
        cy.xpath(this.assertFilterResult).should('have.text', expectedValue);
    }
}
