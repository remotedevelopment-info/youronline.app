<script>
	import { goto } from "$app/navigation";

  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-4ET516252P5765243MTQR3SA'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
        goto('/page/thankyou');
      }
  }).render('#paypal-button-container-P-4ET516252P5765243MTQR3SA'); // Renders the PayPal button
</script>
<div id="paypal-button-container-P-4ET516252P5765243MTQR3SA"></div>
