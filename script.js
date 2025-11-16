 // Small interactive behavior: mobile menu toggle + smooth scroll + contact form stub
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    navToggle && navToggle.addEventListener('click', ()=>{
      if(mobileMenu.style.display === 'none') mobileMenu.style.display = 'block';
      else mobileMenu.style.display = 'none';
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link=>{
      link.addEventListener('click', (e)=>{
        const href = link.getAttribute('href');
        if(href.startsWith('#')){
          e.preventDefault();
          const target = document.querySelector(href);
          if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
          // hide mobile menu after click
          if(window.innerWidth <= 980) mobileMenu.style.display='none';
        }
      });
    });

    // Contact form handler (no backend) — validate and show a friendly message
    function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        alert('Please complete all fields.');
        return false;
      }
      // Simple email pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        alert('Please enter a valid email address.');
        return false;
      }

      // Simulate successful send — you can replace with fetch() to your backend later
      alert(`Thanks ${name}! Your message has been received. (This form has no backend.)`);
      e.target.reset();
      return false;
    }

    // Fill in current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Small animation: animate progress bars in on load
    window.addEventListener('load', ()=>{
      document.querySelectorAll('.progress > span').forEach(span=>{
        const w = span.style.width || '0%';
        span.style.width = '0%';
        setTimeout(()=> span.style.width = w, 60);
      });
    });