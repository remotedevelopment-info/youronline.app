<script>
    import { fade } from 'svelte/transition';
    
    let first_name = '';
    let last_name = '';
    let email = '';
    let message = '';
    let submitted = false;
    let isLoading = false;
    let error = null;
  
    const API_URL = 'https://api.youronline.app/api/contact';
    //  for localhost testing: 
    //  const API_URL = 'http://localhost:8001/api/contact';
    
    const handleSubmit = async () => {
      isLoading = true;
      error = null;
      
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            message
          })
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Reset form
        first_name = '';
        last_name = '';
        email = '';
        message = '';
        
        submitted = true;
        setTimeout(() => submitted = false, 3000);
        
      } catch (e) {
        console.error('Submission error:', e);
        error = 'There was a problem sending your message. Please try again later.';
      } finally {
        isLoading = false;
      }
    };
  </script>

  <section class="bg-white dark:bg-gray-900 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Send your questions and enquiries 
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          We'll get back to you as soon as possible.
        </p>
      </div>
      
      <div class="mt-12 max-w-lg mx-auto">
        <form on:submit|preventDefault={handleSubmit} class="grid grid-cols-1 gap-6">
            <div>
                <label for="first_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  bind:value={first_name}
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
            <div>
            <label for="last_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              bind:value={last_name}
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              bind:value={email}
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              bind:value={message}
              rows="4"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
        
        {#if submitted}
          <div
            transition:fade
            class="mt-4 p-4 bg-green-100 dark:bg-green-800 rounded-md text-green-700 dark:text-green-100 text-center"
          >
            Thank you for your message! We'll be in touch soon.
          </div>
        {/if}
      </div>
    </div>
  </section>