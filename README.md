# Shopify-Subscriber-Pop-Up

1. Add these files to your assets folder

js.cookie.min.js
custom-subscriber-popup.css
custom-subscriber-popup.js

2. Add this file to your sections folder

custom-subscriber-popup.liquid

3. Add this code in the head tags of your theme.liquid file

	{{ 'js.cookie.min.js' | asset_url | script_tag }}

4. Add this code below the body of your theme.liquid file

  {% if customer.accepts_marketing != true %}

    <script>
      console.log("does not accept marketing")
      let cookieStatus = Cookies.get('popUpVisited');
      if (!cookieStatus) {
      const popUpForm = document.getElementById('customNewsletter');
      console.log("passed condition");
      popUpForm.style.display = "flex";
      Cookies.set('popUpVisited', 'true', { expires: 7 })
    }
      
    </script>
    
  {% endif %}

  5. Open up your theme editor, click add a section, and add Pop Up

  6. Customize to your liking
