const { I } = inject();

class helpOrders {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }

  submit(question) {
    I.click("Pedir ajuda");
    I.click("#btnHelperOrder");
    I.fillField("#textQuestion", question);
    I.click("#btnSubmit");
  }
}

// For inheritance
module.exports = new helpOrders();
