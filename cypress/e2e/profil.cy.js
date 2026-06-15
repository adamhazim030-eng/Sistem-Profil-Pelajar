describe('Ujian Sistem Profil Pelajar', () => {
  it('Memastikkan borang maklumat pelajar berfungsi dengan betul', () => {
    cy.visit('index.html'); // Sesuai jika menggunakan cypress di local tanpa server, atau letakkan path penuh fail index.html anda

    cy.get('#nama').type('Adam Hazim');
    cy.get('#program').select('Perisian');
    cy.get('#email').type('adam@example.com');
    cy.get('#btnPapar').click();

    cy.get('#result').should('be.visible');
    cy.get('#outNama').should('contain', 'Adam Hazim');
    cy.get('#outProgram').should('contain', 'Perisian');
    cy.get('#outEmail').should('contain', 'adam@example.com');
  });
});