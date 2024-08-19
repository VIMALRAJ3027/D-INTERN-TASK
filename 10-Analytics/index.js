
document.querySelectorAll('.home, .home1, .home2, .home4, .home5, .home6, .home7, .home8, .home9').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.tab div').forEach((tab) => tab.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  document.querySelector('.search1').addEventListener('click', () => {
    const searchQuery = prompt('Enter your search query:');
    alert(`Searching for: ${searchQuery}`);
  });
  
  document.querySelector('.profile').addEventListener('click', () => {
    alert('Profile clicked!');
  });
  
  document.querySelector('.add-wallet').addEventListener('click', () => {
    const walletAmount = prompt('Enter amount to add to the wallet:');
    if (walletAmount) {
      alert(`Added $${walletAmount} to your wallet!`);
    }
  });
  
  document.querySelectorAll('.btn, .btn1').forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('Displaying data for this year');
    });
  });
  
  