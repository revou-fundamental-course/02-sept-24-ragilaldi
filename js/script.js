// tombol perintah "button" --------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const initialButtonSgt = document.querySelector('.button-sgt');
    const initialButtonJjg = document.querySelector('.button-jjg');
    const buttonContainer = document.getElementById('button-opsi')
    const luasSgtButtons = document.querySelectorAll('.btn1');
    const kllSgtButtons = document.querySelectorAll('.btn2');
    const luasJjgButtons = document.querySelectorAll('.btn3');
    const kllJjgButtons = document.querySelectorAll('.btn4');
  
    let newButtonUpSgt, newButtonUpJjg = false;
    // kondisi tombol segitiga
    initialButtonSgt.addEventListener('click', toggleButtons);
    function toggleButtons() {
      if (newButtonUpSgt) {
        showButtons();
      } else {
        hideButtons();
      }
      newButtonUpSgt = !newButtonUpSgt;
    }
    // kondisi tombol jajar genjang
    initialButtonJjg.addEventListener('click', toggleButtons1);
    function toggleButtons1() {
      if (newButtonUpJjg) {
        showButtons1();
      } else {
        hideButtons1();
      }
      newButtonUpJjg = !newButtonUpJjg;
    }
    // function tombol show/hide segitiga
    function showButtons() {
      luasSgtButtons.forEach((button) => button.style.display = 'block');
      kllSgtButtons.forEach((button) => button.style.display = 'block');
    }
    function hideButtons() {
      luasSgtButtons.forEach((button) => button.style.display = 'none');
      kllSgtButtons.forEach((button) => button.style.display = 'none');
    }
    // function tombol show/hide jajar genjang
    function showButtons1() {
      luasJjgButtons.forEach((button) => button.style.display = 'block');
      kllJjgButtons.forEach((button) => button.style.display = 'block');
    }
    function hideButtons1() {
      luasJjgButtons.forEach((button) => button.style.display = 'none');
      kllJjgButtons.forEach((button) => button.style.display = 'none');
    }
  });
  
  // bagian image slider ==================================================
  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.gambar');
  const sliderImages = document.querySelectorAll('.slider-image');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentImageIndex = 0;
  
  // Set init gambar
  sliderImages[currentImageIndex].style.display = 'block';
  // tombol kembali
  prevButton.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = sliderImages.length - 1;
    }
    updateSlider();
  });
  // tombol next
  nextButton.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= sliderImages.length) {
      currentImageIndex = 0;
    }
    updateSlider();
  });
  
  // update slider
  function updateSlider() {
    // hide images
    sliderImages.forEach(image => image.style.display = 'none');
    // show image
    sliderImages[currentImageIndex].style.display = 'block';
  }
  //===========================================================================
  
  // Get the button elements
  const showFormBtn1 = document.querySelector('.btn1');
  const showFormBtn2 = document.querySelector('.btn2');
  const showFormBtn3 = document.querySelector('.btn3');
  const showFormBtn4 = document.querySelector('.btn4');
  const formContainer = document.getElementById('form-container');
  const formKllContainer = document.getElementById('keliling-form');
  const formLuasJjgContainer = document.getElementById('luas-form-jjg');
  const formKllJjgContainer = document.getElementById('keliling-form-jjg');
  
  // button show form luas segitiga
  showFormBtn1.addEventListener('click', () => {
    // Toggle display form container
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  });
  // button show form keliling segitiga
  showFormBtn2.addEventListener('click', () => {
    // Toggle display form container
    formKllContainer.style.display = formKllContainer.style.display === 'none' ? 'block' : 'none';
  });
  // button show form luas jajar genjang 
  showFormBtn3.addEventListener('click', () => {
    // Toggle display form container
    formLuasJjgContainer.style.display = formLuasJjgContainer.style.display === 'none' ? 'block' : 'none';
  });
  // button show form keliling jajar genjang
  showFormBtn4.addEventListener('click', () => {
    // Toggle display form container
    formKllJjgContainer.style.display = formKllJjgContainer.style.display === 'none' ? 'block' : 'none';
  });
  
  // function rumus luas segitiga
  document.addEventListener('DOMContentLoaded', () => {
    // get input element segitiga
    const alasInputSgt = document.getElementById('luas-sgt');
    const tinggiInputSgt = document.getElementById('tinggi-sgt');
    const resultElementSgt = document.getElementById('result-luas');
    const hitungButtonLuas = document.getElementById('hitung-input');
    const resetButtonLuas = document.getElementById('reset-input');
    const sisi1Input = document.getElementById('sisi1');
    const sisi2Input = document.getElementById('sisi2');
    const sisi3Input = document.getElementById('sisi3');
    const hitungKelilingButton = document.getElementById('hitung-input-kll');
    const resetKelilingButton = document.getElementById('reset-input-kll');
    const resultKelilingElement = document.getElementById('result-keliling');
  
    //get input element jajar genjang
    const alasInputJjg = document.getElementById('luas-jjg');
    const tinggiInputJjg = document.getElementById('tinggi-jjg');
    const hitungButtonLuasJjg = document.getElementById('hitung-input-luas-jjg');
    const resetButtonLuasJjg = document.getElementById('reset-input-luas-jjg');
    const resultElementLuasJjg = document.getElementById('result-luas-jjg');
    const nilaiAInput = document.getElementById('nilai-a-jjg');
    const nilaiBInput = document.getElementById('nilai-b-jjg');
    const hitungButtonKll = document.getElementById('hitung-input-kll-jjg');
    const resetButtonKll = document.getElementById('reset-input-kll-jjg');
    const resultElementKll = document.getElementById('result-kll-jjg');
    
    // function tombol hitung luas segitiga
    hitungButtonLuas.addEventListener('click', (event) => {
      event.preventDefault();
      luasSegitiga();
    });
  
    // function tombol reset luas segitiga
    resetButtonLuas.addEventListener('click', (event) => {
      event.preventDefault();
      resetForm();
    });
  
    // function tombol hitung keliling segitiga
    hitungKelilingButton.addEventListener('click', (event) => {
      event.preventDefault();
      hitungKelilingSgt();
    });
    // function tombol reset form keliling segitiga
    resetKelilingButton.addEventListener('click', (event) => {
      event.preventDefault();
      resetKelilingForm();
    });
  
    // function tombol hitung luas jajar genjang
    hitungButtonLuasJjg.addEventListener('click', (event) => {
      event.preventDefault();
      luasJajarGenjang();
    });
    // function tombol reset luas jajar genjang
    resetButtonLuasJjg.addEventListener('click', (event) => {
      event.preventDefault();
      resetLuasFormJjg();
    });
    // function tombol hitung keliling jajar genjang
    hitungButtonKll.addEventListener('click', (event) => {
      event.preventDefault();
      KllJajarGenjang();
    });
    // function tombol reset keliling jajar genjang
    resetButtonKll.addEventListener('click', (event) => {
      event.preventDefault();
      resetKllFormJjg();
    });
  
    // function/kondisi luas segitiga========================
    function luasSegitiga() {
      // input nilai
      const alas = parseFloat(alasInputSgt.value);
      const tinggi = parseFloat(tinggiInputSgt.value);
  
      // Check valid input
      if (isNaN(alas) || isNaN(tinggi)) {
          resultElementSgt.innerHTML = 'Input masih kosong/tidak valid!';
          return;
      }
      if (alas <= 0 || tinggi <= 0) {
        resultElementSgt.innerHTML = 'nilai input harus lebih besar dari 0!';
        return;
      }
      // rumus
      const luas = 0.5 * alas * tinggi;
      // Update result
      resultElementSgt.innerHTML = `Maka, luas segitiga : <b>${luas.toFixed(2)} cm²</b>`;
      }
      //====================================
  
      // function/kondisi Keliling Segitiga======================
      function hitungKelilingSgt() {
        const sisi1 = parseFloat(sisi1Input.value);
        const sisi2 = parseFloat(sisi2Input.value);
        const sisi3 = parseFloat(sisi3Input.value);
    
        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
            resultKelilingElement.innerHTML = 'Input masih kosong/tidak valid!';
            return;
        }
    
        if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
            resultKelilingElement.innerHTML = 'nilai input harus lebih besar dari 0!';
            return;
        }
    
        const keliling = sisi1 + sisi2 + sisi3;
        resultKelilingElement.textContent = `Maka, keliling segitiga: ${keliling.toFixed(2)} cm²`;
      }
      //========================================
  
      // function/kondisi luas Jajar Genjang========================
    function luasJajarGenjang() {
      // input nilai
      const alas = parseFloat(alasInputJjg.value);
      const tinggi = parseFloat(tinggiInputJjg.value);
  
      // Check valid input
      if (isNaN(alas) || isNaN(tinggi)) {
          resultElementLuasJjg.innerHTML = 'Input masih kosong/tidak valid!';
          return;
      }
      if (alas <= 0 || tinggi <= 0) {
        resultElementLuasJjg.innerHTML = 'nilai input harus lebih besar dari 0!';
        return;
      }
      // rumus
      const luasJjg = (alas * tinggi);
      // Update result
      resultElementLuasJjg.innerHTML = `Maka, luas Jajar Genjang : <b>${luasJjg.toFixed(2)} cm²</b>`;
      }
    //====================================
    
    function KllJajarGenjang() {
      // input nilai
      const nilaiA = parseFloat(nilaiAInput.value);
      const nilaiB = parseFloat(nilaiBInput.value);
  
      // Check valid input
      if (isNaN(nilaiA) || isNaN(nilaiB)) {
        resultElementKll.innerHTML = 'Input masih kosong/tidak valid!';
          return;
      }
      if (nilaiA <= 0 || nilaiB <= 0) {
        resultElementKll.innerHTML = 'nilai input harus lebih besar dari 0!';
        return;
      }
      // rumus
      const kllJjg = 2 * (nilaiA + nilaiB);
      // Update result
      resultElementKll.innerHTML = `Maka, Keliling Jajar Genjang : <b>${kllJjg.toFixed(2)} cm²</b>`;
      }
    //====================================
    // function reset luas form
    function resetForm() {
      alasInputSgt.value = '';
      tinggiInputSgt.value = '';
      resultElementSgt.innerHTML = '';
    }
    // Function reset keliling form
    function resetKelilingForm() {
      sisi1Input.value = '';
      sisi2Input.value = '';
      sisi3Input.value = '';
      resultKelilingElement.textContent = '';
    }
    // Function reset luas form jajar genjang
    function resetLuasFormJjg() {
      alasInputJjg.value = '';
      tinggiInputJjg.value = '';
      resultElementLuasJjg.textContent = '';
    }
    // Function reset keliling form jajar genjang
    function resetKllFormJjg() {
      nilaiAInput.value = '';
      nilaiBInput.value = '';
      resultElementKll.textContent = '';
    }
  });
  
  // function tombol bantuan
  const helpButton = document.querySelector('.help-button');
  helpButton.addEventListener('click', () => {
    alert('Klik 2x dalam penggunaan tombol segitiga dan jajar genjang, hanya untuk triger DOM javascript');
  });
  
  // By : Ragil Aldyansyah (02-09-2024 RevoU) - Foundamental Course
  