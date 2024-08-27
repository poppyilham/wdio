describe('Test saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        // Open URL SauceDemo
        await browser.url("https://www.saucedemo.com/")

        // Login 
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$("#login-button")

        await usernameTextbox.addValue("standard_user")
        await browser.pause(1000)
        await passwordTextbox.addValue("secret_sauce")
        await browser.pause(1000)
        await loginButton.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
        // await expect(browser).toHaveTitle("Swag Labs")
    });
});


  describe('Test Saucedemo', () => {
    it('Test 2 - Add item to cart', async () => {
      // Add Sauce Labs Backpack to cart
      const backpackItem = await browser.$('=Sauce Labs Backpack');
      const addToCartButton = await browser.$('.btn_primary');

      await backpackItem.click();
      await browser.pause(3000)
      await addToCartButton.click();
      await browser.pause(3000)
  
      // Navigate to cart page
      await browser.url('https://www.saucedemo.com/cart.html');
      await browser.pause(3000)
  
  
      // Validate Add item to cart success
      const cartItem = await browser.$('=Sauce Labs Backpack');
      const cartItemText = await cartItem.getText();

      await expect(cartItem).toBeDisplayed();
      await browser.pause(3000)
  
      await expect(cartItemText).toContain('Sauce Labs Backpack');
      await browser.pause(3000)

      await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html")
      await browser.pause(2000)

    });
  });
