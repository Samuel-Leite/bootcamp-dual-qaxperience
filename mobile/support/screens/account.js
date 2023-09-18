const { I } = inject();

class account {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }

  userLoggedIn(enrollment_code) {
    I.see("Minha conta");
  }
}

// For inheritance
module.exports = new account();
