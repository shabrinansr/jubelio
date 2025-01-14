export class AddOrderPage {
    pemasokDropdown = "(//input[@id='mui-6'])[1]";
    lokasiDropdown = "(//input[@id='mui-10'])[1]";
    addProductButton = "(//button[@class='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root py-2 px-4 css-1hw9j7s'])[1]";
    listProduct = "(//div[@class='css-1rjpksd'])[1]";
    hargaField = "(//div[@class='grid-cell-content css-w29vrx'])[1]";
    saveButton = "(//button[normalize-space()='Simpan'])[1]";
    

    selectPemasok(value) {
        cy.xpath(this.pemasokDropdown).click();
        cy.xpath(`//li[normalize-space()='${value}']`).click();
    }

    selectLokasi(value) {
        cy.xpath(this.lokasiDropdown).click();
        cy.xpath(`//li[normalize-space()='${value}']`).click();
    }

    clickAddProductButton() {
        cy.xpath(this.addProductButton).click();
    }

    selectProduct() {
        cy.xpath(this.listProduct).click();
    }

    typeHarga(value) {
        cy.xpath(this.hargaField).clear().type(value);
    }

    clickSaveButton() {
        cy.xpath(this.saveButton).click();
    }
}
